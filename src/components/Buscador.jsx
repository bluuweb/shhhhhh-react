const Buscador = ({ setTextoBuscar }) => {
    return (
        <input
            type="text"
            placeholder="Busqueda..."
            onChange={(e) => setTextoBuscar(e.target.value)}
        />
    );
};

export default Buscador;
