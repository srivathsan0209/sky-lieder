import Image from "next/image";

export type CheckoutItemProps = {
  imageurl: string;
  title: string;
  artist: string;
  rights: string;
  price: string;
};

export const CheckoutItem = ({
  imageurl,
  title,
  artist,
  rights,
  price,
}: CheckoutItemProps) => {
  const newImageUrl = imageurl?.replace("55x55bb", "150x150bb");
  return (
    <>
      <div className="row mt-4">
        <div className="col-12 col-md-6 col-lg-3 align-content-center">
          <Image
            src={newImageUrl}
            className="card-img ps-2 pe-2"
            alt="album cover"
            height="150"
            width="150"
          />
        </div>
        <div className="col-12 col-lg-7 pt-2 ps-3">
          <h4>{title}</h4>
          <p className="text-muted">{artist}</p>
          <p className="text-muted">{rights}</p>
          <button className="btn btn-outline-danger">
            <i className="bi bi-trash"></i> Remove
          </button>
        </div>
        <div className="col-2 fs-3 ps-3 text-end">{price}</div>
      </div>
      <hr />
    </>
  );
};
