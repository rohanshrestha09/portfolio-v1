import { useState } from "react";
import tailwind from "../images/tailwind.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.png";
import react from "../images/react.png";
import node from "../images/node.png";
import typescript from "../images/typescript.png";
import workImgBlog from "../images/blglg.png";
import workImgBlogSm from "../images/blgsm.png";
import patra from "../images/patra.png";
import insta from "../images/insta.png";

const Works = () => {
  const [showPreview, setShowPreview] = useState([null, null]);
  const [imgUrlBlog, setImgUrlBlog] = useState(workImgBlogSm);

  window.addEventListener("load", () => {
    if (window.innerWidth > 776) setImgUrlBlog(workImgBlog);
    else setImgUrlBlog(workImgBlogSm);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 776) return setImgUrlBlog(workImgBlog);

    setImgUrlBlog(workImgBlogSm);
  });

  const preview = (val, index) => {
    setShowPreview([val, index]);
  };

  const logos = [
    [mongodb, "MongoDB"],
    [express, "Express"],
    [react, "React"],
    [node, "Node"],
    [typescript, "TypeScript"],
    [tailwind, "Tailwind"],
  ];

  const projects = [
    {
      name: "BlogSansar",
      description:
        "A site where users can create an account, login, read and post blogs. (Full Stack)",
      bg: "bg-[rgb(225,225,225,.15)] backdrop-blur-sm",
      link: "https://blogsansar.herokuapp.com",
      githubLink: "https://github.com/rohanshrestha09/BlogSansar",
      text: "text-red-500",
      imgUrl: imgUrlBlog,
    },
    {
      name: "Instagram",
      description: "Instagram Messenger Clone (Front End Only)",
      bg: "bg-inherit backdrop-blur-sm",
      link: "https://igt-clone.herokuapp.com",
      githubLink: "https://github.com/rohanshrestha09/Instagram-Clone",
      text: "text-white",
      imgUrl: insta,
    },
    {
      name: "Patra",
      description: "A messaging app.",
      bg: "bg-[rgb(16,16,29)] backdrop-blur-sm",
      link: "https://patra-nestjs.herokuapp.com",
      link2: "https://patranp.herokuapp.com",
      githubLink: "https://github.com/rohanshrestha09/Patra-Nestjs.git",
      text: "text-white",
      imgUrl: patra,
    },
  ];

  return (
    <div
      className="w-full min-h-screen py-6 flex flex-col justify-evenly items-center"
      id="skills"
    >
      <div className="flex items-center flex-col w-full lg:w-3/4 xl:w-2/3">
        <p className="text-2xl lg:text-3xl font-bold py-1">Skills</p>
        <p className="text-sm decoration-rose-500 underline underline-offset-2 decoration-2">
          Things I am good at
        </p>

        <div className="md:py-6 py-4 w-full flex justify-between">
          {logos.map((element, index) => (
            <div className="flex flex-col items-center" key={index}>
              <img alt="" src={element[0]} className="w-10 h-10" />
              <p className="sticky top-20 py-2 left-12 font-stylish text-sm md:text-lg lg:text-xl">
                {element[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col">
        <p className="text-2xl lg:text-3xl font-bold py-1">My works</p>
        <p className="text-sm decoration-rose-500 underline underline-offset-2 decoration-2">
          Have a look below at my recent works
        </p>
      </div>
      <div className="w-full grid gap-3 grid-rows-2 md:grid-rows-1 md:grid-cols-3 grid-cols-2 justify-items-center">
        {projects.map((element, index) => (
          <div
            key={index}
            className={`md:h-56 lg:h-64 h-44 w-full flex flex-col items-center justify-center ${
              element.bg
            } rounded-md ${index === 0 && "row-span-full min-h-full"}`}
            id={element.name === "Instagram" ? "instagram" : undefined}
            onMouseEnter={() => preview(true, index)}
            onMouseLeave={() => preview(null, null)}
          >
            <div
              className={`fixed ${
                index === showPreview[1] && showPreview[0] ? "flex" : "hidden"
              } h-full w-full flex-col items-center justify-center bg-[rgba(225,225,225,0.3)] rounded-md`}
            >
              <div className="flex flex-col items-center h-full w-full">
                <div className="h-1/2 flex justify-center items-center">
                  {/* eslint-disable-next-line*/}
                  <a
                    href={element.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-20 h-20 rounded-full hover:bg-[rgba(1,225,233,1)] text-black bg-[rgb(1,255,233)] text-xs flex items-center justify-center"
                  >
                    LIVE PREVIEW
                  </a>
                </div>
                <div className="bg-[rgb(54,57,63)] h-1/2 w-full flex items-center flex-col justify-center">
                  <p
                    className={`font-stylish text-2xl ${element.text} font-bold`}
                  >
                    {element.name}
                  </p>
                  <p
                    className={`text-xs ${element.text} text-center break-words w-full`}
                  >
                    {element.description}
                  </p>
                  <a
                    href={element.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 font-bold text-xs underline py-2"
                  >
                    View on github
                  </a>
                  {index === 2 && (
                    <a
                      href={element.link2}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 font-bold text-xs underline py-2"
                    >
                      Front-End Link
                    </a>
                  )}
                </div>
              </div>
            </div>
            <img
              src={element.imgUrl}
              alt=""
              className={`h-full rounded-md w-auto`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
