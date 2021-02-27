class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "this will change",
      items: "",

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

    this.setState({
      items: this.state.text
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        this.state.items
      ),
      React.createElement("input", { type: "text", onChange: this.handleChange, name: "enter" }),
      React.createElement(
        "button",
        { onClick: this.handleClick },
        "click"
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

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));