import { ReactNode } from "react";
import CounterButton from "./CounterButton";

type setCounterType = (anonyme : (current : number) => number) => void
const decrease : (setCounter : setCounterType) => void
               = (setCounter : setCounterType) => {
    setCounter((current : number) => current - 1)
}
interface DecreaseButtonInterface {
    setCounter : setCounterType
}

type DecreaseButtonType = (prop : DecreaseButtonInterface) => ReactNode


const DecreaseButton : DecreaseButtonType
                     = (prop : DecreaseButtonInterface) => {
    
    return ( 
        <CounterButton action={() => decrease(prop.setCounter)} children="Decrease" complements="bg-red-400 text-red-950" complementsIcon="bg-red-950 text-red-400" childrenIcon="-"/>
    )

}

export default DecreaseButton