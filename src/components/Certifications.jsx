"use client";

import { useState } from "react";
import { certifications } from "@/data/certifications";
import { motion, AnimatePresence } from "motion/react";

export default function Certifications() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 px-4" id="certifications">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
        </h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleAccordion(cert.id)}
                aria-expanded={expandedId === cert.id}
                aria-controls={`cert-${cert.id}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === cert.id ? 180 : 0 }}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    ▼
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expandedId === cert.id && (
                  <motion.div
                    id={`cert-${cert.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{cert.description}</p>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      >
                        View Credential
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
