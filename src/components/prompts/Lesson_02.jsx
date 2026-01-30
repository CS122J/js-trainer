import { nanoid } from "nanoid"
import { LessonWrapper, Prompt, CodeExample } from "../ui/PromptElements"

const lessonTitle = "Rules of the JS Road"
const lessonId = "02"

const items = [
  <Prompt
    key={nanoid(5)}
    title="01 Escape Characters"
    ansFilename={"01-escape-characters.js"}
    promptJSX={
      <>
        <p>
          Provide a function that returns a string with characters escaped to
          support the proper quotation marks. The function output should be
          punctuated like this:
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
    title="02 Declare, Assign, Reassign"
    ansFilename={"02-declare-assign.js"}
    promptJSX={
      <>
        <p>Perform the following sequence within your function:</p>
        <ol className="list-decimal list-inside ml-4">
          <li>
            Declare a <code>myName</code> variable.
          </li>
          <li>Assign a person's name to your variable</li>
          <li>
            Log the <code>myName</code> value to the console.
          </li>
          <li>
            Reassign the value of that variable by using a different person's
            name.
          </li>
          <li>Return the result.</li>
        </ol>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="03 String Interpolation vs Concatenation"
    ansFilename={"03-string-interpolation.js"}
    promptJSX={
      <>
        <p>
          Create a coherent story by using only the variables provided in the
          starter code. Instead of using string concatenation (
          <code>"word" + "word"</code>), use the interpolation pattern{" "}
          <code>{"${}"}</code> within a template literal, i.e., a string within
          backticks (<code>`words...`</code>).
        </p>
        <p>
          Right now the story doesn't make sense, but it will once you
          interpolate the necessary variables!
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="04 Addition Assignment Operator"
    ansFilename={"04-addition-assignment.js"}
    promptJSX={
      <>
        <p>
          Use the addition assignment operator (<code>+=</code>) to increase the{" "}
          <code>count</code> variable by 2. Since the starting value is 5, your
          function should return 7.
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="05 Remainder Operator"
    ansFilename={"05-remainder-operator.js"}
    promptJSX={
      <>
        <p>
          Use the remainder operator (<code>%</code>) to determine whether a
          number is even (can be divided evenly by 2). Your function should
          return a Boolean (<code>true</code> or <code>false</code>)
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="06 Comparison Operator in a Conditional Statement"
    ansFilename={"06-comparison-operator.js"}
    promptJSX={
      <>
        <p>
          Modify the conditional statement so that if <code>sleepHours</code> is
          less than 8, then <code>feeling</code> is "tired"; otherwise, feeling
          should be "rested."
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="07 Loose vs Strict Equality"
    ansFilename={"07-loose-strict-equality.js"}
    promptJSX={
      <>
        <p>
          Modify the conditional statement so that it tests for "strict
          equality" between variables <code>a</code> and <code>b</code>. Even
          though both are equal in value, they have different data types (number
          vs. string) and thus cannot be strictly equal.{" "}
        </p>
        <p>
          Your function should return a sentence confirming that strict equality
          between the two given values is <strong>false</strong>.
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="08 Math Operations"
    ansFilename={"08-math-operations.js"}
    promptJSX={
      <>
        <p>
          Calculate the volume of a cylinder that is represented by the
          dimensions given in the starter code. Your function should return
          approximately 16,286.
        </p>
        <p>
          <em>
            Can you improve the code by using string interpolation in the{" "}
          </em>
          <code>answer</code>
          <em> assignment?</em>
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="09 More Operators & Logical Not"
    ansFilename={"09-more-operators.js"}
    promptJSX={
      <>
        <p>
          Use logic and comparison operators to determine whether the conditions
          exist for a fire. Factor in all variables from the starter code (
          <code>hasSpark</code>, <code>hasFuel</code>, <code>isWet</code>).{" "}
          <em>
            Remember that you can also use logical not (<code>!</code>) instead
            of comparing to Boolean{" "}
          </em>
          <code>false</code>
          <em>.</em>
        </p>
        <p>
          <em>
            Can you improve the code by using string interpolation in the{" "}
          </em>
          <code>answer</code>
          <em> assignment?</em>
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="10 Do We Have a Day Off?"
    ansFilename={"10-have-day-off.js"}
    promptJSX={
      <>
        <p>
          Use logical operators to determine whether we have the day off. Assume
          we do not work on weekends, so you'll have to test for Saturday and
          Sunday.
        </p>
        <p>
          <em>
            For an extra challenge, update the code so that it uses today's
            actual date to determine whether we have the day off. Here's some
            code to get the current day of the week.
          </em>
        </p>
        <CodeExample>{`create Date object
const now = new Date();

// create array of days (index 0="Sunday")
const daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

// creates string using index of today
const dayOfWeek = daysOfWeek[now.getDay()]
`}</CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="11 Ternary Operator"
    ansFilename={"11-ternary-operator.js"}
    promptJSX={
      <>
        <p>
          Use a conditional statement within the ternary operator to determine
          whether the light is on. The <code>lightState</code> variable should
          be assigned a string value of "on" or "off" (not a Boolean).{" "}
          <em>Hint: See pattern below.</em>
        </p>
        <CodeExample>test ? value_if_true : value_if_false</CodeExample>
      </>
    }
  />,
]

const Lesson = () => (
  <LessonWrapper lessonId={lessonId} lessonTitle={lessonTitle} items={items} />
)

export default Lesson
