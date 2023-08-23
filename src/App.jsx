import { useState } from 'react'
import users from './service/data.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {users.data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <img src={user.image} alt={user.name} />
        </div>
      ))}
    </>
  )
}

export default App
