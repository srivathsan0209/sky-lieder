import React from "react";

export const CheckoutSummaryCard = ({ total }: { total: number }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Order Summary</h5>
        <hr />
        <div className="row">
          <p className="col-6 col-lg-6 col-md-12 text-muted">Subtotal</p>
          <p className="col-6 col-lg-6 col-md-12 text-lg-end text-md-start text-end">
            <strong>${total?.toFixed(2)}</strong>
          </p>
        </div>
        <div className="row">
          <p className="col-6 col-lg-6 col-md-12 text-muted">Shipping & Tax</p>
          <p className="col-6 col-lg-6 col-md-12 text-lg-end text-md-start text-end">
            <strong>$1.99</strong>
          </p>
        </div>
        <hr />
        <div className="row">
          <p className="col-6 col-lg-6 col-md-12 text-muted fs-3">Total</p>
          <p className="col-6 col-lg-6 col-md-12 text-lg-end text-md-start text-end fs-4">
            <strong>${(total + 1.99)?.toFixed(2)}</strong>
          </p>
        </div>
        <hr />
        <div className="text-center">
          <button className="btn btn-primary">Checkout Items</button>
        </div>
      </div>
    </div>
  );
};
