import { useEffect, useState } from "react";
import API from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("projects/")
      .then(res => setProjects(res.data))
      .catch(() => {});
  }, []);

  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow overflow-hidden hover:shadow-lg"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {p.description}
              </p>

              <a
                href={p.link}
                target="_blank"
                className="text-blue-500 mt-2 inline-block"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}