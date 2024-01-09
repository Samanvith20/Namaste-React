import { useState } from "react"

const User= (props)=>{
    const[count]=useState(0);
    const[count2]=useState(2)
     return(
        <div className="user-details">
        <h1>My name is {props.name}</h1>
        <h2>count:{count}</h2>
        <h2>count:{count2}</h2>
        <h2>Iam a student </h2>
        </div>
     )
}
export default User