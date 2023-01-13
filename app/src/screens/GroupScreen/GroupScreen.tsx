import { ChangeEvent, useState } from "react";
import TextInput from "../../components/TextInput/TextInput";

interface props {
  name: string;
  nbPerson: number;
  admin: string;
}

export default function GroupScreen() {
  const [form, setForm] = useState<props>({
    name: "",
    nbPerson: 0,
    admin: "",
  });

  const handleChange = (e: ChangeEvent) => {
    setForm((prevState) => {
      return {
        ...prevState,
        // @ts-ignore
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    console.log("envoie du fetch");
    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    const data = { name: "", nbPerson: "", admin: "" };

    fetch("http://localhost:8741/api/", {
      method: "POST",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  };

  return (
    <div>
      <div className="container my-5 form-group">
        <h3 className="border-bottom my-3">Groupes</h3>
        <TextInput
          name="name"
          label="Nom"
          type="text"
          className="form-control"
        />
        <TextInput
          name="nbPerson"
          label="Nombre de personnes"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
        <div className=" form-group">
          <TextInput
            name="admin"
            label="Admin"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Valider"
          onClick={handleSubmit}
        />
        {form.admin !== "" && form.name !== "" ? (
          <div className="container mu-5 form-group">
            <h4>
              -{form.name}
              <br />-{form.admin}
            </h4>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
