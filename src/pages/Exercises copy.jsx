//import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import LessonMenu from "../components/ui/LessonPicker"

const Exercises = () => {
  const [components, setComponents] = useState([])

  useEffect(() => {
    const modules = import.meta.glob("./../components/prompts/*.jsx")
    const loadComponents = async () => {
      const loadedComponents = await Promise.all(
        Object.entries(modules).map(async ([path, importer]) => {
          const module = await importer()
          return { path, Component: module.default } // Assuming the default export is the component
        })
      )
      setComponents(loadedComponents)
    }

    loadComponents()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold">Lessons</h2>
      <LessonMenu />
      <Outlet />
      {components.map(({ path, Component }) => (
        <div key={path}>
          <Component />
        </div>
      ))}
    </div>
  )
}

export default Exercises
