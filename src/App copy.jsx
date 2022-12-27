import { nanoid } from "nanoid";
import { useState } from "react";
import { db } from "./api/db";

const App = () => {
    const [colaboradores, setColaboradores] = useState(db);

    // regla hacer los state del form
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");

    const [textoBuscar, setTextoBuscar] = useState("");

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
        <div className="container">
            <h1>Lorem, ipsum dolor.</h1>

            <input
                type="text"
                placeholder="Busqueda..."
                onChange={(e) => setTextoBuscar(e.target.value)}
            />

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

            <ul>
                {colaboradores
                    .filter(({ nombre }) => {
                        return nombre
                            .toLowerCase()
                            .includes(textoBuscar.toLowerCase());
                    })
                    .map(({ id, nombre, correo }) => {
                        return (
                            <li key={id}>
                                {nombre} - {correo}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
export default App;
