import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Config from ".";

const mockNavigation = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

describe("Config page", () => {
  test("page must be rendered correctly", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
