import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const LessonPicker = () => {
  const [componentNames, setComponentNames] = useState([])
  const [selectedComponent, setSelectedComponent] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchComponentNames = async () => {
      try {
        const modules = import.meta.glob("./../prompts/*.jsx")
        const componentNames = Object.keys(modules).map((filePath) => {
          const parts = filePath.split("/")
          const fileName = parts[parts.length - 1]
          const name = fileName
            .replace(/_/g, " ")
            .replace(/\.jsx$/, "")
            .replace(/ 0/g, " ")
          const _id = fileName.slice(-6, -4)
          return { _id, name }
        })
        setComponentNames(componentNames)
      } catch (error) {
        console.error("Error fetching component names:", error)
      }
    }

    fetchComponentNames()
  }, [])

  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value
    setSelectedComponent(selectedValue)
    const dynamicId = selectedValue
    navigate(`${dynamicId}`, { relative: true })
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <select
        id="component-select"
        name="component-select"
        value={selectedComponent}
        onChange={handleSelectionChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="" disabled>
          Select a Lesson
        </option>
        {componentNames.map((component, index) => (
          <option key={index} value={component._id}>
            {component.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LessonPicker
