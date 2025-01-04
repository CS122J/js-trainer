import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"
import LessonPicker from "../components/ui/LessonPicker"

const Exercises = () => {
  const { lessonId } = useParams()

  return (
    <div>
      {!lessonId && (
        <h1 className="text-3xl font-bold mb-4">Select a Lesson Number</h1>
      )}
      <LessonPicker />
      <Outlet />
    </div>
  )
}

export default Exercises
