import React from "react";

export default function Main(){

    const [count, setCount] = React.useState(0)
    
    const IncreseCount = () => {
        return (
            setCount(prevCount => prevCount + 1),
            setCount(prevCount => prevCount + 1)
        )}
    const DecreseCount = () => {return setCount(count - 1)}
    const ResetCount = () => {return setCount(0)}

    return (

        <div className="">
            <h2><center>{count}</center></h2>
            <button className="m-3" onClick={DecreseCount}>decrese</button>
            <button className="m-3" onClick={ResetCount} >reset</button>
            <button className="m-3" onClick={IncreseCount}>increse</button>
        </div>

    )
}