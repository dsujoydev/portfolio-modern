import { ExternalLink, Github } from "lucide-react";

const Projects = ({ name, description, imgUrl, url, github, tags }) => {
  return (
    <div className="group relative overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="aspect-video w-full overflow-hidden">
        <div
          className={`h-full w-full transform bg-cover bg-center transition-all duration-500 group-hover:scale-110 ${imgUrl}`}
        />
      </div>

      <div className="relative p-6">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span key={index} className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
              {tag}
            </span>
          ))}
        </div>

        {/* Project Info */}
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{name}</h3>
        <p className="mb-4 text-gray-600">{description}</p>

        {/* Links */}
        <div className="flex items-center gap-4">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-800"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

// className={`h-[30rem] rounded-3xl border border-slate-300 overflow-hidden ${dark ? "dark" : ""}`}
