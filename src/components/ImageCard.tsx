import React from "react";

type ImageCardProps = {
src: string;
legenda: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ src, legenda }) => {
return (
<div style={{ marginBottom: "1rem", textAlign: "center" }}>
    <img src={src} alt={legenda} style={{ maxWidth: "100%", height: "auto" }} />
    <p>{legenda}</p>
</div>
);
};

export default ImageCard;
