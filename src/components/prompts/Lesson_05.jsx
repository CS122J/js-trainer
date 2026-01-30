import { nanoid } from "nanoid"
import { LessonWrapper, Prompt, CodeExample } from "../ui/PromptElements"

const lessonTitle = "Array and Object Iteration"
const lessonId = "05"

const items = [
  <Prompt
    key={nanoid(5)}
    title='01 "for" Loop (Basic) with Array'
    ansFilename={"01-for-loop-array.js"}
    promptJSX={
      <>
        <p>
          Given the <code>primitives</code> array, write a basic{" "}
          <code>for</code> loop that logs each primitive data type name to the
          console. Use the array's <code>.length</code> property as part of the
          loop condition.
        </p>
        <CodeExample>{`const primitives = [
  "string",
  "boolean",
  "null",
  "number",
  "undefined",
  "symbol"
];`}</CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title='02 "for..in" Loop with Array'
    ansFilename={"02-for-in-loop-array.js"}
    promptJSX={
      <>
        <p>
          Given the <code>networks</code> array, write a <code>for..in</code>{" "}
          loop that logs each network's name to the console.
        </p>
        <CodeExample>{`const networks = ["nbc", "abc", "cbs", "fox", "cnn"];`}</CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title='03 "for..of" Loop with Object.keys()'
    ansFilename={"03-for-of-loop-obj-keys.js"}
    promptJSX={
      <>
        <p>
          Below is an object based on TMU's 2022 NIAI All American men's
          honorees in Track & Field. Use a <code>for..of</code> loop to log each
          honoree's name to the console. You will use the{" "}
          <code>Object.keys()</code> method to get an iterable.
        </p>
        <CodeExample>{`const trackFieldAA = {
  "calebPouliot": "Pole Vault",
  "davisBoggess": "5K",
  "danielRush": "5K",
  "anthonyGhiorso": "1500",
  "wesleyMethum": "10K"
};`}</CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title='04 "for..of" Loop with Object.values()'
    ansFilename={"04-for-of-loop-obj-values.js"}
    promptJSX={
      <>
        <p>
          Below is a list of TMU's top female milers as of the 2022 season. Use
          a <code>for..of</code> loop to log each time to the console. You will
          use the <code>Object.values()</code> method to get an iterable.
        </p>
        <CodeExample>{`const topMilers = {
  "karisFrankian": "5:01.75",
  "ariannaGhiorso": "5:11.08",
  "abigailFrankian": "5:18.88 ",
  "rachelRush": "5:22.27",
  "hollieLarsen": "5:23.47",
  "charitySchroeder": "5:31.04"
}`}</CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title='05 "for..of" Loop with Object.entries()'
    ansFilename={"05-for-of-loop-obj-entries.js"}
    promptJSX={
      <>
        <p>
          Below is a list top TMU men's marathoners. Use a <code>for..of</code>{" "}
          loop to log each record holder's name and time to the console. You
          will use the <code>Object.entries()</code> method to get an iterable.
        </p>
        <p>
          Your task is to log the record holder's name and time to the console.
          Do not log the array, but rather log a string formatted like this:
        </p>
        <p>
          <code>Name: jeffreyJackson | Time 2:31.44</code>
        </p>
        <CodeExample>{`const topMarathoners = {
  "jeffreyJackson": "2:31.44",
  "tylerTockstein": "2:35.25",
  "joshiahDowner": "2:39.54",
  "johnHurd": "2:41.40"
};`}</CodeExample>
      </>
    }
  />,
]

const Lesson = () => (
  <LessonWrapper lessonId={lessonId} lessonTitle={lessonTitle} items={items} />
)

export default Lesson
