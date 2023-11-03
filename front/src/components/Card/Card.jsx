import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, React } from "react";
import { addFav, removeFav } from "../../redux/actions";

const Card = ({id, name, status, species, gender, origin, image, onClose }) => {
      const dispatch = useDispatch();
      const myFavorites = useSelector((state) => state.myFavorites);
      const { pathName } = useLocation();
      const [isFav, setIsFav] = useState(false);


      const handleFavorite = () => {
      const character = {id, name, status, species, gender, origin, image, onClose};
      if(isFav) {
         setIsFav(false)
         dispatch(removeFav(id))
      } else{
         setIsFav(true)
         dispatch( addFav( character ))
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

return (
   <div className="rick-and-morty-card">
     {isFav ? (
       <button onClick={handleFavorite}>❤️</button>
     ) : (
       <button onClick={handleFavorite}>🤍</button>
     )}
     {pathName !== "/favorites" ? (
       <button onClick={() => onClose(id)}>X</button>
     ) : (
       ""
     )}
     <img src={image} alt={name} />
     <div className="card-details">
       <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
       </Link>
       <p>{gender}</p>
     </div>
   </div>
 );
     }

export default Card;