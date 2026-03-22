import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <h1 className="font-bold">Amal</h1>

        <div className="space-x-6">
          {["about", "skills", "projects", "contact"].map((sec) => (
            <Link
              key={sec}
              to={sec}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              {sec}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}