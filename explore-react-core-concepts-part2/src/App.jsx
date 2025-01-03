import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends';

function App() {
  function handleClick(){
    alert("Button Clicked!!!")
  }

  const ClickMe=()=>{
    alert("Button 2 Clicked!!!")
  }

  const PlusFive = (num) =>{
    alert(num+5)
  }

  return (
    <>
      <h3>React Core concept part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={ClickMe}>Click me 2</button>
      <button onClick={()=>{alert("Button 3 clicked")}}>Click me 3</button>
      <button onClick={() => PlusFive(6)}>Plus 5</button>
    </>
  )
}

export default App
