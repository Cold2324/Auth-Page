export default function Input({ type, placeholder, onChange }) {
  return (
    <input
      className="outline-none p-3 border rounded-md border-gray-200"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
