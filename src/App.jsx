import { useState } from "react";
import { db } from "./api/db";

import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";

const App = () => {
    const [colaboradores, setColaboradores] = useState(db);
    const [textoBuscar, setTextoBuscar] = useState("");

    return (
        <div className="container">
            <h1>Lorem, ipsum dolor.</h1>

            <Buscador setTextoBuscar={setTextoBuscar} />
            <Formulario
                colaboradores={colaboradores}
                setColaboradores={setColaboradores}
            />

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
