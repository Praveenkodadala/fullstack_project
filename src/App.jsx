import React from "react";
import ReactDOM from "react-dom"
import {NavBar} from './NavBar'


class ProfilePage extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      
      text:"",
      items : [],
    apiResponse: ""
    
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleClick =  this.handleClick.bind(this)
    }
  
  
    callAPI() {
      fetch("http://localhost:3000/testapi")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
      this.callAPI();
  }
  
    
      handleChange(e){
        this.setState({
          text : e.target.value
        })
      }
  
      handleClick(){
        const newItem = {
          text : this.state.text
        } 
  
        this.setState(state=>({
          items: state.items.concat(newItem)
        }))
      
    }


  render() {
    return (
      <div>
 <NavBar />

 <h1>Todo List</h1>
      <ul>
        {this.state.items.map(item => (
          <li >{item.text}</li>
        ))}
      </ul>      
     <input type = "text"   onChange={this.handleChange } />
     <button onClick = {this.handleClick}>Add {this.state.items.length + 1}</button>
        <p> {this.state.apiResponse} </p>
        
      </div>



    );
  }
}

ReactDOM.render(< ProfilePage/>, document.getElementById("root"))