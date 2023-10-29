import React from "react";
import {Link} from "react-router-dom";
import {ImSearch} from "react-icons/im"
const Header = () => {
    return (<nav className="header">

     <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="netflix logo" />
<div>
    <Link to="/tvshows">TV Shows</Link>
    <Link to="/tvshows">Movies</Link>
    <Link to="/tvshows">Recently Added</Link>
    <Link to="/tvshows">My List</Link>
</div>
<ImSearch />
    </nav>);
};
export default Header;