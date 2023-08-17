import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
export default function Nav ({onSearch}) {
    
    
    return (
      <div>
        <Link to={'/about'} >
          <button>About</button>
        </Link>
        <Link to={'/home'}>
          <button>Home</button>
        </Link>
        <Link to={'/favorites'}>
          <button>Favorites</button>
        </Link>
        <SearchBar onSearch={onSearch} />
      </div>
    );
}