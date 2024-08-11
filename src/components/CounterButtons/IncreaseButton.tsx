import { ReactNode } from "react";
import CounterButton from "./CounterButton";

type setCounterType = (anonyme : (current : number) => number) => void
const increase : (setCounter : setCounterType) => void
               = (setCounter : setCounterType) => {
    setCounter((current : number) => current + 1)
}

interface IncreaseButtonInterface {
    setCounter : setCounterType
}
type IncreaseButtonType = (prop : IncreaseButtonInterface) => ReactNode


const IncreaseButton : IncreaseButtonType
                     = (prop : IncreaseButtonInterface) => {
    
    return ( 
        <CounterButton action={() => increase(prop.setCounter)} children="Increase" complements="bg-green-400 text-green-950" complementsIcon="bg-green-950 text-green-400" childrenIcon="+"/>
    )

}

export default IncreaseButton