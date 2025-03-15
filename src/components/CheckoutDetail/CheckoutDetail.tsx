export type CheckoutDetailProps = {
  subtext: string;
  text: string;
  className?: string;
};

export const CheckoutDetail = ({
  subtext,
  text,
  className,
}: CheckoutDetailProps) => {
  return (
    <div className="row">
      <p className={`col-6 col-lg-6 col-md-12 text-muted ${className}`}>
        {subtext}
      </p>
      <p
        className={`col-6 col-lg-6 col-md-12 text-lg-end text-md-start text-end ${className}`}
      >
        <strong>${text}</strong>
      </p>
    </div>
  );
};
