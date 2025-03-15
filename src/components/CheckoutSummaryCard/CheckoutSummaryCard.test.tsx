import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CheckoutSummaryCard } from "./CheckoutSummaryCard";

describe("CheckoutDetail", () => {
  test("should render total", () => {
    render(<CheckoutSummaryCard total={5.99} />);

    expect(screen.getAllByRole("strong")[0].textContent).toBe("$5.99");
  });

  test("should render heading", () => {
    render(<CheckoutSummaryCard total={1.99} />);

    expect(screen.getByText('Order Summary')).toBeInTheDocument();
  });

  test("should render other contents", () => {
    render(<CheckoutSummaryCard total={1.99} />);

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('Shipping & Tax')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
  });

  test("should render button", () => {
    render(<CheckoutSummaryCard total={1.99} />);

    const checkoutButton = screen.getByRole("button");

    expect(checkoutButton).toBeInTheDocument();
  });
});
