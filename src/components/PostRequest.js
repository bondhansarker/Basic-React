import React, { Component } from 'react'
import axios from 'axios';

class PostRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:"",
             title: "",
             body: "",
             status: ""
        }
    }

    submitForm=(event)=>{
       event.preventDefault();
       console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>{
            this.setState({status: response.status})
        })
        .catch(error=>{
            
        })
   }
   
    
    render() {
        const {userId,title,body,status} = this.state
        return (
            
             (status !== 201) ? 
                <div>
                    <form onSubmit={(event)=>this.submitForm(event)}>
                        <div>
                            <label>User id : </label>
                            <input onChange={(event)=> this.setState({userId: event.target.value})} type="text" value={userId}></input>
                        </div>
                        <div>
                            <label>Title : </label>
                            <input onChange={(event)=>this.setState({title: event.target.value})} type="text" value={title}></input>
                        </div>

                        <div>
                            <label>Body : </label>
                            <input onChange={(event)=>this.setState({body: event.target.value})} type="text" value={body}></input>
                        </div>
                    
                        <button type="submit" >Submit</button>
                    </form>   
                </div>
            : 
            <div>
                <h1> Data has been added successfully !</h1>    
            </div>

        )
    }
}

export default PostRequest
