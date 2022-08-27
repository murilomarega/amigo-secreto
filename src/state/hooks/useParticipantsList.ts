import { useRecoilValue } from "recoil";
import { participantListState } from "../atom";

const useParticipantsList = () => {
  return useRecoilValue(participantListState);
};

export { useParticipantsList };
