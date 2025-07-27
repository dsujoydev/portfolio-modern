"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { certifications } from "@/data/certifications";
import Image from "next/image";

export default function Certifications() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900" id="certifications">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        width={500}
                        height={500}
                        src={cert.imageUrl}
                        alt={`${cert.title} certification`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{cert.title}</h3>
                        <p className="text-gray-200 text-sm">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{cert.description}</p>

                      <div className="mt-auto">
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2 text-sm">Skills Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
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
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group"
                        >
                          View Credential
                          <svg
                            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-blue-600 dark:bg-blue-400 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            aria-label="Previous certification"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            aria-label="Next certification"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
