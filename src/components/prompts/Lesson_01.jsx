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

const ReverseString = (props) => {
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

const SumOfArray = (props) => {
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

const PalindromeCheck = (props) => {
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

const Lesson_01 = () => {
  const [openKey, setOpenKey] = useState(null)

  const handleAccordionClick = (key) => {
    setOpenKey(openKey === key ? null : key)
  }

  const items = [
    { key: nanoid(), title: "Try New Stuff", component: <ReverseString /> },
    { key: nanoid(), title: "Give it a Shot", component: <SumOfArray /> },
    {
      key: nanoid(),
      title: "Fake it Till You Make It",
      component: <PalindromeCheck />,
    },
  ]

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {items.map((item) => (
        <AccordionItem
          key={item.key}
          title={item.title}
          isOpen={openKey === item.key}
          onClick={() => handleAccordionClick(item.key)}
        >
          {item.component}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Lesson_01
