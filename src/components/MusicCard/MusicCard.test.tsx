import StoreProvider from "@/app/StoreProvider";
import { addItem } from "@/lib/features/checkout/checkoutSlice";
import feedMock from "@/mocks/feedMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MusicCard } from "./MusicCard";
import { useAppDispatch } from "@/lib/hooks";

const mockData = feedMock?.feed?.entry[0];

vi.mock("@/lib/hooks", () => ({
  useAppDispatch: vi.fn().mockReturnValue(vi.fn()),
}));

describe("CheckoutItem", () => {
  const renderComponent = () => {
    render(
      <StoreProvider>
        <MusicCard
          imageurl={mockData?.["im:image"][0].label}
          title={mockData?.["im:name"]?.label}
          text={mockData?.["im:artist"]?.label}
          price={mockData?.["im:price"]?.label}
          entry={mockData}
          index={1}
        />
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

  test("should render text", () => {
    renderComponent();

    expect(screen.getByText("TobyMac")).toBeInTheDocument();
  });

  test("should render add button", () => {
    renderComponent();

    const removeButton = screen.getByRole("button");

    expect(removeButton).toBeInTheDocument();
  });

  test("should call useAppDispatchMock on remove button", () => {
    renderComponent();

    const removeButton = screen.getByRole("button");
    fireEvent.click(removeButton);
    expect(useAppDispatch).toBeCalled();
  });
});
