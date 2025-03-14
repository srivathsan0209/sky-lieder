import Image from "next/image";

export type MusicCardProps = {
  imageurl: string;
  title: string;
  text: string;
  price: string;
  index: number;
};

export const MusicCard = ({
  imageurl,
  title,
  text,
  price,
  index,
}: MusicCardProps) => {
  const newImageUrl = imageurl.replace("55x55bb", "250x250bb");
  return (
    <div className="card">
      <Image
        src={newImageUrl}
        className="card-img ps-5 pe-5 pt-5"
        alt="album cover"
        height="250"
        width="250"
        priority={index < 9}
      />
      <div className="card-body d-flex flex-column justify-content-end  ps-5 pe-5">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary">Add at {price}</button>
      </div>
    </div>
  );
};
