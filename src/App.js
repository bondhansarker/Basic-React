import React, { Component } from 'react';

//css
//import "./css/App.css";
//import cssHelper from "./css/AppModule.module.css";

// components
 import Functional from './components/Functional';
// import Classs from './components/Classs';
// import StateReact from './components/StateReact';
// import ParentComponent from './components/ParentComponent';
// import PersonList from './components/PersonList';
// import Form from './components/Form';
// import Ref from './components/Ref';
// import Portal from './components/Portal';
 import GetRequest from './components/GetRequest';
// import PostRequest from './components/PostRequest';
// import HookBasic from './components/HookBasic';
import HookObject from './components/HookObject';

class App extends Component {
  render() {

    return (
      <div className="App">
                <GetRequest awal="something"/>
         
                
                {
                
                /*
                 <h1 className={cssHelper.orange}>Css Module Check</h1>
        <HookObject person={this.state.person} ParentCall= {this.changeState} />

          <PostRequest/>
          
          <Portal/>
          <Ref/>
          
          <Classs compType="Class" />
          <StateReact />
          <ParentComponent/> 
          <PersonList /> 
        */}
      </div>
    );
  }

}

export default App;
