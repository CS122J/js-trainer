import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Lesson = () => {
  const { lessonId } = useParams()
  const [LessonComponent, setLessonComponent] = useState(null)

  useEffect(() => {
    const loadComponent = async () => {
      const { default: Component } = await import(
        `./../components/prompts/Lesson_${lessonId}.jsx`
      )
      setLessonComponent(() => Component)
    }
    loadComponent()
  }, [lessonId])

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {LessonComponent ? <LessonComponent /> : <div>Loading...</div>}
    </React.Suspense>
  )
}

export default Lesson
