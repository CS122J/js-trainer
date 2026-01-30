import { nanoid } from "nanoid"
import { LessonWrapper, Prompt, CodeExample } from "../ui/PromptElements"

const lessonTitle = "Functions and Closures"
const lessonId = "04"

const items = [
  <Prompt
    key={nanoid(5)}
    title="01 Arcade Game Credits &mdash; A Lesson on Closures"
    ansFilename={"01-arcade-game-credits.js"}
    promptJSX={
      <>
        <p>
          <strong>Background:</strong>
          <br />
          You're developing an arcade game, and your task is to write a function
          that keeps track of how many credits a given player has left. Use the
          concept of closures to ensure that each round of gameplay will deplete
          a given player's remaining credits, continuing until the credits are
          gone and the game is over.
        </p>
        <p>
          <strong>Instructions:</strong>
          <br />
          To begin, you are given a parent function (<code>createGame</code>)
          that returns a child function (<code>playGame</code>). To simulate the
          starting of a "game" you will declare a new variable (
          <code>player1Game</code>) and assign to it the value returned from
          invoking the <code>createGame</code> function. As part of declaring
          this new game variable, you will pass the <strong>player name</strong>{" "}
          as an argument, like so:
        </p>
        <CodeExample>{`const player1Game = createGame(<strong>"Bob"</strong>);`}</CodeExample>
        <p>
          The creation of <code>player1Game</code> results in a binding to its
          own unique function&mdash;that function represents a{" "}
          <strong>closure</strong>. In other words, this newly created function,
          along with its surrounding scope, will be captured in memory for later
          use. Each time you call <code>player1Game()</code> (reminder:
          parenthesis required), it will execute <em>its own instance</em> of
          the <code>playGame</code> function. Since this function has{" "}
          <em>closure</em> over private variables like the player's name and
          credits remaining,{" "}
          <em>
            the state of one player's game is kept entirely separate from the
            state of another player's game
          </em>
          .
        </p>
        <p>
          The <code>playGame</code> function should do the following each time
          it is called:
        </p>
        <ol className="list-decimal list-inside pl-4">
          <li>Decrement the player's credit count.</li>
          <li>
            Console log the player's name and conditionally do one of the
            following:
            <ul className="list-disc list-inside pl-4">
              <li>If credits remain, then list the number of credits</li>
              <li>If no credits remain, then declare "Game Over."</li>
            </ul>
          </li>
        </ol>
        <p>
          Make multiple calls to <code>player1Game</code> and{" "}
          <code> player2Game</code> to prove that they both successfully track
          remaining credits. If your code works as expected, then making these
          function calls:
        </p>
        <CodeExample>{`player1Game();
player1Game(); 
player2Game(); 
player1Game();`}</CodeExample>
        ...will result in the following console output:
        <CodeExample>{`Bob is playing and has 2 credit(s) left!
Bob is playing and has 1 credit(s) left! 
Lily is playing and has 2 credit(s) left! 
Bob's game is over!`}</CodeExample>
        <p>
          For an extra challenge, instead of outputting each result to the
          console.log, add it to the <code>eventLog</code> variable, which is
          being returned by the <code>gameCreditsLeft</code> function. Remember
          to use the newline character (<code>\\n</code>) to separate lines.
          Your answer output should look similar to what had been your
          console.log output.
        </p>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="02 Bean Counting"
    ansFilename={"02-bean-counting.js"}
    promptJSX={
      <>
        <p>
          You can get the nth character, or letter, from a string by writing{" "}
          <code>"string"[n]</code>. The returned value will be a string
          containing only one character. For example, <code>"myString"[2]</code>{" "}
          evaluates to <code>S</code>. But why is it not <code>y</code>? Similar
          to arrays, strings have a stack data structure, and the first
          character holds position 0 ("zero-indexed"), which means the last
          character can be found at position <code>string.length - 1</code>.
          Accordingly, a two-character string has a <code>length</code> property
          value of two, and its characters have positions 0 and 1.
        </p>
        <p>
          Define a function (<code>countBs</code>) that takes a string as its
          only argument and returns a number that indicates how many uppercase
          “B” characters exist in the string.
        </p>
        <p>This statement...</p>
        <CodeExample>
          {`console.log(\`Beans (countBs): $\{countBs("BBC")\}\`)`}
        </CodeExample>
        {<p>...should produce the following console output:</p>}
        <CodeExample>Beans (countBs): 2</CodeExample>
      </>
    }
  />,
  <Prompt
    key={nanoid(5)}
    title="03 Character Counting"
    ansFilename={"03-character-counting.js"}
    promptJSX={
      <>
        <p>
          Next, write a function called <code>countChars</code> that behaves
          like <code>countBs</code>, except it takes a second argument that
          indicates the character that is to be counted (rather than counting
          only uppercase “B” characters).
        </p>
        <p>This statement...</p>
        <CodeExample>{`console.log(\`Beans (countChar): $\{countChars("kakkerlak", "k")\}\`);`}</CodeExample>
        <p>...should produce the following console output:</p>
        <CodeExample>{`Beans (countChars): 4`}</CodeExample>
      </>
    }
  />,
]

const Lesson = () => (
  <LessonWrapper lessonId={lessonId} lessonTitle={lessonTitle} items={items} />
)

export default Lesson
