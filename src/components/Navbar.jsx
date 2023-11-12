import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">KO</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/presentation"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Présentation
        </NavLink>
        <NavLink
          to="/projets"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projets
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
