import SubmitButton from "../../components/TextInput/SubmitButton";
import TextInput from "../../components/TextInput/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";

export default function LoginScreen() {
  const Submit = () => {
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
        } else {
          console.log("Identification incorrecte.");
        }
      })
      .then((data) => {
        console.log(data.token);
      })
      .catch((error) => {
        console.log("erreur : ", error);
      });
  };

  type FormValues = {
    password: string;
    email: string;
  };

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          {...register("email")}
          name="Identifiant"
          type="text"
          label="Identifiant"
          placeholder="nom"
        />
        <TextInput
          {...register("password")}
          name="password"
          type="password"
          label="Mot de passe"
          placeholder="Mot de passe"
        />
        <SubmitButton name="envoyer" value="Envoyer" />
      </form>
    </div>
  );
}
