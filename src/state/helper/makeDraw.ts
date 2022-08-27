import shuffle from "just-shuffle";

export function makeDraw(players: string[]) {
  const totalPlayers = players.length;
  const sortedPlayers = shuffle(players);

  const result = new Map<string, string>();

  for (let index = 0; index < totalPlayers; index++) {
    const friendIndex = index === totalPlayers - 1 ? 0 : index + 1;
    result.set(sortedPlayers[index], sortedPlayers[friendIndex]);
  }

  return result;
}
