import React from 'react'
import Person from "./Person"

function PersonList() {
    const NameList = [
        {
            id: 1,
            name: "Bondhan",
            age: 25
        },
        {
            id: 2,
            name: "Bond",
            age: 2
        },
        {
            id: 3,
            name: "dhan",
            age: 5
        },
    ]

    const callByPerson = NameList.map((person)=> <Person key={person.id} person={person}/>) ;
    
    return (
        <div>
            {callByPerson}
        </div>

)
}

export default PersonList
