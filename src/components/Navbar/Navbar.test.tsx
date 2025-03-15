import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("CheckoutDetail", () => {
  test("should render subtext", () => {
    render(<Navbar />);

    expect(screen.getByText("Sky Lieder")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
