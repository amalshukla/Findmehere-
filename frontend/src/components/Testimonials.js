import { useEffect, useState } from "react";
import API from "../api";

export default function Testimonials() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    API.get("feedback-list/")
      .then(res => setFeedbacks(res.data))
      .catch(() => {});
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {feedbacks.map((f) => (
          <div
            key={f.id}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow"
          >
            <h3 className="font-semibold">{f.name}</h3>
            <p className="text-yellow-400">
              {"★".repeat(f.rating)}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {f.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}