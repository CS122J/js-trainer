import { NavLink } from "react-router-dom"
import jsLogo from "/jslogo.jpg"

const MainMenu = () => {
  return (
    <nav className="bg-gray-800 p-2 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/getting-started"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
          >
            Getting Started
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exercises"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
          >
            Exercises
          </NavLink>
        </li>
      </ul>
      <img src={jsLogo} alt="JS Logo" className="h-7 w-7" />
    </nav>
  )
}

export default MainMenu
