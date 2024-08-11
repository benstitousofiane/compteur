import { ReactNode } from "react"

interface ScreenIntrerface{
    children? : number
}

type ScreenType = (prop : ScreenIntrerface) => ReactNode

const Screen : ScreenType
             = (prop : ScreenIntrerface) => {
    
    return (<div className="bg-orange-400 text-orange-950 text-7xl my-6 p-60 px-96 rounded-md">
        {prop.children}
    </div>)

}

export default Screen