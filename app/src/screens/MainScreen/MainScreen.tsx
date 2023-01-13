import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from '../../App';

export default function MainScreen() {

    const {token} = useContext(userContext);

    return(
        <div>
            <div className="row container-fluid text-center my-5">
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="./1-group.jpeg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Pour les couples</h5>
                            <p className="card-text">Suivez votre budget et gardez une trace des dépenses communes. Partagez-les équitablement grâce à Tricount (ps : vous êtes également un très gros canard qui aime sa meuf)</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="./2-group.jpeg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Pour les vacances</h5>
                            <p className="card-text">Que vous partiez en vacances en famille ou pour un city trip avec vos copains, Tricount vous aide à apprécier les moments qui comptent vraiment (ps : vous êtes trop gentil)</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="./3-group.jpeg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Pour les colocations</h5>
                            <p className="card-text">On vous aide à partager les factures et les dépenses quotidiennes entre colocataires et permet une gestion financière transparente (ps: vous êtes pas riche)</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                token !== ''
                ? <div className='text-center'><NavLink className='btn btn-primary' to={'/group'}> <h1>Gérer les groupes</h1> </NavLink></div>
                :  <div className='text-center'><NavLink className='btn btn-primary' to={'/login'}> <h1>Se connecter</h1> </NavLink></div>
            }
        </div>
    )
}