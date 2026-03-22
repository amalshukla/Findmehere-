export default function Skills() {
  const skills = [
    {
      title: "Backend",
      items: ["Python", "Django", "Django REST Framework", "FastAPI"],
    },
    {
      title: "Database",
      items: ["MySQL", "PostgreSQL", "SQL Optimization"],
    },
    {
      title: "Data Analytics",
      items: ["Pandas", "NumPy", "Power BI", "Excel"],
    },
    {
      title: "Frontend",
      items: ["React.js", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Postman", "Docker", "AWS"],
    },
  ];

  return (
    <section  id="skills" className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              {skill.title}
            </h3>

            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-gray-200 px-3 py-1 rounded-full inline-block mr-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}