import React from "react";
import "./App.css";

function Home(props) {
  return (
    <section>
      <h1>home sweet home</h1>
      <button onClick={props.gotoAbout}>go to About</button>
    </section>
  );
}

function About() {
  return (
    <section>
      <h1>about legend</h1>
      <p>this is about ...</p>
    </section>
  );
}

function Dodate() {
  return (
    <section>
      <h1>donate</h1>
      <p>how much donate &copy; 2020</p>
    </section>
  );
}

class App extends React.Component {
  state = { view: "home" };

  gotoAbout = () => {
    this.setState({
      view: "about"
    });
  };
  renderView = () => {
    // switch like if else function
    switch (this.state.view) {
      case "home":
        return <Home gotoAbout={this.gotoAbout} />;
      case "about":
        return <About />;
      case "donate":
        return <Dodate />;
      default:
        return <Home />;
    }
  };
  render() {
    return (
      <div className="App">
        {/* <Home />
        <About />
        <Dodate /> */}
        {/* <button onClick={this.gotoAbout}>about</button> */}
        {this.renderView()}
      </div>
    );
  }
}

export default App;
