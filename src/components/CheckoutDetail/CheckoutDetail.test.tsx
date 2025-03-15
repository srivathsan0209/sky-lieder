import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CheckoutDetail } from "./CheckoutDetail";

describe("CheckoutDetail", () => {
  test("should render subtext", () => {
    render(<CheckoutDetail subtext="subtext" text="text" />);

    expect(screen.getByText("subtext")).toBeInTheDocument();
  });

  test("should render text", () => {
    render(<CheckoutDetail subtext="subtext" text="text" />);

    expect(screen.getByRole("strong").textContent).toBe("$text");
  });

  test("should render classname", () => {
    render(<CheckoutDetail subtext="subtext" text="text" className="custom" />);
    
    expect(screen.getAllByRole("paragraph")[0]).toHaveClass("custom");
  });
});
