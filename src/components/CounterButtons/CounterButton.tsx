import { ReactNode } from "react"

interface CounterButtonInterface{
    complements? : string
    children? : ReactNode
    complementsIcon? : string
    childrenIcon? : ReactNode
    action? : () => void
}

const CounterButton : (prop : CounterButtonInterface) => ReactNode
                    = (prop : CounterButtonInterface) => {
    
    return ( 
    <button onClick={prop.action} className={`${prop.complements ? prop.complements : "bg-white text-neutral-950"} text-xl font-semibold rounded p-4 m-2 flex items-center`}>
        {prop.children} 
        <div className={`${prop.complementsIcon ? prop.complementsIcon : "bg-neutral-950 text-neutral-400"} p-2 px-4 m-2 rounded`}>
            {prop.childrenIcon}
        </div> 
    </button> )
        
}

export default CounterButton