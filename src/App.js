import "./App.css";
import { Component } from "react";

class App extends Component {


  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFild: ""
    };
  }



  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(apiMonsters => this.setState(
        () => {
          return { monsters: apiMonsters }
        },
        () => {
        }
      ))
  }

  onSearchChange = (e) => {
    this.setState({ searchFild: e.target.value.toLowerCase() })
  }

  render() {
    const {monsters,searchFild} = this.state
    const {onSearchChange} = this
    const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchFild))

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <input placeholder="Entre votre recherche" onChange={onSearchChange}></input>
            {
              filterMonster.map((monster => {
                return <p key={monster.name}>{monster.name}</p>
              }))}


          </div>
        </header>
      </div>
    );
  }
}

export default App;
