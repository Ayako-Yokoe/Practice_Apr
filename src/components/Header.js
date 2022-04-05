import Button from "./Button"

const Header = ({ title }) => {
    const onClick = () => {
        console.log("Click")
    }

  return (
    <div>
      <h1>{title}</h1>
      <Button text="Add" color="green" onClick={onClick} />
    </div>
  )
}

export default Header
