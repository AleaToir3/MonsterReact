import { Component } from "react";
import './card-list.styles.css'
import Card from '../card/card'

class CardList extends Component {
    
 

    render(){
       const {filterMonster} =  this.props
       console.log(filterMonster);
       return (     
        <div className="card-list"> 
        {filterMonster.map((monster) => {
            
            return (
            <Card monster={monster}/>
                );
            })}
        </div>        
        )
    }
}
export default CardList;


 