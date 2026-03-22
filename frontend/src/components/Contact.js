import { useState } from "react";
import API from "../api";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";
    if (!form.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      err.email = "Invalid email";

    if (!form.message) err.message = "Message is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);
      await API.post("contact/", form);

      toast.success("Message sent successfully!");

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow">
        
        <div className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 border rounded-lg dark:bg-gray-800"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 border rounded-lg dark:bg-gray-800"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          {/* Message */}
          <textarea
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 border rounded-lg dark:bg-gray-800"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message}</p>
          )}

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={submit}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Success Animation */}
          {success && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-500 text-center mt-4 text-lg"
            >
              ✅ Message Sent Successfully!
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}