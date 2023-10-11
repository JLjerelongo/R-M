import { connect } from "react-redux"
import Card from "./Card"


const Favorites = ({ myFavorites }) => {
    console.log(myFavorites);

    return (
        <>
            <h2>My Favorites</h2>
            {
                myFavorites?.map((character, index)=> {
                    return(
                        <div key={index}>
                            <Card
                                id={character.id}
                                name={character.name}
                                status={character.status}
                                origin={character.origin?.name}
                                gender={character.gender}
                                image={character.image}
                                species={character.species}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        myFavorites: state.myFavorites
    }

}

export default connect(mapStateToProps, null)(Favorites)