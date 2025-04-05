"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Server, Database, Cloud, TestTube, Braces, PenTool } from "lucide-react";
import { techStack } from "@/data/techStack";

const techIcons = {
  languages: <Braces className="h-6 w-6" />,
  frontend: <PenTool className="h-6 w-6" />,
  backend: <Server className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
  cloud: <Cloud className="h-6 w-6" />,
  testing: <TestTube className="h-6 w-6" />,
};

const techColors = {
  languages: "from-violet-500 to-purple-500",
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-green-500 to-emerald-500",
  database: "from-amber-500 to-yellow-500",
  cloud: "from-rose-500 to-pink-500",
  testing: "from-orange-500 to-red-500",
};

const TechStack = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-green-100 opacity-20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 bg-black bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Tech Stack
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Technologies and tools I use to bring projects to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(techStack).map(([key, category]) => (
            <motion.div
              key={key}
              variants={item}
              onMouseEnter={() => setHoveredCategory(key)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* Gradient background that appears on hover */}
              <div
                className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 bg-gradient-to-br ${techColors[key]} group-hover:opacity-5`}
              />

              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                <div className={`rounded-full bg-gradient-to-r p-2 ${techColors[key]} text-white`}>
                  {techIcons[key]}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 transition-all duration-300 hover:bg-gradient-to-r ${techColors[key]} hover:text-white`}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
