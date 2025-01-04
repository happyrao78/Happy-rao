"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import bg from "/public/background/about-background.png";
import happy from "../../../public/background/logo.png";
import AnimatedCursor from "react-animated-cursor";
import AboutDetails from "@/app/components/about";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Dummy quotes for mobile devices
  const dummyQuotes = [
    { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { content: "Get busy living or get busy dying.", author: "Stephen King" },
  ];

  // Function to check if the device is mobile based on screen width
  const isMobileDevice = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  // Fetch the latest quote from an API
  useEffect(() => {
    const fetchQuote = async () => {
      if (isMobileDevice()) {
        // Use dummy quotes for mobile devices
        const randomIndex = Math.floor(Math.random() * dummyQuotes.length);
        const selectedQuote = dummyQuotes[randomIndex];
        setQuote(selectedQuote.content);
        setAuthor(selectedQuote.author);
        setIsLoading(false);
      } else {
        try {
          const response = await fetch("https://api.quotable.io/random");
          const data = await response.json();
          setQuote(data.content);
          setAuthor(data.author);
          setIsLoading(false); // Hide placeholder once the quote is fetched
        } catch (error) {
          console.error("Error fetching the quote: ", error);
          setIsLoading(false);
        }
      }
    };

    fetchQuote();
  }, []);

  // Dynamically adjust font size based on quote length
  const getFontSize = () => {
    if (quote.length > 150) return "text-xl"; // Smaller font for long quotes
    if (quote.length > 100) return "text-2xl"; // Medium font for mid-length quotes
    return "text-3xl"; // Larger font for short quotes
  };

  return (
    <>
      <AnimatedCursor 
        innerSize={8}
        outerSize={30}
        color="256, 256, 256"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />

      <Image 
        src={bg} 
        alt="background-image" 
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-[60%] -translate-y-1/2 left-0" />

      {/* Image with revealing effect and hover effects */}
      <Image
        priority
        sizes="100vw"
        src={happy}
        alt="background-image"
        className={`-z-50 top-[50%] w-100 h-100 rounded-3xl object-center justify-center items-center left-1/2 mt-10 opacity-95 transition-opacity duration-1000 ${
          imageLoaded ? 'opacity-100 hover:opacity-75 hover:scale-110' : 'opacity-0'
        }`}
        onLoad={() => setImageLoaded(true)}
      />

      {/* Quote Section */}
     

      <AboutDetails />
    </>
  );
}
