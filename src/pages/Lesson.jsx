import { Suspense, lazy } from "react"
import { useParams } from "react-router-dom"

const Lesson = () => {
  const { lessonId } = useParams()
  const LessonComponent = lazy(() =>
    import(`./../components/prompts/Lesson_${lessonId}.jsx`)
  )

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LessonComponent lessonId={lessonId} />
    </Suspense>
  )
}

export default Lesson
