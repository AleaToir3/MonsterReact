import "./card-list.styles.css";
import Card from "../card/card";

const CardList = ({ filterMonster }) => {
  return (
  <div className="card-list">
    {filterMonster.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
  )
};

export default CardList;
