import { useState } from 'react'
import './App.css'
import Posts from './Posts'
import Post from './Post'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React core concept recap</h3>
      <ol>
        <li>Component</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Posts></Posts>
      {/* <Post></Post> */}
    </>
  )
}

export default App
