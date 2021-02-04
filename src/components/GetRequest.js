import React, { Component } from 'react'
import axios from "axios"

class GetRequest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: false
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            this.setState({posts: response.data})
            console.log(response)
        })
        .catch(error=>{
            this.setState({error:true})
        })
    }
    
    render(props) {
        const {posts} = this.state
        return (
            <div>
                <h1>List of Expenses {this.props.awal} </h1>

                {
                    posts.length?
                     
                    posts.map((post)=> <div key={post.id}> {post.title}  </div>)
                    :null
                    
                }
            </div>
        )
    }
}

export default GetRequest
