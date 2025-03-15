import StoreProvider from "@/app/StoreProvider";
import feedMock from "@/mocks/feedMock.json";
import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import CheckoutPage from "./page";

vi.mock("@/lib/hooks", () => ({
  useAppSelector: vi.fn().mockReturnValue({
    items: [feedMock?.feed?.entry[0]],
    totalQuantity: 1,
    totalPrice: 9.99,
  }),
  useAppDispatch: vi.fn().mockReturnValue(vi.fn()),
}));

describe("CheckoutPage", () => {
  const renderComponent = () => {
    render(
      <StoreProvider>
        <CheckoutPage />
      </StoreProvider>
    );
  };

  test("should render image", () => {
    renderComponent();

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });

    test("should render title", () => {
      renderComponent();

      expect(screen.getByText("Heaven On My Mind")).toBeInTheDocument();
    });

    test("should render artist", () => {
      renderComponent();

      expect(screen.getByText("TobyMac")).toBeInTheDocument();
    });

    test("should render price", () => {
      renderComponent();

      expect(screen.getAllByText("$9.99")[0]).toBeInTheDocument();
    });

    test("should render rights", () => {
      renderComponent();

      expect(
        screen.getByText(
          "ForeFront Records; ℗ 2024 F.L. Inc., under exclusive license to Capitol CMG, Inc."
        )
      ).toBeInTheDocument();
    });

    test("should render total", () => {
      renderComponent();

      expect(screen.getAllByRole("strong")[0].textContent).toBe("$9.99");
    });

    test("should render heading", () => {
      renderComponent();

      expect(screen.getByText("Order Summary")).toBeInTheDocument();
    });

    test("should render other contents", () => {
      renderComponent();

      expect(screen.getByText("Subtotal")).toBeInTheDocument();
      expect(screen.getByText("Shipping & Tax")).toBeInTheDocument();
      expect(screen.getByText("Total")).toBeInTheDocument();
    });

    test("should render button", () => {
      renderComponent();

      const checkoutButton = screen.getByRole("button",{
        name : 'Checkout Items'
      });

      expect(checkoutButton).toBeInTheDocument();
    });
});
