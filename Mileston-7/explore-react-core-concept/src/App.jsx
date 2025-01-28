import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singer'

function App() {
  // const [count, setCount] = useState(0)
  const actors = ['Sakib','Shoriful Raj','Jasim','Rubel','Salam Shah']
  const singers = [
    {name:'Dr. Mahfuzur Rahman',age:68},
    {name:'Eva Rahman',age:38},
    {name:'Shuvro Dev',age:59},
    {name:'Pritom',age:27},
  ]
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }

      <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo task='Learn React' isDone={false}></Todo>
      <Todo task='Core concept' isDone={false}></Todo>
      <Todo task='Try jsx' isDone={true}></Todo> */}

      {/* <Device name='Laptop' price='30000'></Device>
      <Device name='Mobile' price='25000'></Device>
      <Device name='Watch' price='3000'></Device>
      <Device name='Camera' price='21000'></Device>
      <Person></Person>
      <Student grade='6' score='375'></Student>
      <Student grade='7' score='242'></Student>
      <Student ></Student>
      <Student grade='8' score='543'></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  return <div>This device: {props.name}, price:{props.price}</div>
}

function Person(){
    const age = 21;
    const money = 20;
    const person = {"name":"Rakib","age":"25"};
    return <h3>I am {person.name} age: {age+money}</h3>
}

function Student({grade=1,score=0}){
  return (
    <div className='student'>
      <h3>I am a Student.</h3>
      <p>Class: {grade} </p>
      <p>Marks: {score}</p>
    </div>
  )
}

function Developer(){
  const developerSytyle = {
    border:'2px solid purple',
    padding: '50px',
    borderRadius: '10px',
    margin: '20px',
  }
  return (
    <div style={developerSytyle}>
      <h3>Devo devo</h3>
      <p>coding:</p>
    </div>
  )
}

export default App
