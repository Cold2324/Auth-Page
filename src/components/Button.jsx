export default function Button({ className, text, onClick, showSpin }) {
  return (
    <>
      {!showSpin ? (
        <button
          className={`bg-green-300 rounded-lg ${className}`}
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <button
          className={`bg-green-300 rounded-lg ${className} flex items-center justify-center`}
        >
          <div className="lds-dual-ring"></div>
        </button>
      )}
    </>
  )
}
