import React from "react";
import ReactDOM from "react-dom"
import { NavBar } from './NavBar'
import axios from "axios";



class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    
      completionstatus: "Hello",

    }

   
    this.postDataToServer = this.postDataToServer.bind(this)

  }

  postDataToServer(){
        
    axios.post('http://localhost:3000/api/users?name='+document.getElementById('name').value+"&gender="+document.getElementById('gender').value)
    .then(response=>{
      console.log(response)
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

        Enter the name<input type="text" id="name"></input>
        <br />
            Enter the gender<input type="text" id="gender"></input>
        <br />
        <button onClick={this.postDataToServer}>Post Data</button>
        <span>{this.state.completionstatus}</span>

      </div>

    );
  }
}

ReactDOM.render(< ProfilePage />, document.getElementById("root"))