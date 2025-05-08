import React, { useState } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [imagens, setImagens] = useState<{ src: string; legenda: string }[]>([]);
  const [novaSrc, setNovaSrc] = useState("");
  const [novaLegenda, setNovaLegenda] = useState("");

  const adicionarImagem = () => {
    if (novaSrc && novaLegenda) {
      setImagens([...imagens, { src: novaSrc, legenda: novaLegenda }]);
      setNovaSrc("");
      setNovaLegenda("");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>🖼️ Galeria de Imagens</h1>
      <div>
        <input
          type="text"
          placeholder="URL da imagem"
          value={novaSrc}
          onChange={(e) => setNovaSrc(e.target.value)}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <input
          type="text"
          placeholder="Legenda"
          value={novaLegenda}
          onChange={(e) => setNovaLegenda(e.target.value)}
          style={{ width: "100%", marginBottom: "0.5rem" }}
        />
        <button onClick={adicionarImagem}>Adicionar Imagem</button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        {imagens.map((img, index) => (
          <ImageCard key={index} src={img.src} legenda={img.legenda} />
        ))}
      </div>
    </div>
  );
}

export default App;
