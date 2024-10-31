"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Bot, X, Mic } from 'lucide-react';
import { Forward } from 'lucide-react';
import style from "styled-jsx/style";
import { data } from "autoprefixer";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // const handleSendMessage = async (message) => {
    //     setMessages((prev) => [...prev, { text: message, isUser: true }]);
    //     setInputValue("");
    //     // Call Gemini API
    //     try {
    //         const response = await axios.post("/api/chat", { message });
    //         const botMessage = response.data.reply; // Adjust according to your API response
    //         setMessages((prev) => [...prev, { text: botMessage, isUser: false }]);
    //     } catch (error) {
    //         console.error("Error fetching response from Gemini:", error);
    //         setMessages((prev) => [...prev, { text: "Queriot is coming soon!!", isUser: false }]);
    //     }
    // };
    const handleSendMessage = async (message) => {
    if (!message) return; // Prevent sending empty messages
    setMessages((prev) => [...prev, { text: message, isUser: true }]);
    setInputValue("");
    try {
        const response = await axios.post("https://portfolio-backend-yqhq.onrender.com/api/chat", { message });
        const botMessage = response.data.reply;
        setMessages((prev) => [...prev, { text: botMessage, isUser: false }]);
    } catch (error) {
        console.error("Error fetching response from Gemini:", error);
        setMessages((prev) => [...prev, { text: "Queriot is coming soon!!", isUser: false }]);
    }
};

    const handleVoiceInput = () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = (event) => {
            const speech = event.results[0][0].transcript;
            handleSendMessage(speech);
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
        };
    };

    return (
        <div>
            {/* Chatbot Icon */}
            <motion.div
                className={`chatbot-icon fixed bottom-5 right-5 p-3 text-foreground custom-bg rounded-full shadow-lg cursor-pointer z-50 ${isOpen ? "hidden" : "block"}`}
                onClick={() => setIsOpen(true)}
                whileTap={{ scale: 0.9 }}
            >
                <Bot size={34} color="white" />
            </motion.div>

            {/* Chatbot Popup */}
            {isOpen && (
                <div className="chatbot-container p-4 custom-bg text-foreground border rounded-lg shadow-lg fixed bottom-5 right-5 w-90 max-h-[80vh] flex flex-col z-50 ">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font text-accent">Queriot</h2>
                        {/* <h6 className="text-sm">v1.0</h6> */}
                        <button onClick={() => setIsOpen(false)} className="text-foreground">
                            <X size={20} />
                        </button>
                        
                    </div>
                    <h6 className="text-xs font text-gray-200 ">"Happy's Custom AI Voice Assisstant"</h6>
                    <div className="messages flex-grow mb-4 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.isUser ? "text-right" : "text-left"} mb-2`}
                            style={{ maxWidth: "85%", width: "300px" }} >
                                <span className={`inline-block p-2 rounded-lg ${msg.isUser ? "custom-bg text-foreground" : "custom-bg text-foreground"} whitespace-normal break-words max-w-[90%]`}
                                style={{ wordWrap: "break-word", whiteSpace: "normal" }}
                                
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="input-group flex">
                        <input
                            type="text"
                            className="flex-grow border rounded-l-lg p-2 custom-bg text-foreground"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Your Query Here..."
                        />
                        <button
                            className="custom-bg text-foreground text-white rounded-r-lg px-4"
                            onClick={() => handleSendMessage(inputValue)}
                        >
                            <Forward size={18} color="white" />
                        </button>
                        <button
                            className="ml-2 custom-bg text-foreground text-white rounded-lg p-2"
                            onClick={handleVoiceInput}
                        >
                            <Mic size={18} color="yellow" />
                        </button>
                    </div>
                    <style jsx>{`
                        @media (max-width: 385px) {
                            .chatbot-container {
                                width: 90vw;
                                right: 5%;
                            }
                            .input-group input {
                                padding: 6px;
                                font-size: 14px;
                            }
                            .input-group button {
                                padding: 4px;
                                margin-left: 4px;
                            }
                            .input-group .ml-2 {
                            
                                padding: 6px;
                            }
                        }
                    `}</style>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
