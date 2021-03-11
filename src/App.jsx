import React from "react";
import ReactDOM from "react-dom"
import axios from "axios";


class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      completionstatus: "Hello",
      apiResponse: "check",

    }

   
    this.postDataToServer = this.postDataToServer.bind(this)

  }


  callAPI() {
     fetch("http://localhost:3000/api/users")
     .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidUpdate() {
    this.callAPI();
  }

  postDataToServer(){
        
    axios.post('http://localhost:3000/api/users?docVersionNumber='+document.getElementById('number').value+"&reasonsForChange="+document.getElementById('reason').value+'&changeRequestApprovedBy='+document.getElementById('approved').value+'&dateOfChagneRequest'+document.getElementById('date').value+"&proposedChange="+document.getElementById('proposed').value+"&existingSystem="+document.getElementById('existing').value)
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
        <h1>SIC Control</h1>


Current Document version Number: <input type = "text" id="number"></input>
<br />
Reason(s) for Change : <input type = "text" id = "reason"></input>
<br />
Change request approved by: <input type = "text" id="approved" ></input>
<br />
Date of change request : <input type = "text" id= "date"></input>
<br />
Proposed change : <input type = "text" id="proposed"></input>
<br / >
existingSystem : <input type = "text" id="existing"></input>
<br />
<button onClick={this.postDataToServer}>Post Data</button>
<span>{this.state.completionstatus}</span>
<br/>
<p> {this.state.apiResponse} </p>

      </div>

    );
  }
}

ReactDOM.render(< ProfilePage />, document.getElementById("root"))