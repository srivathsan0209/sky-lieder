import StoreProvider from "@/app/StoreProvider";
import * as hooks from "@/lib/hooks";
import feedMock from "@/mocks/feedMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { CheckoutItem } from "./CheckoutItem";

const mockData = feedMock?.feed?.entry[0];

vi.mock("@/lib/hooks", () => ({
  useAppDispatch: vi.fn().mockReturnValue(vi.fn()),
}));

describe("CheckoutItem", () => {
  const renderComponent = () => {
    render(
      <StoreProvider>
        <CheckoutItem
          imageurl={mockData?.["im:image"][0].label}
          artist={mockData?.["im:artist"]?.label}
          price={mockData?.["im:price"]?.label}
          rights={mockData?.rights?.label}
          title={mockData?.["im:name"]?.label}
          id={mockData?.id.attributes["im:id"]}
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

  test("should render artist", () => {
    renderComponent();

    expect(screen.getByText("TobyMac")).toBeInTheDocument();
  });

  test("should render price", () => {
    renderComponent();

    expect(screen.getByText("$9.99")).toBeInTheDocument();
  });

  test("should render rights", () => {
    renderComponent();

    expect(
      screen.getByText(
        "ForeFront Records; ℗ 2024 F.L. Inc., under exclusive license to Capitol CMG, Inc."
      )
    ).toBeInTheDocument();
  });

  test("should render remove button", () => {
    renderComponent();

    const removeButton = screen.getByRole("button");

    expect(removeButton).toBeInTheDocument();
  });

  test("should call useAppDispatchMock on remove button", () => {
    renderComponent();

    const removeButton = screen.getByRole("button");

    fireEvent.click(removeButton);

    expect(hooks.useAppDispatch).toBeCalled();
  });
});
