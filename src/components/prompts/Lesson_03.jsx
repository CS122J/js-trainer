import { nanoid } from "nanoid"
import { LessonWrapper, Prompt, CodeExample } from "../ui/PromptElements"

const lessonTitle = "Program Structure"
const lessonId = "03"

const items = [
  <Prompt
    key={nanoid(5)}
    title="01 Looping a Triangle"
    ansFilename={"01-looping-a-triangle.js"}
    promptJSX={
      <>
        <p>
          Write a loop that repeats seven times, each time concatenating the{" "}
          <code>myString</code> variable with a hashtag <code>#</code> and
          printing it with <code>console.log(...)</code>. Your function should
          produce the below pattern in the console area of your browser.
        </p>
        <CodeExample>{`#
##
### 
#### 
##### 
###### 
#######`}</CodeExample>
        <p>
          <em>
            It might be useful to know that you can find the length of a string
            by accessing the <code>.length</code> property.
          </em>
        </p>
        <p>
          Next, instead of printing each loop output to the console, try adding
          it to a new string variable with a newline character (<code>\\n</code>
          ). Return this new string from your function.
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="02 FizzBuzz"
    ansFilename={"02-fizz-buzz.js"}
    promptJSX={
      <>
        <p>
          <strong>Part 1</strong>: Create a string that includes all the numbers
          from 1 to 100, with two exceptions: a) For numbers divisible by 3,
          print "Fizz" instead of the number, and b) for numbers divisible by 5
          (and not 3), print "Buzz" instead.{" "}
          <em>Your string output should reflect this pattern</em>:
        </p>
        <CodeExample>{`1, 2, Fizz, 4, Buzz, Fizz, 7, ...`}</CodeExample>
        <p>
          <strong>Part 2</strong>: When you have that working, modify your
          program to print "FizzBuzz" for numbers that are divisible by both 3
          and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only
          one of those numbers).
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="03 Chessboard"
    ansFilename={"03-chessboard.js"}
    promptJSX={
      <>
        Create a string that represents an 8x8 grid. Use a newline (
        <code>\\n</code>) character to separate each line. A hashtag{" "}
        <code>#</code> or a space will be at each position of the grid. The
        characters should thus form a chessboard pattern, as shown below.{" "}
        <CodeExample>{`# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #`}</CodeExample>
      </>
    }
  />,
]

const Lesson = () => (
  <LessonWrapper lessonId={lessonId} lessonTitle={lessonTitle} items={items} />
)

export default Lesson
