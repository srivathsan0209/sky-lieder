import { CheckoutItem } from "@/components/CheckoutItem/CheckoutItem";
import { CheckoutSummaryCard } from "@/components/CheckoutSummaryCard/CheckoutSummaryCard";
import data from "@/mocks/feedMock.json";
import { Entry } from "@/models/feed";

export default function CheckoutPage() {
  const cartItems = [data?.feed?.entry?.[0], data?.feed?.entry?.[1]];

  const calculateTotal = (cartItems: Entry[]): number => {
    let total = 0;

    cartItems.forEach((item) => {
      if (item && item["im:price"]?.attributes?.amount) {
        const priceAmount = parseFloat(item["im:price"].attributes.amount);
        total += priceAmount;
      }
    });

    return total;
  };
  return (
    <div className="container mt-5">
      {cartItems?.length > 0 ? (
        <div className="row justify-content-between">
          <div className="col-12 col-md-8">
            <h3>Items for checkout ({cartItems?.length})</h3>
            <hr />
            {cartItems?.map((item) => (
              <CheckoutItem
                imageurl={item?.["im:image"]?.[0]?.label}
                artist={item?.["im:artist"]?.label}
                price={item?.["im:price"]?.label}
                rights={item?.rights?.label}
                title={item?.["im:name"]?.label}
                key={item?.id.attributes["im:id"]}
              />
            ))}
          </div>
          <div className="col-12 col-md-3">
            <CheckoutSummaryCard total={calculateTotal(cartItems)} />
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column">
          Explore Feed items to proceed.
          <button className="btn btn-primary col-1">open feed</button>
        </div>
      )}
    </div>
  );
}
