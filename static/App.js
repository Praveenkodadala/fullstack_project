import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      completionstatus: "Hello",
      apiResponse: "check"

    };

    this.postDataToServer = this.postDataToServer.bind(this);
  }

  callAPI() {
    fetch("http://localhost:3000/api/users").then(res => res.text()).then(res => this.setState({ apiResponse: res }));
  }

  componentDidUpdate() {
    this.callAPI();
  }

  postDataToServer() {

    axios.post('http://localhost:3000/api/users?docVersionNumber=' + document.getElementById('number').value + "&reasonsForChange=" + document.getElementById('reason').value + '&changeRequestApprovedBy=' + document.getElementById('approved').value + '&dateOfChagneRequest' + document.getElementById('date').value + "&proposedChange=" + document.getElementById('proposed').value + "&existingSystem=" + document.getElementById('existing').value).then(response => {
      console.log(response);
      this.setState({ completionstatus: response.data });
    }).catch(err => {
      this.setState({
        completionstatus: "Oparation failue"
      });
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "SIC Control"
      ),
      "Current Document version Number: ",
      React.createElement("input", { type: "text", id: "number" }),
      React.createElement("br", null),
      "Reason(s) for Change : ",
      React.createElement("input", { type: "text", id: "reason" }),
      React.createElement("br", null),
      "Change request approved by: ",
      React.createElement("input", { type: "text", id: "approved" }),
      React.createElement("br", null),
      "Date of change request : ",
      React.createElement("input", { type: "text", id: "date" }),
      React.createElement("br", null),
      "Proposed change : ",
      React.createElement("input", { type: "text", id: "proposed" }),
      React.createElement("br", null),
      "existingSystem : ",
      React.createElement("input", { type: "text", id: "existing" }),
      React.createElement("br", null),
      React.createElement(
        "button",
        { onClick: this.postDataToServer },
        "Post Data"
      ),
      React.createElement(
        "span",
        null,
        this.state.completionstatus
      ),
      React.createElement("br", null),
      React.createElement(
        "p",
        null,
        " ",
        this.state.apiResponse,
        " "
      )
    );
  }
}

ReactDOM.render(React.createElement(ProfilePage, null), document.getElementById("root"));