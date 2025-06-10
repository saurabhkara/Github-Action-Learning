import { render } from "@testing-library/react";
import App from "./App";

test("renders default greeting", () => {
  render(<App />);
  expect(<App />).toBeTruthy();
});
