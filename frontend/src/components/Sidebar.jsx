import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure this path is correct

function Sidebar({ setShowPassageOverlay }) {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col items-center py-6 border-r">
      {/* Logo */}
      <div className="flex justify-center items-center w-full">
        <img src={logo} alt="Logo" className="w-24 md:w-32 h-auto" />
      </div>

      {/* Navigation Links */}
      <nav className="w-full flex flex-col gap-4">
        <NavLink
          to="/passages"
          onClick={() => setShowPassageOverlay(false)}
          className="flex items-center px-6 py-3 hover:bg-gray-100 text-gray-700 font-semibold transition rounded-lg w-full"
        >
          📖 Passages
        </NavLink>

        <NavLink
          to="/vocab"
          className="flex items-center px-6 py-3 hover:bg-gray-100 text-gray-700 font-semibold transition rounded-lg w-full"
        >
          📚 Vocab
        </NavLink>

        <NavLink
          to="/stats"
          className="flex items-center px-6 py-3 hover:bg-gray-100 text-gray-700 font-semibold transition rounded-lg w-full"
        >
          📊 Stats
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
