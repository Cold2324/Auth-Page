export default function Button({ className, text }) {
  return (
    <button className={`bg-green-300 rounded-lg ${className}`}>{text}</button>
  )
}
