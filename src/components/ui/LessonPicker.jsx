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

  const handleButtonClick = (componentId) => {
    setSelectedComponent(componentId)
    navigate(`${componentId}`, { relative: true })
    // window.location.reload()
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        {componentNames.map((component, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(component._id)}
            className={`py-1 px-1 rounded-md text-white ${
              selectedComponent === component._id
                ? "bg-blue-600"
                : "bg-blue-500"
            } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {component._id.replace(/^0+/, "")}
          </button>
        ))}
      </div>
    </>
  )
}

export default LessonPicker
