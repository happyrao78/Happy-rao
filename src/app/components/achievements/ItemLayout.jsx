import React from 'react';
import { Trophy } from 'lucide-react';

const AchievementsShowcase = () => {
  const achievements = [
    {
      text: "Innovest 3.0 — Top 10 Finalist (from 573+ competing teams) by CEED, CUIET",
      image: "/twelve.png"
    },
    {
      text: "Microsoft — Invited for exclusive Github Field Day at Gurgaon HQ.",
      image: "/seven.png"
    },
   
    {
      text: "Top 22 Finalist & Social Buzz Winner at HackRx 5.0 by Bajaj Finserv, Pune",
      image: "/six.png"
    },
    {
      text: "Aditya Birla Group's Synaptix Hackathon'25 — Winner, DTU, Delhi",
      image: "/eleven.png"
    },
    {
      text: "FusionFest Hackathon — 1st Runner-Up at DTC, Chitkara University.",
      image: "/two.png"
    },
    {
      text: "Finalist and Social Buzz Winner at Vihaan 7.0 by Delhi Technological University",
      image: "/eight.png"
    },
    {
      text: "Invited for Github Field Day at Microsoft, Gurgaon among 670+ applicants",
      image: "/nine.png"
    },
    {
      text: "Top 5 Finalist among 120+ Teams at HackCBS-7.0 by SSCBS(Delhi)",
      image: "/ten.png"
    },
    {
      text: "Special Honour by Dr. Madhu Chitkara for shining at HackRx 5.0",
      image: "/three.png"
    },
    {
      text: "Technovanza Winner at Chitkara University",
      image: "/fifteen.png"
    },
    {
      text: "Appointed as Technical Director at Coding Ninjas , Chitkara University.",
      image: "/thirteen.png"
    },
    {
      text: "Honoured for being the top CGPA scorer in the 1st year at Chitkara University",
      image: "/fourteen.png"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8 custom-bg rounded-xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 custom-bg rounded-full">
          <Trophy className="w-8 h-8 text-yellow-500" />
        </div>
        <h2 className="text-2xl samarkan-font shiny-text text-transparent bg-clip-text">
          Notable Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-xl custom-bg shadow-lg"
          >
            <img
              src={achievement.image}
              alt={achievement.text}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-opacity-90 custom-bg w-full">
              <p className="text-yellow-300 font-medium leading-relaxed">
                {achievement.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsShowcase;
