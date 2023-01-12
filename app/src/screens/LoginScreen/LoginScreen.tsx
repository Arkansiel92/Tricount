import SubmitButton from "../../components/TextInput/SubmitButton";
import TextInput from "../../components/TextInput/TextInput";

export default function LoginScreen() {

  const handleSubmit = () => {
    console.log("envoie du fetch");
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    const data = {email: 'admin@admin.fr', password: 'admin'}

    fetch('http://localhost:8741/api/login_check', {
      method: 'POST',
      headers: headers,
      mode: 'cors',
      body: JSON.stringify(data)
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("Identification incorrecte.");
      }
    })
    .then((data) => {
      console.log(data.token);
    })
    .catch((error) => {console.log('erreur : ', error)})
  }

  return (
    <div>
      <TextInput
        name="Identifiant"
        type="text"
        label="Identifiant"
        placeholder="nom"
      />
      <TextInput
        name="password"
        type="password"
        label="Mot de passe"
        placeholder="Mot de passe"
      />
      {/* <SubmitButton value="Envoyer" /> */}
    </div>
  );
}
