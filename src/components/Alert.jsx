export default function Alert({ type, setShowAlert, eMessage = '' }) {
  const { title, content } = type

  const handleShowOff = () => {
    setShowAlert(false)
  }

  return (
    <div role="alert" className="absolute top-5 left-5">
      <div
        className={`${title.background} ${title.text} ${title.box} flex justify-between items-center`}
      >
        <span>{title.title}</span>
        <button className="cursor-pointer" onClick={handleShowOff}>
          &#10006;
        </button>
      </div>
      <div className={`${content.background} ${content.text} ${content.box}`}>
        <p>{eMessage !== '' ? eMessage : content.content}</p>
      </div>
    </div>
  )
}
