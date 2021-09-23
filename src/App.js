import "./App.css";
import Header from "./components/Header";
import Routes from "./config/Routes";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
