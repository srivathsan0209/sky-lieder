"use client";

import { CheckoutItem } from "@/components/CheckoutItem/CheckoutItem";
import { CheckoutSummaryCard } from "@/components/CheckoutSummaryCard/CheckoutSummaryCard";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import Link from "next/link";

export default function CheckoutPage() {
  const cart = useAppSelector((state: RootState) => state.checkout);
  const cartItems = cart.items;

  return (
    <div className="container mt-5">
      {cartItems?.length > 0 ? (
        <div className="row justify-content-between">
          <div className="col-12 col-md-8">
            <h3>Items for checkout ({cart?.totalQuantity})</h3>
            <hr />
            {cartItems?.map((item) => (
              <CheckoutItem
                imageurl={item?.["im:image"]?.[0]?.label}
                artist={item?.["im:artist"]?.label}
                price={item?.["im:price"]?.label}
                rights={item?.rights?.label}
                title={item?.["im:name"]?.label}
                id={item?.id.attributes["im:id"]}
                key={item?.id.attributes["im:id"]}
              />
            ))}
          </div>
          <div className="col-12 col-md-3">
            <CheckoutSummaryCard total={cart?.totalPrice} />
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column">
          Explore Feed items to proceed.
          <Link className="btn btn-primary col-1" href={"/"}>
            open feed
          </Link>
        </div>
      )}
    </div>
  );
}
