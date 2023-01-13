import { ChangeEvent, useState } from "react";
import TextInput from "../../components/TextInput/TextInput";

interface props {
  price: number;
  task: string;
  admin: string;
}

export default function TaskScreen() {
  const [form, setForm] = useState<props>({
    price: 0,
    task: "",
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

    const data = { price: "", task: "", admin: "" };

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
        <h3 className="border-bottom my-3">Tâche</h3>
        <TextInput
          name="task"
          label="Tâche"
          type="text"
          className="form-control"
        />
        <TextInput
          name="price"
          label="Prix"
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
        {form.admin !== "" && form.task !== "" ? (
          <div className="container my-5 form-group">
            <h4>
              Prix:
              {/* {form.price / form.nbPerson} */}
            </h4>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
