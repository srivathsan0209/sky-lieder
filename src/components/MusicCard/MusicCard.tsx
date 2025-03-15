"use client";

import { addItem } from "@/lib/features/checkout/checkoutSlice";
import { useAppDispatch } from "@/lib/hooks";
import { AppDispatch } from "@/lib/store";
import { Entry } from "@/models/feed";
import Image from "next/image";

export type MusicCardProps = {
  imageurl: string;
  title: string;
  text: string;
  price: string;
  entry: Entry;
  index: number;
};

export const MusicCard = ({
  imageurl,
  title,
  text,
  price,
  entry,
  index,
}: MusicCardProps) => {
  const newImageUrl = imageurl?.replace("55x55bb", "250x250bb");

  const dispatch: AppDispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addItem(entry));
  };

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
        <button className="btn btn-primary" onClick={handleClick}>
          Add at {price}
        </button>
      </div>
    </div>
  );
};
