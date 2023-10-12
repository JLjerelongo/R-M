// import Card from '../Card/Card';

// const Cards = ({characters, onClose}) => {
//    return(
//    <div>
//       {characters.map( (character) => {
//          return <div className="cards">
//                      <Card
//                         id = {character.id}
//                         key = {character.id}
//                         name = {character.name}
//                         status={character.status}
//                         species={character.species}
//                         gender={character.gender}
//                         origin={character.origin.name}
//                         image={character.image}
//                         onClose={onClose} />
//                </div>
//       })}
//    </div>
//    )
// }

// export default Cards;
import Card from '../Card/Card';

const Cards = ({ characters, onClose }) => {
  return (
    <div className="cards-container">
      {characters.map((character) => (
        <Card
          id={character.id}
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
};

export default Cards;