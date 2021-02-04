import React,{useState} from 'react'

function HookObject(props) {
    
    const changeName=(event)=>{
        setPerson({...personState,[event.target.name]: event.target.value})
    }

    const [personState,setPerson] = useState(props.person)

    return (
        <div>
            <input type="text" value={personState.first} name="first" onChange={event=>changeName(event)}/> <br/>   
            <input type="text" value={personState.last} name="last" onChange={event=>changeName(event)}/> <br/>   
            <button onClick={()=>props.ParentCall(personState)}>Change</button> <br/>   
            {props.person.first && <h2>Your first name is {props.person.first}</h2>}
            {props.person.last &&<h2>Your last name is {props.person.last}</h2>}
        </div>
    )
}

export default HookObject
