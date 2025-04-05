"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!searchQuery) return projects;

    const lowercaseQuery = searchQuery?.toLowerCase();
    return projects?.filter((project) => project?.tags?.some((tag) => tag?.toLowerCase()?.includes(lowercaseQuery)));
  }, [searchQuery]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    projects?.forEach((project) => {
      project?.tags?.forEach((tag) => tags?.add(tag));
    });
    return Array?.from(tags);
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">Featured Projects</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Explore my latest work showcasing modern web development techniques and creative solutions.
        </p>
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <div className="relative mx-auto max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search by technology (e.g., React, TypeScript)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tags Filter */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {allTags?.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className={`rounded-full px-4 py-1 text-sm font-medium transition-colors ${
                searchQuery === tag ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredProjects?.length === 0 && (
        <div className="mt-8 text-center text-gray-500">No projects found matching your search criteria.</div>
      )}
    </div>
  );
};

export default Projects;
