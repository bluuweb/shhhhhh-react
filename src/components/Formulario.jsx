import { nanoid } from "nanoid";
import { useState } from "react";

const Formulario = ({ setColaboradores, colaboradores }) => {
    // regla hacer los state del form
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setColaboradores([
            ...colaboradores,
            {
                nombre,
                correo: email,
                id: nanoid(),
            },
        ]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                name="nombre"
            />
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default Formulario;
