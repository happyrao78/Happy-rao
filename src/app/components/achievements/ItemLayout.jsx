import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Trophy, Calendar, Star, Target } from 'lucide-react';

const AchievementsTimeline = () => {
  const [expandedYear, setExpandedYear] = useState(null);
  const [expandedMonth, setExpandedMonth] = useState(null);

  const achievements = {
    2024: {
      January: [
        {
          text: "Launched personal portfolio website",
          category: "Development",
          impact: "High",
          image: "https://via.placeholder.com/150?text=Portfolio+Website"
        },
        {
          text: "Completed Advanced React certification",
          category: "Learning",
          impact: "Medium",
          image: "https://via.placeholder.com/150?text=React+Certification"
        },
        {
          text: "Published first technical blog post",
          category: "Content",
          impact: "Medium",
          image: "https://via.placeholder.com/150?text=Blog+Post"
        }
      ],
      February: [
        {
          text: "Contributed to open-source project",
          category: "Development",
          impact: "High",
          image: "https://via.placeholder.com/150?text=OpenSource"
        },
        {
          text: "Won hackathon first prize",
          category: "Achievement",
          impact: "High",
          image: "https://via.placeholder.com/150?text=Hackathon+Prize"
        },
        {
          text: "Reached 500+ GitHub followers",
          category: "Social",
          impact: "Medium",
          image: "https://via.placeholder.com/150?text=GitHub+Followers"
        }
      ]
    },
    2025: {
      January: [
        {
          text: "Led team project for client",
          category: "Leadership",
          impact: "High",
          image: "https://via.placeholder.com/150?text=Team+Project"
        },
        {
          text: "Started tech YouTube channel",
          category: "Content",
          impact: "Medium",
          image: "https://via.placeholder.com/150?text=YouTube+Channel"
        },
        {
          text: "Achieved AWS certification",
          category: "Learning",
          impact: "High",
          image: "https://via.placeholder.com/150?text=AWS+Certification"
        }
      ]
    }
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Development: "bg-purple-500",
      Learning: "bg-blue-500",
      Content: "bg-green-500",
      Achievement: "bg-yellow-500",
      Social: "bg-pink-500",
      Speaking: "bg-orange-500",
      Leadership: "bg-red-500"
    };
    return colors[category] || "bg-gray-500";
  };

  const getImpactStars = (impact) => {
    switch (impact) {
      case "High":
        return 3;
      case "Medium":
        return 2;
      default:
        return 1;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6 custom-bg rounded-xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 custom-bg rounded-full animate-pulse">
          <Trophy className="w-8 h-8 text-yellow-500" />
        </div>
        <h2 className="text-3xl samarkan-font shiny-text text-transparent bg-clip-text">
          Achievement Timeline
        </h2>
      </div>

      <div className="space-y-8">
        {Object.keys(achievements).sort((a, b) => b - a).map((year) => (
          <div key={year} className="border rounded-xl shadow-lg custom-bg">
            <div
              onClick={() => setExpandedYear(expandedYear === year ? null : year)}
              className="w-full px-6 py-4 flex items-center justify-between custom-bg rounded-t-xl cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 custom-bg rounded-lg">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-accent">{year}</span>
              </div>
              {expandedYear === year ?
                <ChevronUp className="w-5 h-5 text-accent animate-bounce" /> :
                <ChevronDown className="w-5 h-5 text-accent" />
              }
            </div>

            {expandedYear === year && (
              <div className="px-6 pb-6">
                <div className="space-y-4 mt-4">
                  {months.map((month) =>
                    achievements[year][month] ? (
                      <div key={month} className="relative pl-4 rounded-xl mb-4">
                        <div
                          onClick={() => setExpandedMonth(expandedMonth === month ? null : month)}
                          className="w-full text-left py-2 flex items-center justify-between custom-bg rounded-xl cursor-pointer"
                        >
                          <span className="shiny-text text-lg ml-2">{month}</span>
                          {expandedMonth === month ?
                            <ChevronUp className="w-4 h-4" /> :
                            <ChevronDown className="w-4 h-4" />
                          }
                        </div>

                        {expandedMonth === month && (
                          <div className="space-y-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                            {achievements[year][month].map((achievement, index) => (
                              <div
                                key={index}
                                className="group relative p-4 rounded-xl custom-bg shadow-md h-60 sm:h-48 md:h-52 lg:h-60 transition-all duration-300 flex flex-col"
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`p-2 rounded-lg ${getCategoryColor(achievement.category)}`}>
                                    <Target className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="text-sm font-medium text-white">{achievement.category}</span>
                                      <div className="flex gap-1">
                                        {[...Array(getImpactStars(achievement.impact))].map((_, i) => (
                                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                      </div>
                                    </div>
                                    <p className="text-accent text-sm md:text-base">{achievement.text}</p>
                                  </div>
                                </div>
                                <img
                                  src={achievement.image}
                                  alt={achievement.text}
                                  className="mt-2 w-full h-24 sm:h-20 md:h-24 lg:h-28 object-cover rounded-xl flex-grow"
                                />
                              </div>
                            ))}
                          </div>

                        )}
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsTimeline;
