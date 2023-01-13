import SubmitButton from "../../components/TextInput/SubmitButton";
import TextInput from "../../components/TextInput/TextInput";
import {useNavigate} from "react-router-dom";
import { ChangeEvent, useContext, useState } from "react";
import { userContext } from "../../App";

interface props {
  email: string,
  password: string
}

interface alert {
  msg: string,
  class: string
}

export default function LoginScreen() {

  const navigate = useNavigate();
  const {token, updateValue} = useContext(userContext);
  const [form, setForm] = useState<props>({email : "", password : ""});
  const [alert, setAlert] = useState<alert>({msg: "", class: ""});

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
    console.log("envoie du fetch");
    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    const data = { email: "admin@admin.fr", password: "admin" };

    fetch("http://localhost:8741/api/login_check", {
      method: "POST",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(data),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      setAlert({msg : 'Connexion réussie !', class: 'alert alert-success'});
      updateValue(data.token);
      navigate('/');
    })
    .catch((error) => {
      setAlert({msg : 'Identification ou mot de passe incorrect', class: 'alert alert-danger'});
    })
  }

  return (
    <div className="container my-5">
      {
        alert.msg !== ''
        ? <div className={alert.class}>{alert.msg}</div>
        : ''
      }
      <h3 className="border-bottom my-3">Se connecter</h3>
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
  );
}
