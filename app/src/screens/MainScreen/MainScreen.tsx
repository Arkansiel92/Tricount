import { NavLink } from 'react-router-dom';

export default function MainScreen() {
    return(
        <div>
            Main screen
            <div className="row container-fluid text-center">
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Pour les couples</h5>
                            <p className="card-text">Suivez votre budget et gardez une trace des dépenses communes. Partagez-les équitablement grâce à Tricount (ps : vous êtes un canard)</p>
                            <NavLink className='btn btn-primary' to={'/group'}>Gérer les groupes</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Pour les vacances</h5>
                            <p className="card-text">Que vous partiez en vacances en famille ou pour un city trip avec vos copains, Tricount vous aide à apprécier les moments qui comptent vraiment (ps : vous êtes trop gentil)</p>
                            <NavLink className='btn btn-primary' to={'/group'}>Gérer les groupes</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img className="card-img-top" src="" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Pour les colocations</h5>
                            <p className="card-text">On vous aide à partager les factures et les dépenses quotidiennes entre colocataires et permet une gestion financière transparente (ps: vous êtes pas riche)</p>
                            <NavLink className='btn btn-primary' to={'/group'}>Gérer les groupes</NavLink>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}