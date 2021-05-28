import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Frankenstein", id: "qwe" },
        { name: "Dracula", id: "asd" },
        { name: "Zombie", id: "zxc" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
