import { ChangeEvent, useState, useEffect, useContext } from "react";
import { userContext } from "../../App";
import TextInput from "../../components/TextInput/TextInput";

interface props {
  name: string;
  nbPerson: string;
  admin: string;
}

export default function GroupScreen() {

    const {token} = useContext(userContext);
    const [form, setForm] = useState<props>({
    name: "",
    nbPerson: "",
    admin: "",
    });

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer "+ token);

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

    const data = { name: "", nbPerson: "", admin: "" };

    fetch("http://localhost:8741/api/", {
        method: "POST",
        headers: headers,
        mode: "cors",
        body: JSON.stringify(data),
    })
    .then((res) => {
        if (res.ok) {
        return res.json();
        }
    });
    };

    useEffect(() => {
        console.log("activation du useEffect");
        fetch("http://localhost:8741/groups/list", {
            method: "GET",
            headers: headers,
            mode: "cors"
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data);
        })
    }, []);

    return (
    <div className="container my-5 form-group">
        <h3 className="border-bottom my-3">Créer un groupe</h3>
        <TextInput name="name" label="Nom" type="text" className="form-control" />
        <TextInput
        name="nbPerson"
        label="Nombre de personnes"
        type="text"
        className="form-control w-25"
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
    </div>
    );
}
