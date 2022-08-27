import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { RecoilRoot } from "recoil";
import Sort from ".";
import { useDrawResul } from "../../../state/hooks/useDrawResult";
import { useParticipantsList } from "../../../state/hooks/useParticipantsList";

jest.mock("../../../state/hooks/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

jest.mock("../../../state/hooks/useDrawResult", () => {
  return {
    useDrawResul: jest.fn(),
  };
});

describe("sort page", () => {
  const players = ["Murilo", "Julia", "Monaliza"];

  const result = new Map<string, string>([
    ["Murilo", "Julia"],
    ["Julia", "Monaliza"],
    ["Monaliza", "Murilo"],
  ]);

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(players);
    (useDrawResul as jest.Mock).mockReturnValue(result);
  });

  test("all the players must can see their secret friend", () => {
    render(
      <RecoilRoot>
        <Sort />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(players.length + 1);
  });

  test("secret friend is shown when requested", () => {
    render(
      <RecoilRoot>
        <Sort />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, {
      target: {
        value: players[0],
      },
    });

    const button = screen.getByRole("button");

    userEvent.click(button);

    const secretFriend = screen.getByRole("alert");
    expect(secretFriend).toBeInTheDocument();
  });
});
