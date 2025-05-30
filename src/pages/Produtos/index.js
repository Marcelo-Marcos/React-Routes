import { useParams } from "react-router-dom";

function Produtos() {
  const { id } = useParams();

  return (
    <div>
      <h2>Página de detalhe do produto</h2>
      <span>Meu Produto é {id}</span>
    </div>
  );
}

export default Produtos;
