import { CheckoutDetail } from "../CheckoutDetail/CheckoutDetail";

export const CheckoutSummaryCard = ({ total }: { total: number }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Order Summary</h5>
        <hr />
        <div className="row">
          <CheckoutDetail subtext="Subtotal" text={total?.toFixed(2)} />
        </div>
        <div className="row">
          <CheckoutDetail subtext="Shipping & Tax" text="1.99" />
        </div>
        <hr />
        <div className="row">
          <CheckoutDetail
            subtext="Total"
            text={(total + 1.99)?.toFixed(2)}
            className="fs-3"
          />
        </div>
        <hr />
        <div className="text-center">
          <button className="btn btn-primary">Checkout Items</button>
        </div>
      </div>
    </div>
  );
};
