import React from 'react'


function Person({person}) {
    return (
        <div>
            <h1 className="orange">{person.id}. My name is {person.name}. I am {person.age} years old. </h1>
        </div>

    )
}

export default Person
