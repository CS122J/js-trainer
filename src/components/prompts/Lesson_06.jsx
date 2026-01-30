import { nanoid } from "nanoid"
import { LessonWrapper, Prompt, CodeExample } from "../ui/PromptElements"

const lessonTitle = "Array Methods"
const lessonId = "06"

const items = [
  <Prompt
    key={nanoid(5)}
    title='01 There is No "i" in Team'
    ansFilename={"01-no-i-in-team.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">
          <code>.forEach Method</code>
        </h3>
        <p>
          You've been given an array with team names from Major League
          Baseball's National League West. Use the <code>.forEach()</code>{" "}
          method on that array to do the following:
        </p>
        <ol className="list-decimal list-inside">
          <li>
            Check to see if the name has the letter "i" in it. You can use the
            String.includes() method to get a Boolean:{" "}
            <code className="text-blue-500">myString.includes("i")</code>
          </li>
          <li>
            Log to the console only the team names that have no "i" in them.
          </li>
        </ol>
        <p className="italic">
          NOTE: Be sure to use a callback with the arrow function pattern (
          <code>()=&gt;</code>) within the <code>.forEach()</code> method.
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="02 Apply a Promotional Discount"
    ansFilename={"02-apply-promo-discount.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">
          <code>Array.map Method</code>
        </h3>
        <p>
          You have been given an array (<code>sales</code>) with the amounts for
          customer purchase orders. Apply a 15% discount for purchases of $100
          or more. Use the <code>.map()</code> method on that array to do the
          following:
        </p>
        <ol className="list-decimal list-inside">
          <li>
            Create a new array named{" "}
            <code className="text-blue-500">discounted</code>.
          </li>
          <li>
            For each sale of <strong>$100 or more</strong>, subtract 15% of the
            total purchase amount to get the final sales price.
          </li>
          <li>
            Apply the global <code className="text-blue-500">Number()</code>{" "}
            function in conjunction with the{" "}
            <code className="text-blue-500">.toFixed()</code> method to limit
            number values to two decimals.
            <CodeExample>Number(myNum.toFixed(2))</CodeExample>
          </li>
          <li>
            Return the new array (
            <code className="text-blue-500">discounted</code>).
          </li>
        </ol>
        <p>
          You should get the following after applying the discounts to
          qualifying purchases:
        </p>
        <CodeExample>{`[
  75.98,
  882.8,
  12.6,
  212.5,
  720.04,
  406.44,
  89.98
]`}</CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="03 Failure is Not an Option"
    ansFilename={"03-failure-not-an-option.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">
          <code>Array.filter() Method</code>
        </h3>
        <p>
          You have been given three imaginary quiz score arrays:{" "}
          <code>bobScores</code>, <code>maryScores</code>, and{" "}
          <code>juanScores</code>. The instructor does not accept failure, so
          students must re-take any quiz whose score is lower than 60. (
          <em>Not really, but let's play along!</em>)
        </p>
        <ol className="list-decimal list-inside">
          <li>
            Write a function (<code className="text-blue-500">noFails()</code>)
            that uses the <code className="text-blue-500">.filter()</code>{" "}
            method to return a new array containing only scores that are at
            least 60 points.
          </li>
          <li>
            For each student, call the{" "}
            <code className="text-blue-500">noFails()</code> function, passing
            the array as its argument and writing the resulting array to the
            console.
          </li>
        </ol>
        <p className="italic">
          NOTE: You can try to write a concise one-line callback function by
          using arrow syntax. You can use truthy and falsy values to return a
          Boolean for each item.
        </p>
        <p>Your results should look like this:</p>
        <CodeExample>{`Bob ▶ (8) [90, 85, 62, 71, 86, 100, 92, 75]
Mary ▶ (5) [65, 92, 78, 62, 92]
Juan ▶ (7) [86, 72, 91, 99, 85, 75, 88]`}</CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="04 Semester GPA"
    ansFilename={"04-semester-gpa.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">
          <code>Array.reduce() Method</code>
        </h3>
        <p>
          You have been given three arrays, representing semester grade points
          for your imaginary students: <code>bobGrades</code>,{" "}
          <code>maryGrades</code>, and <code>juanGrades</code>. Your task is to
          calculate the semester GPA by using the <code>.reduce</code> method.
        </p>
        <p className="italic">
          NOTE: Grade point values are normally weighted by units, but we'll
          ignore that for the purposes of this exercise.
        </p>
        <ol className="list-decimal list-inside">
          <li>
            Write a function (<code className="text-blue-500">getGPA()</code>)
            that uses the <code className="text-blue-500">.reduce()</code>{" "}
            method to determine the sum of values in the array.
          </li>
          <li>
            The <code className="text-blue-500">calcGPA()</code> function should
            also calculate the average by taking the sum and dividing it by the
            number of grades in the array. (Hint: You can use the{" "}
            <code className="text-blue-500">Array.length</code> property.)
          </li>
          <li>
            For each student, call the{" "}
            <code className="text-blue-500">calcGPA()</code> function, passing
            the array as its argument and returning the GPA.
          </li>
          <li>
            Apply the <code className="text-blue-500">Number</code> function in
            conjunction with the{" "}
            <code className="text-blue-500">.toFixed()</code> method to each GPA
            value, so that the console displays only three decimal places.
          </li>
          <li>
            Return either a string or an object that provides the name and GPA
            for each student. If using a string, remember to separate lines with
            a newline character (<code className="text-blue-500">\n</code>).
          </li>
        </ol>
        <p>You should get the following results:</p>
        <CodeExample>{`Bob: 2.883
Mary: 3.383
Juan: 2.783`}</CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="05 Find the Troll"
    ansFilename={"05-find-the-troll.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">
          <code>Array.find() Method</code>
        </h3>
        <p>
          A jokester has been trolling your social media channels! The
          authorities said, "We can't give you the name, but we can give the IP
          address of the perpetrator, as well as some user log data." Your task
          is to use the <code>Array.find</code> method to search the log for the
          matching IP address (<code>83.86.11.184</code>) and online status of{" "}
          <code>true</code>.
        </p>
        <p>
          You will write a separate function (<code>findTroll()</code>) to
          handle the interrogation of each log entry object. This function will
          return a Boolean to indicate whether both conditions are met:
        </p>
        <ol className="list-decimal list-inside">
          <li>The IP address matches the suspect IP address</li>
          <li>The user was online at the time of the prank.</li>
        </ol>
        <p className="italic">
          NOTE: Use dot notation to access the relevant values. For example:{" "}
          <code className="not-italic">user.online === true</code>.
        </p>
        <p>
          Having developed your function logic, you can include the function
          name as a callback in the array method, like so:{" "}
          <code>logData.find(findTroll)</code>.
        </p>
        <p>
          Only one user matches the criteria, so once you find a matching user,
          return it as the function answer. (Spoiler alert: Marge did it.)
        </p>
      </>
    }
  />,
]

const Lesson = () => (
  <LessonWrapper lessonId={lessonId} lessonTitle={lessonTitle} items={items} />
)

export default Lesson
