"use client";
import React, { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdWindow } from "react-icons/md";
const navLinks = [
  {
    path: "/aboutme",
    title: "About Me",
    content:
      "We are a dynamic team of passionate individuals dedicated to bringing innovative solutions to life. Our journey began with a mission to revolutionize the industry through creativity, collaboration, and cutting-edge technology. With a commitment to excellence, we strive to exceed expectations and deliver outstanding results in every project",
  },
  {
    path: "/experience",
    title: "Experience",
    content:
      "With over a decade of experience, we have honed our skills across various sectors, successfully delivering high-impact projects for clients around the globe. Our portfolio spans from small businesses to Fortune 500 companies, each project a testament to our expertise and dedication. From project management to hands-on technical execution, we have a proven track record of transforming ideas into reality. Our team brings together a wealth of knowledge in design, development, and strategic consulting, ensuring that we stay ahead of industry trends and best practices.",
  },
  {
    path: "/recommended",
    title: "Recommended",
    content:
      "Our clients and partners highly recommend us for our unwavering commitment to quality and customer satisfaction. We consistently go above and beyond, providing thoughtful solutions tailored to individual needs. Whether it’s through our innovative products or exceptional services, we’ve built a reputation for exceeding expectations. Check out some of the glowing testimonials and case studies that highlight our ability to deliver, even in the most challenging environments. Trust us to be your go-to solution provider for all your needs.",
  },
];
const Navigation = () => {
  const [content, setContent] = useState(navLinks[0].content);

  const handleClick = (content) => {
    setContent(content);
  };
  return (
    <div className="lg:p-10 p-3">
      <div className="bg-slate-700 h-[240px] rounded-md shadow-lg">
        <div className="flex h-full">
          <div className="flex flex-col justify-between h-full px-2 py-2">
            <FaRegCircleQuestion size={22} aria-label="Help" />
            <MdWindow size={24} aria-label="Window" />
            <div className=""></div>
          </div>
          <div className="">
            <div className="w-full">
              <div className="bg-slate-900 my-2 rounded-2xl mx-3">
                <div className="flex justify-between mx-3">
                  {navLinks.map((elm, index) => (
                    <div
                      key={index}
                      className="my-2 px-1 mx-1 hover:scale-125 hover:bg-slate-700  hover:shadow-black hover:shadow-[10px_10px_30px_rgba(0,0,0,0.8)] rounded-md cursor-pointer"
                    >
                      <button
                        className="text-white sm:text-lg text-[11px]"
                        onClick={() => handleClick(elm.content)}
                      >
                        {elm.title}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Display the dynamic content */}
            <div className="mt-2 p-4 overflow-auto h-[130px] lg:h-[150px] scroll-bar-hidden">
              <p className="text-white/55 sm:text-lg text-[11px]">
                {content || "Click a button to view content"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
