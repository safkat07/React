import { useState } from "react"

export default function Counter(){
    const [Count, setCount] = useState(0)
    console.log(Count, setCount);
    const handleAdd = () =>{
         const newCount = Count+1
         setCount(newCount)
    }
    const handleReduce = ()=>{
        const newCount = Count-1 
        setCount(newCount)
    }
    return(
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter:{Count} </h3>
            <button onClick={handleAdd}>Add Button </button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}