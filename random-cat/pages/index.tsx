import { NextPage } from "next";
import { useEffect, useState } from "react";

const IndexPage: NextPage = () => {
  // useStateを使って状態を定義する
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  // マウント時に画像を読み込む宣言
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  }, []);
  return <div>{loading || <img src={imageUrl} />}</div>;
};
export default IndexPage;

type Image = {
  url: string;
};
const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};
