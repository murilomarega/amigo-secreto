import { atom } from "recoil";

const participantListState = atom<string[]>({
  key: "participantListState",
  default: [],
});

const secretFriendResult = atom<Map<string, string>>({
  key: "secretFriendResult",
  default: new Map(),
});

const errorState = atom<string>({
  key: "errorState",
  default: "",
});
export { participantListState, errorState, secretFriendResult };
