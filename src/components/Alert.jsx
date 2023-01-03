export default function Alert({ type, setShowAlert }) {
  const { title, content } = type

  const handleShowOff = () => {
    setShowAlert(false)
  }

  return (
    <div role="alert" className="absolute top-5 left-5">
      <div
        class={`${title.background} ${title.text} ${title.box} flex justify-between items-center`}
      >
        <span>{title.title}</span>
        <span className="cursor-pointer" onClick={handleShowOff}>
          &#10006;
        </span>
      </div>
      <div class={`${content.background} ${content.text} ${content.box}`}>
        <p>{content.content}</p>
      </div>
    </div>
  )
}
