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

    const timer = setInterval(incrementCount, 10);

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
            Upcoming Software Developer & Frontend Specialist with a focus on intuitive UI and engaging digital experiences.

            • Skills & Tools: C, C++, HTML, CSS, JavaScript, React, Tailwind, Next.js, and Git/GitHub.
            • Position of Responsibilities: Technical Executive @CEEDCU, @Coding Ninjas CUIET , @Campus Reporter at CUIET.
            • Education: Pre Final Year BCA at Chitkara University (Current CGPA: 9.75), Sharda International School (10th: 96%, 12th PCM: 90%).
            • Key projects: CEEDCU, HappyMart, SwaadGuru, Student Portal, Personal Portfolio.
            • Volunteer: Public Relations Volunteer @SelflessSewa NGO, New Delhi.
            • Achievements: Social Buzz Award at VIHAAN 7.0 hackathon, Open Source Developer at @GSSoC & @SSoC 2024, 1st Prize at Technovanza by CSI CUIET.
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            <Counter value={9} />+<sub className='font-semibold text-base'>CGPA</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            <Counter value={354} />+<br></br><sub className='font-semibold text-base'>days of continous learning</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=happyrao78&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=happyrao78&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6"}>
          <img className="w-full h-auto" src=" https://skillicons.dev/icons?i=js,html,css,wasm,arduino,c,cpp,discord,git,github,gmail,instagram,linkedin,mysql,nextjs,npm,php,react,replit,stackoverflow,svg,tailwind,threejs,twitter,vercel,vscode,windows,coffeescript" alt="happy yadav" loading='lazy' />
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
