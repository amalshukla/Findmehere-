export default function About() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
          
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I am a <span className="font-semibold text-blue-600">Python Backend Developer</span> 
            with 2+ years of experience building scalable web applications using 
            Django and REST APIs.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I specialize in <span className="font-medium">API development, database design,</span> 
            and performance optimization to build efficient backend systems.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Recently, I have been expanding into 
            <span className="font-semibold text-blue-600"> Data Analytics</span>, 
            working with tools like Pandas, Power BI, and SQL to turn data into 
            actionable insights.
          </p>

        </div>
      </div>
    </section>
  );
}