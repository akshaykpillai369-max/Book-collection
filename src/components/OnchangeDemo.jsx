import React from "react";

export default function Changer(){

    const [text, setText] = React.useState("Guest")

    const UpdateName = (e) => { return setText(e.target.value) }

    return(
         <div>
        <input type="text" placeholder="enter your name" onChange={UpdateName} />
        <br />
        <br />
        <p>Name : {text}</p>
        </div>
    )
}