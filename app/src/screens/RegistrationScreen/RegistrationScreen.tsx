import TextInput from "../../components/TextInput/TextInput";
import { ChangeEvent, useState } from "react";

interface props {
    email: string,
    password: string
}

export default function RegistrationScreen() {

    const [form, setForm] = useState<props>({email : "", password : ""});

    const handleChange = (e: ChangeEvent) => {
        setForm(prevState => {
            return {
                ...prevState,
                // @ts-ignore
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = () => {

        const headers = new Headers();

        headers.append('Content-Type', 'application/json');

        fetch('http://localhost:8741/registration', {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            body: JSON.stringify(form)
        })
        .then(res => console.log(res));
    }

    return(
        <div className="container my-5">
            <h3 className="border-bottom my-3">S'inscrire</h3>
            <div className="form-group">
                {/* <TextInput className='form-control' name='email' label='Identifiant' type='text' /> */}
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" name="email" onChange={handleChange} />
            </div>
            <div className="form-group">
                {/* <TextInput className='form-control' name='password' label='Mot de passe' type='password' /> */}
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" className="form-control" onChange={handleChange} />
            </div>
            <input onClick={handleSubmit} className="btn btn-primary" type="submit" value="Envoyer" />
        </div>
    )
}