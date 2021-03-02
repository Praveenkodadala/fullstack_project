import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from './NavBar';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      text: "",
      items: [],
      apiResponse: ""

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  callAPI() {
    fetch("http://localhost:3000/testapi").then(res => res.text()).then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleClick() {
    const newItem = {
      text: this.state.text
    };

    this.setState(state => ({
      items: state.items.concat(newItem)
    }));
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(NavBar, null),
      React.createElement(
        "h1",
        null,
        "Todo List"
      ),
      React.createElement(
        "ul",
        null,
        this.state.items.map(item => React.createElement(
          "li",
          null,
          item.text
        ))
      ),
      React.createElement("input", { type: "text", onChange: this.handleChange }),
      React.createElement(
        "button",
        { onClick: this.handleClick },
        "Add ",
        this.state.items.length + 1
      ),
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