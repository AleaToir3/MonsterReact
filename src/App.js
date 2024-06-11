import "./App.css";
import { Component, useState } from "react";
import CardList from "./components/cardList/cardList.components"
import SearchBox from "./components/searchBox/search-box.component";

 

// const App = () => {
//   console.log("render !");
//   const [usea,setA] = useState('a')
//   const onSearchChange = (e) => {
//        setA(e.target.value.toLowerCase())
//       }
//   return (
//     <>
//     <h1> hello </h1>
//     <SearchBox onChangeHandler={onSearchChange}/>
//     </>
//   )
// }


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
      <h1 className="app-title">💘 CAT APP FOR MY DAUGHTER 💖</h1>
        <header className="App-header">
          <SearchBox onChangeHandler={onSearchChange} placeholder = "Search Monster" className="search-box"/>
          <CardList filterMonster = {filterMonster} />
        </header>
      </div>
    );
  }
}

export default App;


