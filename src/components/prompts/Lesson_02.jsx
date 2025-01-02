import React, { useState } from "react"
import { nanoid } from "nanoid"
const titlePrefix = "🎯"

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 my-2">
      <button
        className="w-full text-left p-4 focus:outline-none bg-slate-100"
        onClick={onClick}
      >
        <h2 className="text-xl font-bold">{`${titlePrefix} ${title}`}</h2>
      </button>
      {isOpen && (
        <div className="p-4">
          {React.cloneElement(children, { ...children.props, title })}
        </div>
      )}
    </div>
  )
}

const ReverseString = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Instructions:</h2>
      <p className="mb-4">
        Write a function that takes a string as input and returns the string
        reversed.
      </p>
      <div className="bg-black text-white p-2 rounded text-sm">
        <pre>
          <code>
            {`function reverseString(str) {
  // Your code here
}`}
          </code>
        </pre>
      </div>
    </div>
  )
}

const SumOfArray = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Instructions:</h2>
      <p className="mb-4">
        Write a function that takes an array of numbers and returns the sum of
        all the numbers.
      </p>
      <div className="bg-black text-white p-4 rounded">
        <pre>
          <code>
            {`function sumArray(arr) {
  // Your code here
}`}
          </code>
        </pre>
      </div>
    </div>
  )
}

const PalindromeCheck = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Instructions:</h2>
      <p className="mb-4">
        Write a function that checks if a given string is a palindrome (reads
        the same backward as forward).
      </p>
      <div className="bg-black text-white p-4 rounded">
        <pre>
          <code>
            {`function isPalindrome(str) {
  // Your code here
}`}
          </code>
        </pre>
      </div>
    </div>
  )
}

const Lesson_02 = () => {
  const [openItemId, setOpenItemId] = useState(0)

  const handleAccordionClick = (key) => {
    console.log(key)
    setOpenItemId(key === openItemId ? true : false)
  }

  const items = [
    { key: nanoid(), title: "Reverse a String", component: <ReverseString /> },
    { key: nanoid(), title: "Sum of Array", component: <SumOfArray /> },
    {
      key: nanoid(),
      title: "Palindrome Check",
      component: <PalindromeCheck />,
    },
  ]

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {items.map((item) => (
        <AccordionItem
          key={item.key}
          title={item.title}
          isOpen={item.key === openItemId}
          onClick={() => handleAccordionClick(item.key)}
        >
          {item.component}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Lesson_02
