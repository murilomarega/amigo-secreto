import { useRecoilValue } from "recoil";
import { secretFriendResult } from "../atom";

const useDrawResul = () => {
  return useRecoilValue(secretFriendResult);
};

export { useDrawResul };
