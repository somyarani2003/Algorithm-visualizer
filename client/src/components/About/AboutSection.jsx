import React from "react";
import {Linkedin, Mail, Github } from "lucide-react";

const AboutSection = ({ onClose }) => {
  const team = [
    {
      name: "Somya Rani",
      photo: "/assets/somya.jpg", // put your image in public/images/
      linkedin: "https://www.linkedin.com/in/somya-rani/",
      email: "somyarani698@gmail.com",
      github: "https://github.com/somyarani2003",
    },
    {
      name: "Rajibul Molla",
      photo: "/assets/rajibul.jpg",
      linkedin: "https://www.linkedin.com/in/rajibulmolla/",
      email: "rajibul@example.com",
      github: "https://github.com/Rajibul-Molla",
    },
    {
      name: "Aditya Kumar",
      photo: "/assets/aditya.jpg",
      linkedin: "https://www.linkedin.com/in/aditya-kumar-8a7094296/",
      email: "aditya@example.com",
      github: "#",
    },
  ];

  return (
    <div className="w-screen h-[calc(100vh-64px)] bg-gray-900 flex flex-col justify-center items-center px-6 overflow-auto pt-20">
  <h2 className="text-4xl text-cyan-400 mb-8 font-bold">Team Members</h2>
  <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
    {team.map((m) => (
      <div key={m.name} className="bg-gray-800 p-6 rounded-xl text-center flex flex-col items-center">
        <img
          src={m.photo}
          alt={m.name}
          className="w-32 h-32 rounded-full mb-4 object-cover border-2 border-cyan-400"
        />
        <h3 className="text-xl font-bold">{m.name}</h3>
        <div className="flex justify-center gap-4 mt-3 text-cyan-400">
          <a href={m.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href={`mailto:${m.email}`}><Mail /></a>
          <a href={m.github} target="_blank" rel="noopener noreferrer"><Github /></a>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default AboutSection;
