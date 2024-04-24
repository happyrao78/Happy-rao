import { Github, Home, Linkedin, Palette, Phone, Twitter, User, NotebookText } from "lucide-react";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className='w-full h-auto' strokeWidth={1.5} />;
    case "about":
      return <User className='w-full h-auto' strokeWidth={1.5} />;
    case "projects":
      return <Palette className='w-full h-auto' strokeWidth={1.5} />;
    case "contact":
      return <Phone className='w-full h-auto' strokeWidth={1.5} />;
    case "github":
      return <Github className='w-full h-auto' strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className='w-full h-auto' strokeWidth={1.5} />;
    case "twitter":
      return <Twitter className='w-full h-auto' strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className='w-full h-auto' strokeWidth={1.5} />;
    default:
      return <Home className='w-full h-auto' strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
};

const NavLink = motion(Link);

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  const [clickSound, setClickSound] = useState(null);

  useEffect(() => {
    // Load audio when component mounts
    setClickSound(new Audio('/audio/sound2.wav'));
  }, []);

  // Play click sound function
  const playClickSound = () => {
    if (clickSound) {
      clickSound.currentTime = 0; // Rewind sound to start
      clickSound.play();
    }
  };

  const handleClick = () => {
    playClickSound();
  };

  return (
    <div className='absolute cursor-pointer z-50' style={{ transform: `translate(${x}, ${y})` }}>
      <NavLink
        variants={item}
        href={link}
        target={newTab ? '_blank' : '_self'}
        className='text-foreground rounded-full flex items-center justify-center custom-bg'
        aria-label={label}
        name={label}
        onClick={handleClick} // Add onClick event handler
      >
        <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'>
          {getIcon(icon)}

          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

          <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
            {label}
          </span>
        </span>
      </NavLink>
    </div>
  );
};

export default NavButton;
