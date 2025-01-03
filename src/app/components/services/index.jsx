import React, { useState, useEffect } from 'react';
import ItemLayout from './ItemLayout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb, SiPython, SiGit } from 'react-icons/si';

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

const Index = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 w-full">
      {/* Counters Section */}
      <div className="grid grid-cols-12 gap-6 xs:gap-6 md:gap-8 w-full mb-12">
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <Counter value={35} />+<br />
            <sub className="font-semibold text-base">Projects Delivered</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <Counter value={135} />k+<br />
            <sub className="font-semibold text-base">Lines of Code Written</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <Counter value={100} />+<br />
            <sub className="font-semibold text-base">Hours of Coding</sub>
          </p>
        </ItemLayout>
      </div>

      {/* Technologies Carousel */}
      <div className="mb-12">
        <h2 className="text-3xl text-center samarkan-font text-accent mb-6">Technologies I Work With</h2>
        <Slider {...settings}>
          {[ 
            { icon: <FaReact className="text-5xl mx-auto mb-2 text-blue-600" />, name: 'React' },
            { icon: <SiNextdotjs className="text-5xl mx-auto mb-2 text-black" />, name: 'Next.js' },
            { icon: <SiTailwindcss className="text-5xl mx-auto mb-2 text-teal-500" />, name: 'Tailwind CSS' },
            { icon: <FaNodeJs className="text-5xl mx-auto mb-2 text-green-600" />, name: 'Node.js' },
            { icon: <SiFirebase className="text-5xl mx-auto mb-2 text-yellow-500" />, name: 'Firebase' },
            { icon: <SiMongodb className="text-5xl mx-auto mb-2 text-green-800" />, name: 'MongoDB' },
            { icon: <SiPython className="text-5xl mx-auto mb-2 text-blue-500" />, name: 'Python' },
            { icon: <FaGithub className="text-5xl mx-auto mb-2 text-gray-800" />, name: 'GitHub' },
            { icon: <SiGit className="text-5xl mx-auto mb-2 text-orange-600" />, name: 'Git' }
          ].map((tech, index) => (
            <ItemLayout key={index} className="flex justify-center p-6 m-2">
              <div className="p-4 text-center">
                {tech.icon}
                <p className="text-sm font-semibold">{tech.name}</p>
              </div>
            </ItemLayout>
          ))}
        </Slider>
      </div>

      {/* Testimonials Section */}
      <div className="p-8 rounded-lg mb-12">
  <h2 className="text-3xl text-center samarkan-font text-accent mb-6">What Clients Say</h2>
  <Slider {...testimonialSettings}>
    {[ 
      { name: 'Krishna Kumar', feedback: 'Great to work with, delivered on time and exceeded expectations!' },
      { name: 'Hishita Gupta', feedback: 'The best developer I have worked with! Highly recommended.' },
      { name: 'Ghanshyam Mangla', feedback: 'Amazing experience, very professional and detail-oriented.' },
    ].map((testimonial, index) => (
      <ItemLayout key={index} className="p-6 m-4">
        <div className="h-full flex flex-col justify-between  rounded-lg shadow-md p-6">
          <p className="text-sm flex-grow">{`"${testimonial.feedback}"`}</p>
          <h4 className="mt-4 font-semibold text-accent text-center">{testimonial.name}</h4>
        </div>
      </ItemLayout>
    ))}
  </Slider>
</div>


      {/* Services Overview */}
      <div className="grid grid-cols-12 gap-8 w-full">
  {[ 
    {
      title: 'Web Development',
      description: 'Building responsive, high-performance websites using modern frameworks like React and Next.js.',
      services: ['Frontend Websites', 'Full Stack Websites', 'Responsive Design', 'API Integration']
    },
    {
      title: 'UI/UX Design',
      description: 'Creating user-friendly interfaces that prioritize usability and aesthetics.',
      services: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      title: 'SEO Optimization',
      description: 'Enhancing your website visibility and search engine rankings.',
      services: ['On-page SEO', 'Content Optimization', 'Keyword Research', 'Backlink Building']
    },
  ].map((service, index) => (
    <ItemLayout
      key={index}
      className="col-span-full xs:col-span-6 sm:col-span-6 lg:col-span-4 p-6 rounded-lg  shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl "
    >
      <div className="flex flex-col h-full">
        {/* Service Title */}
        <h3 className="font-semibold text-xl mb-2 text-accent">{service.title}</h3>

        {/* Service Description */}
        <p className="text-sm text-muted mb-4 text-white">{service.description}</p>

        {/* List of Services */}
        <ul className="text-sm text-muted space-y-2">
          {service.services.map((item, idx) => (
            <li key={idx} className="flex items-center text-gray-400">
              <span className="text-accent mr-2">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </ItemLayout>
  ))}
</div>


    </section>
  );
};

export default Index;
