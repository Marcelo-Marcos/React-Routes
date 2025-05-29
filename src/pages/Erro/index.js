import { Link } from "react-router-dom";

function Erro() {
  return (
    <div>
      <h2>Ops essa página não existe!</h2>
      <span>Encontramos essas páginas aqui:</span>
      <br />
      <Link to="/">Pagina Home</Link>
      <br />
      <Link to="/contato">Contato</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Erro;
