import { useContext } from "react";
import {NavLink} from "react-router-dom";
import { userContext } from "../../App";

const NavBar = () => {

    const {token} = useContext(userContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavLink className='nav-link' to={'/'}>Accueil</NavLink>
            </li>
            {
                token !== ''
                ? <div className="form-inline my-2 my-lg-0">
                    <li className="nav-item active">
                        <NavLink className='nav-link' to={'/group'}>Groupe</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className='nav-link' to={'/'}>Comment être beau</NavLink>
                    </li>
                </div>
                : ''
            }
            </ul>
            {
                token !== ''
                ? <div className="form-inline my-2 my-lg-0">
                <NavLink className='btn btn-danger' to={'/logout'}>Se déconnecter</NavLink>
                </div>
                : <div className="form-inline my-2 my-lg-0">
                <NavLink className='btn btn-primary' to={'/login'}>Se connecter</NavLink>
                <NavLink className='btn btn-primary m-2 my-sm-0' to={'/registration'}>S'inscrire</NavLink>
                </div>
            }

        </div>
        </nav>
    )
}

export default NavBar;