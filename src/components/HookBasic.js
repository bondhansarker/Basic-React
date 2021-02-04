import React,{useState} from 'react'

function HookBasic() {
    
    const [count, setCount] = useState(0 )

    return (
        <div>
            <button onClick={()=>setCount(prevCount=> prevCount+1)}>count {count}</button>
        </div>
    )
}

export default HookBasic
