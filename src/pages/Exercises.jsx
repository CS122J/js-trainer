const Exercises = () => {
  const exercise = {
    title: "JavaScript Closures",
    description:
      "Create a function that returns another function which increments a counter.",
    example: `
            function createCounter() {
                let count = 0;
                return function() {
                    count++;
                    return count;
                };
            }

            const counter = createCounter();
            console.log(counter()); // 1
            console.log(counter()); // 2
        `,
  }

  return (
    <div>
      <h1>{exercise.title}</h1>
      <p>{exercise.description}</p>
      <pre>{exercise.example}</pre>
    </div>
  )
}

export default Exercises
