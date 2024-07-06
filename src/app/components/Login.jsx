"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, LogOut } from 'lucide-react';

const LoginComp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleAuth = () => {
        setIsLoggedIn(!isLoggedIn);
        // Add your login/logout functionality here
    };

    return (
        <div className='fixed group right-20 top-4 z-50  xs:top-4   '>
            <motion.button
                onClick={toggleAuth}
                className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center z-50 p-2.5 xs:p-4 custom-bg"
                aria-label={"auth"}
                name={"auth"}
            >
                {isLoggedIn ? (
                    <LogOut className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} />
                ) : (
                    <LogIn className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} />
                )}
            </motion.button>
        </div>
    );
};

export default LoginComp;
