import { render, screen } from "@testing-library/react";
import { testMock } from "../../utils/testUtils";
import CustomerData from "./CustomerData";

test("renders Total Credit and Total Debit correctly", () => {
  render(
    <CustomerData
      accounts={testMock.accounts}
      selectedAccount={testMock.accounts[0]}
      setSelectedAccount={() => null}
    />
  );
  const totalCredit = screen.getByText(/Total Credit: 223.04/i);
  const totalDebit = screen.getByText(/Total Debit: 1000.00/i);
  expect(totalCredit).toBeInTheDocument();
  expect(totalDebit).toBeInTheDocument();
});
