import React, { useState } from "react";
import { Github, Linkedin, Mail, Phone,Twitter, ShieldClose,CircleDashedIcon } from "lucide-react";

const ProfileCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Profile Icon with Circular Border */}
      <div
        className="cursor-pointer w-16 h-16 rounded-full border-2 border-yellow-300 flex items-center justify-center custom-bg hover:shadow-lg transition duration-300 mt-2 ml-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="https://avatars.githubusercontent.com/u/138770813?v=4"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Dropdown Card */}
      {isOpen && (
        <div
          className="absolute left-4 mt-2 w-72 p-4 custom-bg mr-5 text-white rounded-xl shadow-lg animate-slideDown glow-border z-50"
        >
        {/* <CircleX className="w-8 h-8 text-gray-500" onClick={() => setIsOpen(!isOpen)} /> */}
          {/* Profile Picture and Name */}
          <div className="flex items-center gap-3 mb-4">
            {/* <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQHvIZYlufct0w/profile-displayphoto-shrink_400_400/B4EZPE_h8MGQAg-/0/1734176809360?e=1741219200&v=beta&t=6Hv5dXarXVGTEZhrBOFNvcMrJVAYa609sMe2KBtJGuw"
              alt="Your Name"
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
            /> */}
            {/* <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center"> */}
              {/* <CircleX className="w-8 h-8 text-gray-500" /> */}
            
            <div>
              <h2 className="text-lg font-semibold shiny-text">Happy Yadav</h2>
              <br></br>
              <span className="text-sm text-gray-400">Full Stack Developer</span>
            </div>
            {/* <ShieldClose className="w-8 h-8 text-accent ml-24" onClick={() => setIsOpen(!isOpen)} /> */}
            <button className="absolute top-4 right-2 text-accent" onClick={() => setIsOpen(!isOpen)}>
            &times;
            </button>
          </div>

          {/* Social Icons */}
          <div className="space-y-3">
            <a
              href="https://github.com/happyrao78"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Github className="w-5 h-5 text-accent" />
              <span>GitHub</span>
            </a>
            <a
              href="https://topmate.io/happy_yadav10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <CircleDashedIcon className="w-5 h-5 text-accent" />
              <span>Topmate</span>
            </a>
            <a
              href="https://www.linkedin.com/in/happy-yadav-16b2a4287/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Linkedin className="w-5 h-5 text-accent" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/rao_happyy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Twitter className="w-5 h-5 text-accent" />
              <span>X</span>
            </a>
            <a
              href="https://chat.whatsapp.com/EAmUG4UlAoT270VYaysvhq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Phone className="w-5 h-5  text-accent" />
              <span>WhatsApp Community</span>
            </a>
            <a
              href="mailto:happyrao7091@gmail.com"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <Mail className="w-5 h-5 text-accent" />
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
