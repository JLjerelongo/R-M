import Card from '../Card/Card';

function Cards({characters, onClose}) {
   return <div className="cards-container">
      {characters.map(({id, name, status, species, gender, origin, image}) => {
         return <Card
         key= {id} //el método map necesita un index, pero como tenemos el id de los pjs no es necesario el index. Al hacer el map estamos renderizando info diferente cada vez, y ésta debe ser única para REACT, por lo q la key es un identificador de cada info.
         id = {id}
         name = {name}
         status = {status}
         species = {species}
         gender = {gender}
         origin = {origin.name}
         image = {image}
         onClose = {onClose}
         />
      })}
   </div>;
}

export default Cards