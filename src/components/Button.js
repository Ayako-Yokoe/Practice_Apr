

const Button = ({ text, color, onClick }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
