"use client";
import Link from "next/link";
import { Arima } from "next/font/google";
const arima = Arima({ subsets: ["latin"], display: "swap" });
import { FaInstagram } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { GoMail } from "react-icons/go";

// const handleclik = () => {
//   console.log("hit");
// };

// export default function Hero() {
//   return (
//     <>
//       <div className="h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-hero bg-cover">
//         <h1 className="text-4xl font-semibold">HI, I am Sujoy Das, A Front-End Developer</h1>
//         <p className={`${arima.className} flex-1 text-justify leading-relaxed text-lg`}>
//           Passionate about Web development with advance skills in HTML, CSS, JS. I have knowledge of popular frameworks
//           such as ReactJs, NextJs as well. I have a reliable analytical & debugging skill. Active with research &
//           development, new frameworks, new stacks as curious about learning new technologies.
//         </p>
//         <div className="flex items-center gap-12 justify-self-end">
//           <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">Contact me</button>
//           <div className="flex items-center gap-4 ">
//             <BiLogoGmail
//               style={{ background: "white", borderRadius: "9999px", height: "3rem", width: "3rem", padding: "5px" }}
//               size={10}
//               onMouseOver={({ target }) => (target.style.color = "#c71610")}
//               onMouseOut={({ target }) => (target.style.color = "black")}
//               cursor={"pointer"}
//               onClick={() => window.open("https://www.geeksforgeeks.org", "_blank")}
//             />
//             <AiFillLinkedin
//               style={{ background: "white", borderRadius: "9999px", height: "3rem", width: "3rem", padding: "5px" }}
//               size={30}
//               onMouseOver={({ target }) => (target.style.color = "#0072b1")}
//               onMouseOut={({ target }) => (target.style.color = "black")}
//               cursor={"pointer"}
//               onClick={() => window.open("https://www.geeksforgeeks.org", "_blank")}
//             />
//             <AiFillGithub
//               style={{ background: "white", borderRadius: "9999px", height: "3rem", width: "3rem", padding: "5px" }}
//               size={30}
//               onMouseOver={({ target }) => (target.style.color = "#171515")}
//               onMouseOut={({ target }) => (target.style.color = "black")}
//               cursor={"pointer"}
//               onClick={() => window.open("https://www.geeksforgeeks.org", "_blank")}
//             />
//             <BsMessenger
//               style={{ background: "white", borderRadius: "9999px", height: "3rem", width: "3rem", padding: "5px" }}
//               size={30}
//               onMouseOver={({ target }) => (target.style.color = "#0099FF")}
//               onMouseOut={({ target }) => (target.style.color = "black")}
//               cursor={"pointer"}
//               onClick={() => window.open("https://www.geeksforgeeks.org", "_blank")}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="h-[30rem] mt-0 rounded-3xl p-8 bg-profile bg-cover bg-center" />
//     </>
//   );
// }

export default function Hero() {
  return (
    <>
      <div className="h-[30rem] sm:h-[40rem] md:h-[30rem] rounded-3xl p-10 flex flex-col gap-4 sm:gap-6 md:gap-8 bg-hero bg-cover">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">HI, I am Sujoy Das, A Fullstack Developer</h1>
        <p className={`${arima.className} flex-1 text-sm sm:text-base md:text-lg text-justify leading-relaxed`}>
          Passionate about Full Stack Web development with advance skills in TS, JS. I have advanced knowledge of
          ReactJs, with popular frameworks such as , NextJs, Astro. I have a reliable analytical & debugging skill.
          Active with research & development, exploring new frameworks, new stacks as curious about learning new
          technologies.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12 justify-center sm:justify-self-end">
          <button className="bg-black text-white font-medium py-2 sm:py-3 px-6 sm:px-12 rounded-full w-full sm:w-60 lg:w-auto">
            Contact me
          </button>
          <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-0 flex-wrap">
            {/* ... keep your icons here ... */}
            <BiLogoGmail
              style={{ background: "white", borderRadius: "9999px", height: "3rem", width: "3rem", padding: "5px" }}
              size={10}
              onMouseOver={({ target }) => (target.style.color = "#c71610")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              cursor={"pointer"}
              onClick={() => window.open("mailto:dsujoy.cse@gmail.com", "_blank")}
            />
            <AiFillLinkedin
              style={{ background: "white", borderRadius: "9999px", height: "3rem", width: "3rem", padding: "5px" }}
              size={30}
              onMouseOver={({ target }) => (target.style.color = "#0072b1")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              cursor={"pointer"}
              onClick={() => window.open("https://www.linkedin.com/in/dsujoy/", "_blank")}
            />
            <AiFillGithub
              style={{ background: "white", borderRadius: "9999px", height: "3rem", width: "3rem", padding: "5px" }}
              size={30}
              onMouseOver={({ target }) => (target.style.color = "#171515")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              cursor={"pointer"}
              onClick={() => window.open("https://github.com/dsujoydev", "_blank")}
            />
            <BsMessenger
              style={{ background: "white", borderRadius: "9999px", height: "3rem", width: "3rem", padding: "5px" }}
              size={30}
              onMouseOver={({ target }) => (target.style.color = "#0099FF")}
              onMouseOut={({ target }) => (target.style.color = "black")}
              cursor={"pointer"}
              onClick={() => window.open("https://m.me/SujoyUncle", "_blank")}
            />
          </div>
        </div>
      </div>
      <div className="h-[30rem] sm:h-[30rem] md:h-[30rem] mt-0 rounded-3xl p-8 bg-profile bg-cover bg-center" />
    </>
  );
}
