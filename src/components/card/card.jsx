import "./card.styles.css";

const Card = ({monster}) => {
    const {id,name,email} = monster;
    return (
   <div
    className="card-container"
    key={id}
  >
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?set=set4&size=150x150`}
    ></img>
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
    )
};
export default Card;
