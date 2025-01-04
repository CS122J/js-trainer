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
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  )
}

export default AccordionItem
