import { nanoid } from "nanoid"
import { LessonWrapper, Prompt, CodeExample } from "../ui/PromptElements"

const lessonTitle = "Higher Order Functions"
const lessonId = "07"

const items = [
  <Prompt
    key={nanoid(5)}
    title="01 Always Thank the Customer"
    ansFilename={"01-always-thank-customer.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">
          Skill: Using objects as arguments
        </h3>
        <p>
          The <code>invoiceData</code> object represents a shipping order. We
          are passing this object to the <code>thankCustomer()</code> function
          to display a customer message in the space below. However, before this
          all works, you'll have to update the function code to access the
          appropriate properties from the incoming object. Your solution will
          replace the placeholder values with actual values. For example,
          "((CITY)), ((STATE))" will appear as "Pretendville, NY".
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="02 Congratulate the Winner"
    ansFilename={"02-congratulate-winner.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">
          Skill: Creating an object method
        </h3>
        <p>
          Write a method for the <code>gamePlay</code> object. This method will
          have a name of (<code>declareWinner</code>) and will compare the
          points of each player to determine who has the most points, then it
          will return a message string that congratulates the winner by name.
        </p>
        <p>
          <em>Hint: Remember that classic functions have their own </em>{" "}
          <code>this</code>{" "}
          <em>
            keyword, which points to the function caller. In this case, the
            function caller is the object itself.
          </em>
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="03 Fruit Picking"
    ansFilename={"03-fruit-picking.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">Skill: Destructuring an Array</h3>
        <p>
          The <code>basket</code> array holds the fruits of the Spirit (Gal. 5).
          Rewrite the declaration line for the variables named{" "}
          <code>first</code>, <code>second</code>, and <code>third</code>. Use
          the array destructuring pattern so that you are pulling only these
          values from the array into scope.
        </p>
        <p>
          <em>
            Hint: Destructuring looks like the inverse of the array creation.
            The brackets{" "}
          </em>
          <code>[]</code> <em>appear to the left of the equal sign</em> (
          <code>=</code>) <em>instead of the right.</em>
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="04 What's It Gonna Take?"
    ansFilename={"04-whats-it-gonna-take.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">
          Skill: Destructuring an Object
        </h3>
        <p>
          The <code>myCar</code> object represents the car you wish to sell. Use
          object destructuring to retrieve into scope ONLY those properties you
          want to use in your social media post. We are using a function (
          <code>createAd</code>) to construct our ad because we have many cars
          to sell and we're trying to automate the task.
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="05 And the Winner Is..."
    ansFilename={"05-winner-is.js"}
    promptJSX={
      <>
        <h3 className="text-lg font-semibold">
          Skill: Writing a Function with Object Destructuring
        </h3>
        <p>
          The <code>bestPics</code> array holds three objects that represent
          Academy Award Best Picture winners from the 1980s. Write a function (
          <code>makeAnnouncement()</code>) that takes the values from one winner
          and returns a teleprompter message to announce the award.
        </p>
        <p>
          <strong>Requirements:</strong>
        </p>
        <ol className="list-decimal list-inside">
          <li>
            Keep your announcement text short, but it must include the name of
            the <strong>award</strong>, <strong>year</strong>,{" "}
            <strong>title</strong>, and <strong>director</strong>.
          </li>
          <li>
            Use object destructuring within the function's parameter assignment,
            so that you're bringing into scope ONLY the variables you will use.
          </li>
          <li>
            Parameters should be declared individually, rather than introduced
            into the function body as an object or array. For example, we DO NOT
            want to handle the variables with dot notation (e.g.,
            <code className="text-blue-500">movie.title</code>)&mdash;we want to
            handle the variable directly (
            <code className="text-blue-500">title</code>).
          </li>
        </ol>
        <p>
          <em>
            Hint: Before getting to the properties of the winner object, you
            must first retrieve it from the{" "}
          </em>
          <code>bestPics</code>
          <em> array. You can do this with bracket </em>
          <code>[]</code>
          <em> notation. </em>
        </p>
      </>
    }
  />,
]

const Lesson = () => (
  <LessonWrapper lessonId={lessonId} lessonTitle={lessonTitle} items={items} />
)

export default Lesson
