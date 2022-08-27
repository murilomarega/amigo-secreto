import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, participantListState } from "../atom";

const useAddParticipant = () => {
  const setList = useSetRecoilState(participantListState);
  const list = useRecoilValue(participantListState);
  const setError = useSetRecoilState(errorState);

  return (name: string) => {
    if (list.includes(name)) {
      setError("Nomes duplicados não são permitidos!");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
    return setList((list) => [...list, name]);
  };
};

export { useAddParticipant };
