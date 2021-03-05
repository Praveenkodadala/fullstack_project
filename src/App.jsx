import React from "react";
import ReactDOM from "react-dom"
import { NavBar } from './NavBar'
import axios from "axios";



class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      text: "",
      items: [],
      apiResponse: "",
      completionstatus: "Hello",

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.postDataToServer = this.postDataToServer.bind(this)

  }


  callAPI() {
    fetch("http://localhost:3000/testapi")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }


  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleClick() {
    const newItem = {
      text: this.state.text
    }

    this.setState(state => ({
      items: state.items.concat(newItem)
    }))

  }


  postDataToServer(){
        
    axios.post('http://localhost:3000/api/user?name='+document.getElementById('name').value+ 
    "&gender="+document.getElementById('gender').value)
    .then(response=>{
        this.setState({completionstatus : response.data})
    })

    .catch((err)=>{
        this.setState({
            completionstatus : "Oparation failue"
        })
    })

}




  render() {
    return (
      <div>

        <NavBar />
        <br />
        
        <h1>Todo List</h1>
        <ul>
          {this.state.items.map(item => (
            <li >{item.text}</li>
          ))}
        </ul>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add {this.state.items.length + 1}</button>
        <p> {this.state.apiResponse} </p>

        <br />

        Enter the name<input type="text" id="name"></input>
            Enter the gender<input type="text" id="gender"></input>
        <br />
        <button onClick={this.postDataToServer}>Post Data</button>
        <span>{this.state.completionstatus}</span>




      </div>




    );
  }
}

ReactDOM.render(< ProfilePage />, document.getElementById("root"))