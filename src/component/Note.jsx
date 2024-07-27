import { useState } from "react"
import Form from "./Form"

function Note (){

    
const [isOpen, SetItOpen] = useState (false)

const handleIsOpen = () => {
    SetItOpen(true)
}

const colseMenu = ()=> {
    SetItOpen(false)
}

    return <div>
        <div className="bg-blue-500 p-6 flex justify-between">
        <h1 className="text-4xl font-bold text-white">Nooty</h1>
        <button onClick={handleIsOpen} className=" rounded-lg  w-[150px] text-white h-[50px] bg-yellow-500">Add note</button>

    </div>
    {
        isOpen == true?  <Form close={colseMenu}/> : ""
    }

    </div>
    
}



export default Note