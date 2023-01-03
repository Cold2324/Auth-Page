export default function Button({ className, text, onClick }) {
  return (
    <button
      className={`bg-green-300 rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
