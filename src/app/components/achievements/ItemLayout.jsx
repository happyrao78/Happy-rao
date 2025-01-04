import React from 'react';
import { Trophy } from 'lucide-react';

const AchievementsShowcase = () => {
  const achievements = [
    {
      text: "Top 22 Finalist & Social Buzz Winner at HackRx 5.0 by Bajaj Finserv",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGblis5-7u6SQ/feedshare-shrink_800/feedshare-shrink_800/0/1729534057408?e=1738800000&v=beta&t=5AOSeUQAiWbSOA5Yn5habBFkdKPgRx6DTRbQ8eg7pMk"
    },
    {
      text: "Finalist and Social Buzz Winner at Vihaan 7.0 by Delhi Technological University",
      image: "https://media.licdn.com/dms/image/v2/D5622AQESe2oYZEbZ7A/feedshare-shrink_800/feedshare-shrink_800/0/1712926856139?e=1738800000&v=beta&t=YB63Rg-c0lVXvM1rlcrK5qt6ojJuGlDFFYfnPRZ3Bsw"
    },
    {
      text: "Invited for Github Field Day at Microsoft, Gurgaon among 670+ applicants",
      image: "https://avatars.githubusercontent.com/u/138770813?v=4"
    },
    {
      text: "Microsoft has always been my dream destination in the tech industry!",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHvIZYlufct0w/profile-displayphoto-shrink_400_400/B4EZPE_h8MGQAg-/0/1734176809360?e=1741219200&v=beta&t=6Hv5dXarXVGTEZhrBOFNvcMrJVAYa609sMe2KBtJGuw"
    },
    {
      text: "Top 5 Finalist among 120+ Teams at HackCBS-7.0 by SSCBS(Delhi)",
      image: "https://media.licdn.com/dms/image/v2/D5622AQE5FkirPTQT-w/feedshare-shrink_800/feedshare-shrink_800/0/1731693119745?e=1738800000&v=beta&t=K1Oh0YH_2CnLClfRm_OgasnWGT3Azkplp_NSxWcW0xE"
    },
    {
      text: "Special Honour by Dr. Madhu Chitkara for shining at HackRx 5.0",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEGLjYt-qiyzw/feedshare-shrink_800/feedshare-shrink_800/0/1733897433441?e=1738800000&v=beta&t=SU2GYAACWaefBsQWX08ee8YZNdymgobd5ycw0VBjhM0"
    },
    {
      text: "Technovanza Winner at Chitkara University",
      image: "https://media.licdn.com/dms/image/v2/D5622AQEH0wIoOugN7Q/feedshare-shrink_1280/feedshare-shrink_1280/0/1697293492097?e=1738800000&v=beta&t=tDhJvXEVEHI3NRuE8Y3LazhE4Efo-iL4tvR4YxVOuW8"
    },
    {
      text: "Appointed as Technical Director at Coding Ninjas , Chitkara University.",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQEH1aM-KmBpOQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1721764112485?e=1738800000&v=beta&t=K0D1rRhVaBI3jZf337QX5vV3QjhJUaLrqcePsLF73JQ"
    },
    {
      text: "Honoured for being the top CGPA scorer in the 1st year at Chitkara University",
      image: "https://media.licdn.com/dms/image/v2/D5622AQGSZI4vl47etg/feedshare-shrink_1280/feedshare-shrink_1280/0/1713286708719?e=1738800000&v=beta&t=AAzKwE30RNlQBV1VbvB9KJwWQ0bbV65uGbkGrTOC3o0"
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
