import { connect } from "react-redux";
import Card from "./Card/Card";
import { filterCards, orderCards } from "../redux/actions";
import { useDispatch } from "react-redux";
import React from "react";


const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = React.useState(false);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className="favorites-container">
      <h2>My Favorites</h2>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      {!myFavorites.length ? (
        <p className="empty-favorites-message">
          Welcome to your Favorites List. Create a curated collection of your
          favorite characters here.
        </p>
      ) : (
        <div className="card-list">
          {myFavorites.map((character, index) => (
            <Card
              key={index}
              id={character.id}
              name={character.name}
              status={character.status}
              origin={character.origin?.name}
              gender={character.gender}
              image={character.image}
              species={character.species}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);