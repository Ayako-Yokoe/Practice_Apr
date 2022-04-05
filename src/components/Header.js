import Button from "./Button"

const Header = ({ title, onShow, showBtn }) => {
  return (
    <div className="headerContainer">
      <h1>{title}</h1>
      <Button 
        text={showBtn ? "Close" : "Add"} 
        color={showBtn ? "red" : "green"} 
        onClick={onShow} />
    </div>
  )
}

export default Header
