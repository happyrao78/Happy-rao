"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, LogOut } from 'lucide-react';
import { auth, provider } from './config'; // Assuming you have configured Firebase auth and provider
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'; // Importing necessary Firebase auth functions
import { toast, ToastContainer } from 'react-toastify'; // Importing toast and ToastContainer

import 'react-toastify/dist/ReactToastify.css'; // Importing toast styles

const LoginComp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const toggleAuth = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setIsLoggedIn(true);
                // toast.success(`Logged in as ${user.displayName}`);
            } else {
                setUser(null);
                setIsLoggedIn(false);
            }
        });
        return () => toggleAuth();
    }, []);

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            setUser(user);
            setIsLoggedIn(true);
            toast.info('Logged in successfully!')
            console.log('User signed in: ', user);
        } catch (error) {
            console.error('Error signing in: ', error);
            toast.error('Error signing in');
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setIsLoggedIn(false);
            toast.info('Logged out successfully!');
        } catch (error) {
            console.error('Error signing out: ', error);
            toast.error('Error signing out');
        }
    };

    return (
        <div className='fixed group right-20 top-4 z-50 xs:top-4'>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <div className="flex items-center">
                {isLoggedIn && user ? (
                    <p className="mr-2 text-foreground">Welcome, {user.displayName}</p>
                ) : null}
                <motion.button
                    onClick={isLoggedIn ? handleLogout : handleLogin}
                    className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center z-50 p-2.5 xs:p-4 custom-bg"
                    aria-label={isLoggedIn ? 'Sign out' : 'Sign in with Google'}
                    name={isLoggedIn ? 'Sign out' : 'Sign in with Google'}
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
