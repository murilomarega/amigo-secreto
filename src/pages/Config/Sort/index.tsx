import React, { FC, useState } from "react";
import { useDrawResul } from "../../../state/hooks/useDrawResult";
import { useParticipantsList } from "../../../state/hooks/useParticipantsList";
import "./styles.css";

const Sort: FC = () => {
  const players = useParticipantsList();
  const [player, setPlayer] = useState<string>("");
  const [secretFriend, setSecretFriend] = useState<string>("");

  const result = useDrawResul();

  const draw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result.has(player)) {
      setSecretFriend(result.get(player)!);
    }
  };

  return (
    <section className="sorteio">
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={draw}>
        <select
          required
          name="players"
          id="players"
          placeholder="Selecione o seu nome"
          value={player}
          onChange={(event) => setPlayer(event.target.value)}
        >
          <option>Selecione seu nome</option>
          {players.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
        <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
        <button className="botao-sortear">Sortear</button>
        {secretFriend && <p role="alert">{secretFriend}</p>}
      </form>
      <footer className="sorteio">
        <img
          src="/images/aviao.png"
          className="aviao"
          alt="Um desenho de um avião de papel"
        />
      </footer>
    </section>
  );
};

export default Sort;
