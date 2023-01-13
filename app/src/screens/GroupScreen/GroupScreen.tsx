import TextInput from "../../components/TextInput/TextInput";

export default function GroupScreen() {
  return (
    <div>
      <TextInput name="name" label="Nom" type="text" />
      <TextInput name="nbPerson" label="Nombre de personnes" type="text" />
      <TextInput name="admin" label="Admin" type="text" />
      <input type="submit" value="Envoyer" />
    </div>
  );
}
