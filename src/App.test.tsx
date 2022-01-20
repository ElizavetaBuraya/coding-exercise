import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import { testMock } from "./utils/testUtils";
import App from "./App";

test("renders Loading message if no data is present", () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});

describe("data fetch and component render", () => {
  let container: any = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renders components if data is present", async () => {
    const mock = jest.spyOn(global, "fetch");
    mock.mockImplementation(() =>
      Promise.resolve<any>({
        json: () => Promise.resolve(testMock)
      })
    );
  
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(<App />, container);
    });
  
    expect(screen.getByTestId(/customer-data/)).toBeInTheDocument();
    expect(screen.getByTestId(/account-info/)).toBeInTheDocument();
    expect(screen.getByTestId(/transactions/)).toBeInTheDocument();

    (global.fetch as any).mockRestore();
  });  
})
