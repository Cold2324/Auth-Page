export default function Input({ type, placeholder }) {
  return (
    <input
      className="outline-none p-3 border rounded-md border-gray-200"
      type={type}
      placeholder={placeholder}
    />
  )
}
