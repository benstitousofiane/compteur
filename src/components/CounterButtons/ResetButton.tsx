import { ReactNode } from "react";
import CounterButton from "./CounterButton";

type setCounterType = (anonyme : () => number) => void
const reset : (setCounter : setCounterType) => void
               = (setCounter : setCounterType) => {
    setCounter(() => 0)
}

interface ResetButtonInterface {
    setCounter : setCounterType
}
type ResetButtonType = (prop : ResetButtonInterface) => ReactNode


const ResetButton : ResetButtonType
                     = (prop : ResetButtonInterface) => {
    
    return ( 
        <CounterButton action={() => reset(prop.setCounter)}children="Reset" complements="bg-blue-400 text-blue-950" complementsIcon="bg-blue-950 text-blue-400" childrenIcon="0"/>
    )

}

export default ResetButton