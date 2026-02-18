import { useState, lazy, useRef, Suspense } from "react"
import evaluateScript from "../../utils/evaluateScript"
import { nanoid } from "nanoid"
import AccordionItem from "./Accordion"
const currPathMinus3Levels = new URL(import.meta.url).pathname.replace(
  /\/[^/]*\/[^/]*\/[^/]*$/,
  "",
)

const getAnswer = async ({ lessonId, ansFilename }) => {
  const result = await evaluateScript({ lessonId, ansFilename })
  return result || {}
}

const LessonWrapper = ({ lessonId, lessonTitle, items }) => {
  const [openItemId, setOpenItemId] = useState(null)

  const handleAccordionClick = (key) => {
    setOpenItemId(openItemId === key ? null : key)
  }

  return (
    <>
      <h1 className="text-3xl font-extrabold text-left mt-8">
        Lesson {lessonId.replace(/^0+/, "")}: {lessonTitle}
      </h1>
      <p className="text-lg mt-2">
        Working folder:{" "}
        <code className="text-base text-blue-600">
          {currPathMinus3Levels}/exercises/lesson_{lessonId}
        </code>
      </p>
      <div className="mx-auto mt-8">
        {items.map((item) => {
          item = {
            ...item,
            props: {
              ...item.props,
              lessonId: lessonId,
            },
          }
          return (
            <AccordionItem
              key={nanoid(5)}
              title={item.props.title}
              isOpen={openItemId === item.key ? true : false}
              onClick={() => handleAccordionClick(item.key)}
              answer={item.props.answer}
            >
              <div className="mb-4">{item}</div>
            </AccordionItem>
          )
        })}
      </div>
    </>
  )
}

const Prompt = ({ ansFilename, promptJSX, lessonId }) => {
  const [, setRerender] = useState(false)
  const outputRef = useRef(null)

  const handleRerender = () => {
    setRerender((prev) => !prev)
    const intervalId = setInterval(() => {
      if (LazyOutputToHTML && outputRef.current) {
        outputRef.current.scrollIntoView({ behavior: "instant" })
        clearInterval(intervalId)
      }
    }, 60)
  }

  const LazyOutputToHTML = lazy(async () => {
    const { answer, log, verification } = await getAnswer({
      ansFilename,
      lessonId,
    })
    console.log(answer, log, verification)
    return {
      default: () => (
        <OutputToHTML answer={answer} log={log} verification={verification} />
      ),
    }
  })

  return (
    <>
      {promptJSX}
      <Suspense fallback={<div>Loading...</div>}>
        <h2 className="text-xl font-bold mt-4">Output</h2>

        <button
          onClick={handleRerender}
          className="mt-1.5 mr-1.5 px-2 py-1 bg-gray-300 text-gray-700 font-medium rounded shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75 float-right"
        >
          Run
        </button>
        <div ref={outputRef}>
          <LazyOutputToHTML />
        </div>
      </Suspense>
    </>
  )
}

const CodeExample = ({ children }) => {
  return (
    <>
      <div className="p-2 my-2 text-sm font-medium bg-blue-100">
        <pre className="whitespace-pre-wrap break-words">
          <code>{children}</code>
        </pre>
      </div>
    </>
  )
}

const OutputToHTML = ({ answer, log, verification }) => {
  return (
    <>
      {typeof answer === "string" && answer.trim() ? (
        <div className="bg-black text-green-400 p-3 rounded-lg text-sm font-medium">
          <pre className="whitespace-pre-wrap break-words">
            <code>{answer}</code>
            {log && (
              <>
                <code className="text-white">{`\n\n=== Console Log ===\n${log}`}</code>
              </>
            )}
            {verification && (
              <code className="text-red-500">{`\n\n=== Issues ===\n${verification}`}</code>
            )}
            {!verification && (
              <code className="text-white">{`\n\n=== Passed Validations! ===\n`}</code>
            )}
          </pre>
        </div>
      ) : (
        <div className="bg-yellow-100 text-red-500 p-3 rounded-lg font-medium">
          ERROR! <br />
          1) Check the Problems tab in VSCode.
          <br />
          2) Check the browser console for errors.
        </div>
      )}
    </>
  )
}

export { LessonWrapper, Prompt, CodeExample }
