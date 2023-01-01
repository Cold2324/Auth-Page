export default function Successful({ message = '' }) {
  return (
    <section className="w-[1000px] flex items-center justify-center">
      <p className="font-bold text-4xl">{`${message} successful`}</p>
    </section>
  )
}
