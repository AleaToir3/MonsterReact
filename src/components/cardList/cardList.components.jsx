import { Component } from "react";

class CardList extends Component {
    


    render(){
       const {filterMonster} =  this.props
       return (             
        filterMonster.map((monster => {
            return <p key={monster.id}>{monster.name}</p>
          }))
         )
    }
}
export default CardList;


 