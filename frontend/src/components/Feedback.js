import { useState } from "react";
import API from "../api";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Validation
  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";

    if (!form.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      err.email = "Invalid email";

    if (!form.message) err.message = "Feedback is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // ✅ Submit
  const submit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      await API.post("feedback/", form);

      toast.success("Feedback submitted successfully! 🎉");

      setSuccess(true);
      setForm({ name: "", email: "", message: "", rating: 5 });

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      toast.error("Failed to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Give Your Feedback
      </h2>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow">
        
        <div className="space-y-4">

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full p-3 border rounded-lg dark:bg-gray-800"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full p-3 border rounded-lg dark:bg-gray-800"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Feedback */}
          <div>
            <textarea
              placeholder="Your Feedback"
              rows="4"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full p-3 border rounded-lg dark:bg-gray-800"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* ⭐ Rating UI */}
          <div>
            <label className="block mb-2 font-medium">
              Rating
            </label>

            <div className="flex gap-2 text-2xl cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() =>
                    setForm({ ...form, rating: star })
                  }
                  className={
                    star <= form.rating
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={submit}
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg"
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </motion.button>

          {/* ✅ Success Animation */}
          {success && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-500 text-center mt-4 text-lg"
            >
              🎉 Thank you for your feedback!
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}