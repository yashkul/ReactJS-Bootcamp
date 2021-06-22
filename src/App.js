import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: "Class Based Component"
    };
  }

  handleBtnClick = () => {
    this.setState({
      demo: "State has been changed"
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.demo}</h1>
        <h2>Click on the button to see some magic happen!</h2>
        <button onClick={this.handleBtnClick}>Click Me</button>
      </div>
    );
  }
}

export default App;