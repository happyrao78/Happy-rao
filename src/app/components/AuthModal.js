import React from "react";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, githubProvider } from "./config"; // Ensure this path is correct
import { toast } from "sonner"; // For feedback

const AuthModal = ({ onClose }) => {
  const handleLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in successfully!"); // Feedback on success
      onClose(); // Close modal
    } catch (error) {
      console.error("Error signing in: ", error);
      toast.error("Failed to log in. Please try again."); // Feedback on error
    }
  };

  return (
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-50 ">
      <motion.div
        className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()} // Prevent click propagation
      >
        <h2 className="font-light text-2xl">Sign In</h2>
        <button
          onClick={() => handleLogin(provider)}
          className="px-4 mr-2 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded "
        >
          Sign in with Google
        </button>
        <button
          onClick={() => handleLogin(githubProvider)}
          className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
        >
          Sign in with GitHub
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded flex items-center justify-center mx-auto"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default AuthModal;
