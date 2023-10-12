import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) =>{
    return(
        <div className="navbar">
            <SearchBar onSearch={onSearch} className="search-bar" />
            <button>
                <Link to="/about">About</Link>
            </button>
            <button>
                <Link to="/home">Home</Link>
            </button>
            <button>
                <Link to="/favorites">Favorites</Link>
            </button>
        </div>
    )
}

export default Nav;