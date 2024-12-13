"use client";
import React, { useEffect, useState } from 'react';

import ItemLayout from './ItemLayout';

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementCount = () => {
      if (count < value) {
        setCount(prevCount => prevCount + 1);
      }
    };

    const timer = setInterval(incrementCount, 1);

    return () => {
      clearInterval(timer);
    };
  }, [count, value]);

  return <span>{count}</span>;
};

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
      <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
        <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
          <h2 className='text-xl md:text-3xl text-accent text-left w-full capitalize'>About</h2>
          <h5 className='text-left w-full capitalize'>| Future Software Engineer & Data Scientist |</h5>
          <p className='font-light text-xs sm:text-sm md:text-base'>
          From hackathon stages to real-world solutions, my journey in tech has been about turning challenges into breakthroughs.

Starting as a top 22 finalist in HackRx 5.0 by Bajaj Finserv, where I outshined 700+ teams, I have embraced competitive problem-solving to fuel my development journey. This accomplishment, alongside winning 1st place at Technovanza by the Computer Society of India, has shaped my drive to create impactful, data-driven applications that empower decision-making.

As a Data Analytics Intern at Hunar.ai, I optimized database extraction for over 100,000 data points, boosting reporting efficiency by 30% through SQL automation in Retool and creating Power BI reports that made data insights accessible and actionable. My role as Founders Office Intern at UnsaidTalks allowed me to lead website optimization, enhancing the SEO score from 55 to 76 with targeted strategies using Google Search Console and Analytics. These experiences have sharpened my expertise in data management, automation, and project leadership.

In my current role as Technical Director at Coding Ninjas CUIET, I manage a Firebase/Next.js-powered website and lead technical initiatives for a growing community. My portfolio reflects a deep commitment to versatile, user-focused solutions: AURA.ai, an AI-based video automation platform with voiceover and multilingual support; NewsMania, a news aggregator with seamless Google and GitHub integration; and FinTrack, a finance management tool that visualizes spending patterns.

With a solid foundation in Python, JavaScript, React, SQL, and more, I am excited to connect with other forward-thinkers passionate about pushing the boundaries of data, development, and meaningful tech solutions.
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            <Counter value={9} />+<sub className='font-semibold text-base'>CGPA</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            <Counter value={2500} />+<br></br><sub className='font-semibold text-base'>Followers on linkedIn </sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=happyrao78&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=happyrao78&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6"}>
          <img className="w-full h-auto" src=" https://skillicons.dev/icons?i=c,cpp,css,html,js,python,ts,bootstrap,express,fastapi,nextjs,react,redux,tailwindcss,threejs,tensorflow,pytorch,opencv,firebase,mysql,netlify,vercel,git,github,githubactions,docker,arduino" alt="happy yadav" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img className="w-full h-auto" src="https://streak-stats.demolab.com/?user=happyrao78&fire=red&date_format=d F[,Y]&theme=transparent&hide_border=true&title_color=FEFE5B&dates=FFFFFF&text_color=FFFFFF&ring=FEFE5B&currStreakNum=FFFFFF&sideLabels=FEFE5B&disable_animations=false&currStreakLabel=FEFE5B&sideNums=FEFE5B" alt="GitHub Streak" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=happyrao78&repo=happy-rao&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=10" alt="happy yadav" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=happyrao78&repo=Vihaan&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=happyrao78&repo=CEED-website&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=happyrao78&repo=happymart&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
