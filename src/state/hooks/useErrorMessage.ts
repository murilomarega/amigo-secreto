import { useRecoilValue } from "recoil";
import { errorState } from "../atom";

const useErrorMessage = () => {
  const errorMessage = useRecoilValue(errorState);
  return errorMessage;
};

export { useErrorMessage };
