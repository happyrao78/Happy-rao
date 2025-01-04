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
          <h2 className='text-xl md:text-3xl text-accent text-left w-full capitalize samarkan-font shiny-text'>About</h2>
          <h5 className='text-left w-full capitalize'>Upcoming Software Developer Engineer</h5>
          <p className='font-light text-xs sm:text-sm md:text-base'>
          Top-22 @HackRx 5.0 : Bajaj Finserv • Vihaan 7.0 Finalist • Top-5 @HackCBS 7.0 • 2x Invitee @Microsoft • 4x Hackathons • 110K+ Impressions • Technical Director : @CodingNinjasCUIET • Ex-Intern @Hunar.ai
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            <Counter value={9} />+<sub className='font-semibold text-base'>CGPA</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            <Counter value={2.5} />k+<br></br><sub className='font-semibold text-base'>Linkedin Connections</sub>
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
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=happyrao78&repo=aura.ai&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
