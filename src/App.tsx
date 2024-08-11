import { useEffect, useState } from "react"
import DecreaseButton from "./components/CounterButtons/DecreaseButton"
import IncreaseButton from "./components/CounterButtons/IncreaseButton"
import ResetButton from "./components/CounterButtons/ResetButton"
import Screen from "./components/CounterScreen/Screen"

function App() {

  useEffect(() => {
    document.title = "Compteur"
    document.body.className = "bg-neutral-900"
  })

  const [counter, setCounter] = useState(0)
 
  return (
    <div className="w-full h-screen flex text-center justify-center items-center">
      <div>
        <Screen>{counter}</Screen>
        <div className="flex justify-center">
          <DecreaseButton setCounter={setCounter}/>
          <ResetButton setCounter={setCounter}/>
          <IncreaseButton setCounter={setCounter}/>
        </div>
      </div>
    </div>
  )
}

export default App
