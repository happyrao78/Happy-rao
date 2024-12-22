"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import AuthModal from "../AuthModal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Contact({ isLoggedIn }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showModal,setShowModal] = useState(false)

  const onSubmit = async (data) => {
    // Check if the user is logged in
    if (!isLoggedIn) {
      toast.error("You must be logged in to send a message.");

      setTimeout(() => {
        setShowModal(true)
      }, 2000);
      
      
      return;
    }

    const toastId = toast.loading("Sending your message to Happy, Please wait...");

    const formData = new FormData();
    formData.append("access_key", "8c1faef5-4354-4e6b-b812-9687c9243ee8"); // Replace with your actual access key
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        toast.success(
          "Your message has been sent successfully to Happy Yadav, he will get back to you soon!",
          { id: toastId }
        );
        reset(); // Clear form fields after successful submission
      } else {
        toast.error(
          "There was an error submitting the form. Please try again later.",
          { id: toastId }
        );
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("There was a network error. Please try again later.", { id: toastId });
    }
  };

  return (
    <div className="contact-form-container">
      <Toaster className="text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg " />
      {showModal && <AuthModal onClose={()=> setShowModal(false)} />}

      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Your Name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long!",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}

        <motion.input
          variants={item}
          type="email"
          placeholder="Your Email"
          {...register("email", { required: "This field is required!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}

        <motion.textarea
          variants={item}
          placeholder="Your Message"
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters long!",
            },
            minLength: {
              value: 3,
              message: "Message should be at least 3 characters long!",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Send Message"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </motion.form>
    </div>
  );
}
