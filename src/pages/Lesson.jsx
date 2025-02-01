import { Suspense, lazy } from "react"
import { useParams } from "react-router-dom"

const LessonComponents = {}
const modules = import.meta.glob("./../components/prompts/*.jsx")

Object.keys(modules).map((key) => {
  const lessonId = key.match(/Lesson_(\d+)\.jsx$/)[1].slice(-2)
  LessonComponents[lessonId] = lazy(modules[key])
})

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
