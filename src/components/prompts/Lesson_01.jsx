import { nanoid } from "nanoid"
import { LessonWrapper, Prompt, CodeExample } from "../ui/PromptElements"

const lessonTitle = "Loops and Functions"
const lessonId = "01"

const items = [
  <Prompt
    key={nanoid(5)}
    title="01 Escape Characters"
    ansFilename={"01-escape-characters.js"}
    promptJSX={
      <>
        <p>
          Provide a function that returns a string with characters escaped to
          support the proper quotation marks. The function output should look
          like this:
        </p>
        <p>
          <em>
            The professor asked, &quot;Who demanded, &apos;Give me liberty or
            give me death!&apos; in 1775?&quot;
          </em>
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="02 Sum of Array"
    ansFilename={"02-sum-of-array.js"}
    promptJSX={
      <>
        <p>
          Write a function that an array and adds each element for a sum total.
        </p>
        <CodeExample>
          {`function reverseString(str) {
// Your code here
}`}
        </CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="03 Reverse String"
    ansFilename={"03-reverse-string.js"}
    promptJSX={
      <>
        <p>
          Write a function that takes a string and returns its reversed value.
        </p>
      </>
    }
  />,
]

const Lesson = () => (
  <LessonWrapper lessonId={lessonId} lessonTitle={lessonTitle} items={items} />
)

export default Lesson
