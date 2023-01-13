import TextInput from "../../components/TextInput/TextInput";

export default function GroupScreen() {
  return (
    <div className="container my-5 form-group">
      <h3 className="border-bottom my-3">Groupes</h3>
      <TextInput name="name" label="Nom" type="text" className="form-control" />
      <TextInput
        name="nbPerson"
        label="Nombre de personnes"
        type="text"
        className="form-control"
      />
      <div className=" form-group">
        <TextInput
          name="admin"
          label="Admin"
          type="text"
          className="form-control"
        />
      </div>
      <input className="btn btn-primary" type="submit" value="Valider" />
    </div>
  );
}
