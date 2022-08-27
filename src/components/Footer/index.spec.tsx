import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { useParticipantsList } from "../../state/hooks/useParticipantsList";

jest.mock("../../state/hooks/useParticipantsList", () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

const mockNavigation = jest.fn();
const mockDraw = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

jest.mock("../../state/hooks/useMakeDraw", () => {
  return {
    useMakeDraw: () => mockDraw,
  };
});

describe("do not have enough players", () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });
  test("the joke can not be started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});

describe("have enough players", () => {
  const players = ["Murilo", "Julia", "Alice"];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(players);
  });

  test("the joke can be started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("start the joke", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith("/sorteio");
    expect(mockDraw).toHaveBeenCalledTimes(1);
  });
});
