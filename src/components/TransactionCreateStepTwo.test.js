import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";
import userEvent from "@testing-library/user-event";

test("if amount and not is entered, the pay button becomes enabled", async () => {
  //arrange, render
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "6" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
  //act user events
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a not/i), "dinner");
  //assertion
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

//combine units into integration, but it not about combining

//few integration is better than a lot unit in a way
