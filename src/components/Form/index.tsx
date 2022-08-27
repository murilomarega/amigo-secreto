import React, { FC, useRef, useState } from "react";
import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { useErrorMessage } from "../../state/hooks/useErrorMessage";
import "./styles.css";

const Form: FC = () => {
  const [name, setName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const add = useAddParticipant();
  const errorMessage = useErrorMessage();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    add(name);
    setName("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={addParticipant}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Insira o nome dos participantes"
        />
        <button disabled={!name}>Adicionar</button>
      </div>
      {errorMessage && (
        <p className="alerta erro" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default Form;
