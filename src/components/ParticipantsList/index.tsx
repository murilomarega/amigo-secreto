import React, { FC } from "react";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

const ParticipantsList: FC = () => {
  const participants: string[] = useParticipantsList();
  return (
    <ul>
      {participants.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default ParticipantsList;
