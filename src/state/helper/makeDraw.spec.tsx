import { makeDraw } from "./makeDraw";

describe("make game draw", () => {
  test("player can not draw himself", () => {
    const players = [
      "Murilo",
      "Julia",
      "Alice",
      "Monaliza",
      "Luciano",
      "Luana",
    ];

    const draw = makeDraw(players);
    players.forEach((player) => {
      const secretFriend = draw.get(player);
      expect(secretFriend).not.toEqual(player);
    });
  });
});
