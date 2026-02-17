import { Suspense, lazy } from "react"
import { useParams } from "react-router-dom"

const modules = import.meta.glob("./../components/prompts/*.jsx")

const LessonComponents = Object.keys(modules).reduce((acc, key) => {
  const lessonId = key.match(/Lesson_(\d+)\.jsx$/)[1].slice(-2)
  acc[lessonId] = lazy(modules[key])
  return acc
}, {})

const Lesson = () => {
  const { lessonId } = useParams()
  const LessonComponent = LessonComponents[lessonId]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LessonComponent lessonId={lessonId} />
    </Suspense>
  )
}

export default Lesson
