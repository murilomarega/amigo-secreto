import shuffle from "just-shuffle";
import { useSetRecoilState } from "recoil";
import { secretFriendResult } from "../atom";
import { makeDraw } from "../helper/makeDraw";
import { useParticipantsList } from "./useParticipantsList";

const useMakeDraw = () => {
  const players = useParticipantsList();
  const setResult = useSetRecoilState(secretFriendResult);

  return () => {
    const result = makeDraw(players);
    setResult(result);
  };
};

export { useMakeDraw };
