import Test from './Test.jsx'

// {username} -> evaluated expression
// in return we have to write evaluated expression

function App() {
  const username = "Isagi Yoichi"

  return (
    <>
      <h1>Hello Egoist ! {username}</h1>
      <Test />
    </>
  )
}

export default App
