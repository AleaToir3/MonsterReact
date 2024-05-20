 import "./App.css";
import { Component } from "react";

class App extends Component {
 

    constructor() {
      super();
      this.state = {
        monsters:[],
        searchFild : ""
       };
   }
 


  componentDidMount() {
  
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(apiMonsters => this.setState(
      ()=>{
        return {monsters : apiMonsters}
      },
      ()=>{
       }
    ))
  }
  
  render() {
     const filterMonster = this.state.monsters.filter( monster =>monster.name.toLowerCase().includes(this.state.searchFild))
    console.log(this.state.searchFild)
       return (
      <div className="App">
        <header className="App-header">
        <div>
                <input placeholder="Entre votre recherche" onChange={(e)=>{  
                  this.setState({searchFild : e.target.value.toLowerCase()})

                 }}></input> 
                 {  
                  filterMonster.map((monster =>{
                  return <p key={monster.name}>{monster.name}</p>
                }))}
                

        </div>
        </header>
      </div>
    );
  }
}
 
export default App;
