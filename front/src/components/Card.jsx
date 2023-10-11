import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, React } from "react";
import { addFav, removeFav } from "../redux/actions";

const Card = ({id, name, image, onClose }) => {
      const dispatch = useDispatch();
      const myFavorites = useSelector((state) => state.myFavorites);
      const { pathName } = useLocation();
      const [isFav, setIsFav] = useState(false);

      const handleFavorite = () => {
      if(isFav) {
         setIsFav(false)
         dispatch(removeFav(id))
      } else{
         setIsFav(true)
         dispatch( addFav({ id, name, image, onClose }))
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
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }  
         {
            pathName !== "/favorites" 
            ? <button onClick={ () => onClose(id)}>X</button>
            : ""
         }

         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
      <img src={image} alt={name} />
      </div>
   );
}

export default Card;