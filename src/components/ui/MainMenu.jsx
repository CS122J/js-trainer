import { NavLink } from "react-router-dom"

const MainMenu = () => {
  return (
    <nav className="bg-gray-800 p-4">
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
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray-400"
            }
          >
            About
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
    </nav>
  )
}

export default MainMenu
