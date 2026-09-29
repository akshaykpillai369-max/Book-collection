import React from "react"

export default function Button(){

    const [isClicked , setIsClicked] = React.useState(false)
    const HandleClick = () => {
        
        setIsClicked(!isClicked)
    }

    return <button onClick={HandleClick}>{ isClicked ? "OOUCH!😶": "Click me🙂"}</button>
}