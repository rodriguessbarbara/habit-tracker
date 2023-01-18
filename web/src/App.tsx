import { Habit } from "./components/Habit"

function App() {

  return (
    <div>
      <h1>Hello World!</h1>
      <Habit completed={3}/>
      <Habit completed={10}/>
      <Habit completed={2}/>
      <Habit completed={5}/>

    </div>
  )
}

export default App
