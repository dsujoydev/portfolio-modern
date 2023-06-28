import { Arima } from "next/font/google";
const arima = Arima({ subsets: ["latin"], display: "swap" });
import { FaInstagram } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      <div className="h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-hero bg-cover">
        <h1 className="text-4xl font-semibold">HI, I am Sujoy Das, A Front-End Developer</h1>
        <p className={`${arima.className} flex-1 text-justify leading-relaxed text-lg`}>
          Passionate about Web development with advance skills in HTML, CSS, JS. I have knowledge of popular frameworks
          such as ReactJs, NextJs as well. I have a reliable analytical & debugging skill. Active with research &
          development, new frameworks, new stacks as curious about learning new technologies.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
          <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">Contact me</button>
          <div>
            <FaInstagram fill="red" size={30} />
          </div>
        </div>
      </div>
      <div className="h-[30rem] rounded-3xl p-8 bg-profile bg-cover bg-center" />
    </>
  );
}
