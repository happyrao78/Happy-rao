"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, LogOut } from 'lucide-react';
import AuthModal from './AuthModal'; // Import the modal component
import { auth } from './config';

const LoginComp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setIsLoggedIn(true);
            } else {
                setUser(null);
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLoginClick = () => {
        setShowModal(true);
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            setUser(null);
            setIsLoggedIn(false);
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    return (
        <div className='fixed group right-20 top-4 z-50 xs:top-4'>
            {showModal && <AuthModal onClose={() => setShowModal(false)} />}
            <div className="flex items-center">
                {isLoggedIn && user ? (
                    <p className="mr-2 text-foreground">Welcome, {user.displayName}</p>
                ) : null}
                <motion.button
                    onClick={isLoggedIn ? handleLogout : handleLoginClick}
                    className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center z-50 p-2.5 xs:p-4 custom-bg"
                    aria-label={isLoggedIn ? 'Sign out' : 'Sign in'}
                    name={isLoggedIn ? 'Sign out' : 'Sign in'}
                >
                    {isLoggedIn ? (
                        <LogOut className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} />
                    ) : (
                        <LogIn className='w-full h-full text-foreground group-hover:text-accent' strokeWidth={1.5} />
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default LoginComp;
