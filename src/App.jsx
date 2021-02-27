class App extends React.Component{
  constructor(props){
  super(props)
  this.state ={
  text :"this will change",
  items : "",
  
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
  
      this.setState({
        items: this.state.text
      })
    
    }
    
  render(){
    return (<div>
      <h1>{this.state.items}</h1>
     <input type = "text"   onChange={this.handleChange } name="enter" />
      <button onClick={this.handleClick}>click</ button>
        <p> {this.state.apiResponse} </p>
        
      </div>)
  }
  
  }
  
  ReactDOM.render(<App />, document.getElementById('root') );
  
  
  
  
  
  
  