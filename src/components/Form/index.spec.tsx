import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Form from ".";

describe("Describe form behavior", () => {
  test("Validates if the field is not filled", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      /Insira o nome dos participantes/i
    );
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();
  });

  test("Add new participant", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      /Insira o nome dos participantes/i
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Murilo",
      },
    });

    userEvent.click(button);

    expect(input).toHaveFocus();

    expect(input).toHaveValue("");
  });

  test("Avoid duplicated names", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      /Insira o nome dos participantes/i
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Murilo",
      },
    });

    userEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Murilo",
      },
    });

    userEvent.click(button);

    const errorMessage = screen.getByRole("alert");

    expect(errorMessage.textContent).toBe(
      "Nomes duplicados não são permitidos!"
    );
  });

  test("Error message must have to desapear after timer", () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      /Insira o nome dos participantes/i
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Murilo",
      },
    });

    userEvent.click(button);

    fireEvent.change(input, {
      target: {
        value: "Murilo",
      },
    });

    userEvent.click(button);

    let errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    errorMessage = screen.queryByRole("alert");
    expect(errorMessage).toBeNull();
  });
});
