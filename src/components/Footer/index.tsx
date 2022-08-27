import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useMakeDraw } from "../../state/hooks/useMakeDraw";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";
import "./styles.css";

const Footer: FC = () => {
  const participants = useParticipantsList();
  const navigate = useNavigate();
  const makeDraw = useMakeDraw();

  const start = () => {
    makeDraw();
    navigate("/sorteio");
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participants.length < 3}
        onClick={start}
      >
        Iniciar sorteio
      </button>
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Footer;
