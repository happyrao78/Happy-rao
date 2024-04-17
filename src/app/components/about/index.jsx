import React from 'react'
import clsx from 'clsx'
const ItemLayout = ({children, className}) =>{
  return <div className={clsx('custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8',className)}>{children}</div>
}
const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>

        <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
        <h2 className='text-xl md:text-3xl text-accent text-left w-full capitalize '>About 
       
        </h2>
        <h5 className=' text-left w-full capitalize'>| Future Software Engineer & Data Scientist |</h5> 
        <p className='font-light text-xs sm:text-sm md:text-base'>
        As a first-year college student, I am thrilled to embark on my academic journey and delve into the vast opportunities for personal and professional development. With a solid foundation in Physics, Chemistry, and Mathematics acquired during high school, I have honed critical thinking, problem-solving, and time management skills. Presently, I serve as a technical member of Coding Ninjas at CUIET and contribute as a campus reporter at Chitkara University. Achieving a stellar 10 CGPA in my first semester underscores my commitment to excellence. Currently, I am actively engaged in mastering the MERN stack, eager to expand my expertise in the dynamic field of Information Technology. I am keen to connect with industry professionals, veterans, and mentors to enrich my learning journey further.
        </p>
        </ItemLayout>


            <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
        
            <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
           9.7+<sub className='font-semibold text-base'>CGPA</sub>
          
            </p>
           
        </ItemLayout>
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
        <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
          6+ <sub className='font-semibold text-base'>months of experience</sub>
          
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
        <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=happyrao78&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="GitHub Streak" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=happyrao78&repo=Restaurant-nexus&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=10" alt="happy yadav" loading='lazy' />
        </ItemLayout>
        

        <ItemLayout className={"col-span-full md:col-span-6  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=happyrao78&repo=happymart&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6  !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=happyrao78&repo=happy-rao&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="happy yadav" loading='lazy' />
        </ItemLayout>
        </div>
    </section>
  )
}

export default AboutDetails