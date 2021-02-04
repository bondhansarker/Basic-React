import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             about:"",
             skill:"react"

        }
    }
    
    changeName=(event)=>{
        this.setState({
            name: event.target.value
        })
    }

    submitForm=(event)=>{
         alert(`${this.state.name}
            ${this.state.about}
            ${this.state.skill}`);
        event.preventDefault();
    }
    
    render() {
        const {name,about,skill} = this.state;
        return (
            <React.Fragment>
                <form onSubmit={(event)=>this.submitForm(event)}>
                    <div>
                        <label>Name : </label>
                        <input onChange={(event)=> this.changeName(event)} type="text" value={name}></input>
                    </div>
                    <div>
                        <label>About : </label>
                        <textarea onChange={(event)=>this.setState({about: event.target.value})} type="text" value={about}></textarea>
                    </div>
                    <div>
                        <label>Skill : </label>
                        <select onChange={(event)=>this.setState({skill: event.target.value})} value={skill}>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>
                    <button type="submit" >Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Form
