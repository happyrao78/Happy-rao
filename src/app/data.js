/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/
import loan from "../../public/projects/loan.png"
import ngo from "../../public/projects/ngo.png"
import pcrm from "../../public/projects/pcrm.png"
import hms from "../../public/projects/hms.png"
import ecomm from "../../public/projects/ecomm.png"
import cn from "../../public/projects/cn.png"
import aala from "../../public/projects/aala.png"
import aura from "../../public/projects/aura.png"
import ceed from "../../public/projects/ceed.png"
import christ from "../../public/projects/christ.png"
import cs from "../../public/projects/cs.png"
import fint from "../../public/projects/fint.png"
import news from "../../public/projects/news.png"
import rog from "../../public/projects/rog.png"
import stud from "../../public/projects/stud.png"
import swad from "../../public/projects/swad.png"
import tribe from "../../public/projects/tribe.png"
import port from "../../public/projects/port.png"
import sankalpiq from "../../public/projects/sankalpiq.png"
// import scrapp from "../../public/projects/scrapp.mp4"
export const projectsData = [
  {
    id: 1,
    name: "Scraping Articles",
    description: "A Python-based web scraping tool designed to extract, summarize, and store articles from various websites. Scrap Articles provides both CLI and RESTful API interfaces, supporting flexible usage across different environments.",
    category: "ai-agents/automation",
    media: {
      type: "video", // or "video"
      url: "https://res.cloudinary.com/dxgpsybjw/video/upload/v1748507530/20250529_125807_yhksxb.mp4" // Add your image/video path here
    },
    demoLink: "https://yadavhappy.in/projects",
    technologies: ["python","docker","gemini","cliapp","BeautifulSoup","sqlite3","fastapi","click"]
  },
    {
    id: 2,
    name: "Flight Booking Agent",
    description: "Developed a voice-based Flight Booking Agent that automates flight reservations via phone calls. Captures user details, searches flights, confirms bookings, and emails tickets seamlessly. Supports both Hindi and English for broader accessibility. Helped reduce reliance on human agents, cutting operational costs for travel agencies.",
    category: "ai-agents/automation",
    media: {
      type: "video", // or "video"
      url:"https://www.instagram.com/reel/DJzXLHNqbKZ/?igsh=MTZxbTZlcThtNmhyMw==" // Add your image/video path here
    },
    demoLink: "https://yadavhappy.in/projects",
    technologies: ["python","vector db","fastapi","langchain","twilio","polly","langsmith"]
  },
  {
    id: 3,
    name: "Whatsapp Automation Agent",
    description: "Built a WhatsApp Automation Agent to handle customer queries, collect user data, and send updates in both Hindi and English. Integrated with Google Sheets for real-time data storage and tracking. Reduced response time and improved customer engagement. Offered businesses a scalable, cost-effective alternative to manual support.",
    category: "ai-agents/automation",
    media: {
      type: "video", // or "video"
      url: "https://www.instagram.com/reel/DKOSjgGzYTI/?igsh=MTdld2J1engyMHhqNg==" // Add your image/video path here
    },
    demoLink: "https://yadavhappy.in/projects",
    technologies: ["automation","vector db","fastapi","langchain","twilio","polly","langsmith","selenium"]
  },
  {
    id: 27,
    name: "Sankalpiq- Building Tomorrow, Today",
    description: "Sankalpiq is a tech studio focused on building custom AI agents, enterprise automation, and scalable solutions for real-world use cases. From voice-first bots to CRM systems, every build is crafted with system-level thinking. We solve problems across sectors like healthcare, education, NGOs, and startups — without relying on paid tools or bloated platforms. Sankalpiq is where ideas are productised, not just prototyped.",
    category: "startup",
    media: {
      type: "image", // or "video"
      url: sankalpiq // Add your image/video path here
    },
    demoLink: "https://sankalpiq.co.in",
    technologies: ["automation","vector db","fastapi","langchain","langgraph","pinecone","exotel","twilio","polly","langsmith","selenium","web scrapping","crm/erps","llm-embeddings","RAG","NLP","sarvam.ai"],
  },
  {
    id: 4,
    name: "Cold Emailing Agent",
    description: "Developed a Cold Email Agent that automates personalized outreach to HRs based on role, company name, and email. Generates custom emails using company descriptions and role context, then sends them automatically. Streamlines job/internship applications and boosts outreach efficiency for candidates.",
    category: "ai-agents/automation",
    media: {
      type: "video", // or "video"
      url: ecomm // Add your image/video path here
    },
    demoLink: "https://yadavhappy.in/projects",
    technologies: ["automation","vector db","fastapi","langchain","twilio","polly","langsmith","smtp","oauth"]
  },
   {
    id: 5,
    name: "Info Calling Agent",
    description: "Built a voice-based Calling Agent for NGOs that collects user details like name, email, and blood group over a phone call. Supports both Hindi and English for wider reach, and stores data directly in CSV and Google Sheets. Sends confirmation emails post-call, enhancing trust and automation. Helps NGOs streamline data collection and focus on their core mission.",
    category: "ai-agents/automation",
    media: {
      type: "video", // or "video"
      url: "https://www.instagram.com/reel/DKGg0IKT61g/?igsh=MTJma3R1OXRsMWJycg==" // Add your image/video path here
    },
    demoLink: "https://yadavhappy.in/projects",
    technologies: ["exotel","vector db","fastapi","langchain","twilio","polly","langsmith","smtp"]
  },
    {
    id: 6,
    name: "LLM Calling Agent",
    description: "Created a conversational AI agent named Happy Yadav that answers general queries in Hindi using Google’s Generative AI (Gemini). Engages users naturally, making it ideal for regional audiences. Acts as a virtual assistant for businesses to handle FAQs, improve engagement, and reduce support costs.",
    category: "ai-agents/automation",
    media: {
      type: "video", // or "video"
      url: ecomm // Add your image/video path here
    },
    demoLink: "https://yadavhappy.in/projects",
    technologies: ["exotel","vector db","fastapi","langchain","twilio","polly","langsmith","gemini"]
  },
  {
    id: 7,
    name: "Purpose Based Calling Agent",
    description: "Automates personalized email communication for businesses, handling confirmations, updates, and marketing campaigns. Validates email addresses and integrates with Google Sheets or databases to efficiently manage email lists. Enhances communication speed and marketing effectiveness while saving time on repetitive tasks.",
    category: "ai-agents/automation",
    media: {
      type: "video", // or "video"
      url: "https://res.cloudinary.com/dxgpsybjw/video/upload/v1748507786/WhatsApp_Video_2025-05-29_at_14.05.31_82827aac_ld92v0.mp4" // Add your image/video path here
    },
    demoLink: "https://yadavhappy.in/projects",
    technologies: ["exotel","vector db","fastapi","langchain","twilio","polly","langsmith","gemini"]
  },
    
  {
    id: 8,
    name: "NGO Management System",
    description: "Built a full-stack NGO management platform with donation tracking, email automation, Razorpay integration, PWA support, and real-time analytics, improving efficiency by 50% and reducing manual workload through automation, chatbot support, and dynamic project/certificate/team/volunteer management",
    category: "fullstack",
    media: {
      type: "image", // or "video"
      url: ngo // Add your image/video path here
    },
    demoLink: "https://prereetfoundation.vercel.app/",
    technologies: ["redis","pwa","python","mongodb","fastapi"]
  },
  {
    id: 9,
    name: "Pharmaceutical CRM",
    description: "Built a full-stack CRM for a pharmaceutical company to streamline employee and admin workflows. Enabled hospital and medicine assignments for sales teams, lead tracking, and performance monitoring. Boosted sales productivity by 35% and managed 100+ hospital mappings.",
    category: "fullstack",
    media: {
      type: "image", // or "video"
      url: pcrm // Add your image/video path here
    },
    demoLink: "https://xurioushealthcare.com/",
    technologies: ["redis","pwa","python","mongodb","fastapi","express","nextjs"]
  },
  {
    id: 10,
    name: "Loan Management System",
    description: "Developed a full-stack loan management system using React, Node.js, Express, and MongoDB, featuring realtime EMI calculations, dynamic PDF generation, and automated email notifications, enhancing loan processing efficiency by 40%.Implemented an intuitive admin panel with Material-UI, enabling seamless loan application tracking and processing, reducing manual workload by 50% and improving user experience.",
    category: "fullstack",
    media: {
      type: "image", // or "video"
      url: loan // Add your image/video path here
    },
    demoLink: "https://digitalfinserv.in/",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Material-UI"]
  },
  {
    id: 11,
    name: "Hospital Management System",
    description: "Developed a full-stack Hospital Management System (HMS) to manage patients, doctors, appointments, and billing efficiently. Included role-based dashboards, real-time scheduling, and medical record tracking. Improved operational efficiency by 40% and reduced manual errors.",
    category: "fullstack",
    media: {
      type: "image", // or "video"
      url: hms // Add your image/video path here
    },
    demoLink: "https://hms-one-coral.vercel.app/",
    technologies: ["mongodb","express","nextjs"]
  },
  {
    id: 12,
    name: "Ecommerce Platform",
    description: "Built a full-featured e-commerce platform with secure payment integration, product browsing, cart management, and order tracking. Developed an admin panel for product CRUD, order management, and user control. Enabled seamless checkout with Razorpay integration and improved user experience across devices.",
    category: "fullstack",
    media: {
      type: "image", // or "video"
      url: ecomm // Add your image/video path here
    },
    demoLink: "https://ecommerce-ui-murex.vercel.app/",
    technologies: ["python","mongodb","fastapi","express","nextjs","razorpay-init"]
  },
  {
    id: 13,
    name: "ROzgaarHub",
    description: "Created a FullStack HR portal using React, Node.js, and MongoDB, enabling efficient management of employee,events and applications, with real-time updates via WebSockets, enhancing user engagement by 30%.Implemented responsive design and advanced filtering features, ensuring seamless user experience across devices, and integrated CSV export functionality, improving data handling efficiency by 40%.",
    category: "fullstack",
    media: {
      type: "image",
      url: cn
    },
    demoLink: "https://cn-jobportal-frontend.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "WebSockets"]
  },
  {
    id: 14,
    name: "WebAgency",
    description: "At CodeSphereX, We believe in transforming ideas into impactful digital solutions. With innovation, precision, and creativity, we craft websites, apps, and designs that empower businesses to thrive in the digital age. Your success is our mission. Let's build something amazing together.🚀🌐",
    category: "frontend",
    media: {
      type: "image",
      url: cs
    },
    demoLink: "https://codespherex.com/",
    technologies: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    id: 15,
    name: "RogMukta",
    description: "RogMukta is a web-based application developed in ReactJS, NodeJS, ExpressJS, and MongoDB. The system is designed to manage selling and buying of medicines.🎓📊",
    category: "fullstack",
    media: {
      type: "image",
      url: rog
    },
    demoLink: "https://rogmukta.online/",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 16,
    name: "Musafir Tribe",
    description: "Musafir Tribe is a travel website developed in ReactJS, NodeJS, ExpressJS, and MongoDB. The system is designed to manage travel packages and bookings.🎓📊",
    category: "fullstack",
    media: {
      type: "image",
      url: tribe
    },
    demoLink: "https://www.musafirtribe.com/",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 17,
    name: "AURA.ai",
    description: "AURA.ai is a cutting-edge AI driven platform designed to Automate video creation from text-based inputs such as brochures or PDFs. It seamlessly integrates interactive quizzes and provides detailed analytics to enhance user engagement. Perfect for education, corporate training, and HR assessments, AURA.ai offers multilingual support and real-time feedback, transforming the way content is delivered.📊💰",
    category: "ai",
    media: {
      type: "image",
      url: aura
    },
    demoLink: "https://github.com/happyrao78/aura.ai",
    technologies: ["AI/ML", "Python", "React", "OpenAI API"]
  },
  {
    id: 18,
    name: "FinTrack",
    description: "FinTrack is a comprehensive finance management application that allows users to track, visualize, and manage their income and expenses. The application provides features like editing, deleting, and adding transactions, automatic chart state management, theme switching, Google sign-in, monthly navigation, transaction filters, and a responsive UI. The backend server is deployed using Railway.📊💰",
    category: "fullstack",
    media: {
      type: "image",
      url: fint
    },
    demoLink: "https://codolio-three.vercel.app",
    technologies: ["React", "Node.js", "Chart.js", "Google Auth"]
  },
  {
    id: 19,
    name: "News Mania",
    description: "NewsMania is a web application which fetches the top business category news headlines from NEWSAPI using a middleware created using Expressjs. It also integrates the google authentication for login/logout. Additionally, Github API is also used for fetching the user data alongwith Web forms integration which will trigger the mail to admin email.📰📧",
    category: "fullstack",
    media: {
      type: "image",
      url: news
    },
    demoLink: "https://hunar-taupe.vercel.app",
    technologies: ["React", "Express.js", "News API", "Google Auth"]
  },
  {
    id: 20,
    name: "Student Portal System",
    description: "Student Portal System is a web-based application developed in ReactJS, Chartjs. The system is designed to manage student data, test scores, and progress.🎓📊",
    category: "frontend",
    media: {
      type: "image",
      url: stud
    },
    demoLink: "https://student-portal-final.vercel.app",
    technologies: ["React", "Chart.js"]
  },
  // {
  //   id:21,
  //   name: "Brain Bazaar",
  //   description: "Brain Bazar showcases my practice projects across various tech stacks, focusing on learning and mastering small concepts. It's a hands-on journey through fundamental technologies.🧑‍💻",
  //   category: "frontend",
  //   media: {
  //     type: "image",
  //     url: "/projects/brain-bazaar.png"
  //   },
  //   demoLink: "https://brain-bazaar.vercel.app/",
  //   technologies: ["HTML", "CSS", "JavaScript"]
  // },
  {
    id: 22,
    name: "CEEDCU",
    description: "Centre for Entrepreneurship Education Development, Chitkara University (CEEDCU) is the department at Chitkara University which helps students to talk about and build their startups. 🎓",
    category: "frontend",
    media: {
      type: "image",
      url: ceed
    },
    demoLink: "https://ceed.vercel.app",
    technologies: ["React", "Next.js"]
  },
  {
    id: 23,
    name: "AALA",
    description: "AALA is an AI-powered system that combines insurance policies, gamification, and advanced analytics. It promotes safer driving behavior by monitoring factors like speed, acceleration, braking, and traffic rule adherence.⚙️",
    category: "ai",
    media: {
      type: "image",
      url: aala
    },
    demoLink: "https://theeharyanvicoder.vercel.app",
    technologies: ["AI/ML", "React", "Analytics"]
  },
  {
    id: 24,
    name: "Personal Portfolio",
    description: "An Interactive portfolio website made using Next.JS, Tailwind, Three.JS, EmailJS. 🖥️⚙️",
    category: "fullstack",
    media: {
      type: "image",
      url: port
    },
    demoLink: "https://yadavhappy.in",
    technologies: ["Next.js", "Three.js", "Tailwind CSS"]
  },
  {
    id: 25,
    name: "Happy Mart",
    description: "This project inherit tech stack of HTML, CSS3, JS. HappyMart is basically a live christmas inventories selling website made to allow user to purchase different christmas decoratories.🎄🍬🎁",
    category: "frontend",
    media: {
      type: "image",
      url: christ
    },
    demoLink: "https://happyrao78.github.io/happymart/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 26,
    name: "Swaad Guru",
    description: "Swaad Guru is a htmlc, css, and js project which is a basic restaurant website.🍕🥘🍴",
    category: "frontend",
    media: {
      type: "image",
      url: swad
    },
    demoLink: "https://swaad-guru.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  // {
  //   id: 27,
  //   name: "Note It Down",
  //   description: "NoteItDown: 📝 A stylish HTML/CSS todo list project, empowering you to efficiently manage tasks. 🚀 Organize your day effortlessly with intuitive features and a clean interface. Stay productive! 🌟",
  //   category: "frontend",
  //   media: {
  //     type: "image",
  //     url: "/projects/note-it-down.png"
  //   },
  //   demoLink: "https://happyrao78.github.io/OCTANET_JANUARY_II/",
  //   technologies: ["HTML", "CSS", "JavaScript"]
  // }
];

// Categories for filtering
export const projectCategories = [
  { id: 'all', name: 'All Projects', count: projectsData.length },
  { id: 'fullstack', name: 'Full Stack', count: projectsData.filter(p => p.category === 'fullstack').length },
  { id: 'frontend', name: 'Frontend', count: projectsData.filter(p => p.category === 'frontend').length },
  { id: 'ai-agents/automation', name: 'AI Agents/Automation', count: projectsData.filter(p => p.category === 'ai-agents/automation').length },
  { id: 'startup', name: 'Startup', count: projectsData.filter(p => p.category === 'startup').length },
  { id: 'ai', name: 'AI', count: projectsData.filter(p => p.category === 'ai').length }
];

export const BtnList = [
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  { label: "Achievements", link: "/achievements", icon: "achievements", newTab: false},
  { label: "Freelance Services", link: "/services", icon: "services", newTab: false},
  { label :"Technical News", link:"/tweets",icon:"tweets", newTab:false},
  {
    label: "Professional Synopsis",
    link: "/resume.pdf",
    icon: "resume",
    newTab: false,
  },
];