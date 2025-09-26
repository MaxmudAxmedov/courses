"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JsIcon from "../public/img/js.png";
import ReactIcon from "../public/img/react.png";
import NextIcon from "../public/img/next.jpeg";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const data = [
    {
      id: 0,
      icon: JsIcon,
      title: 'JavaScript',
      info: 'lorem ewf fgf gge ge ger jn'
    },
    {
      id: 1,
      icon: ReactIcon,
      title: 'ReactJS',
      info: 'lorem ewf fgf gge ge ger jn'
    },
    {
      id: 2,
      icon: NextIcon,
      title: 'NextJS',
      info: 'lorem ewf fgf gge ge ger jn'
    },
  ]
  return (
    <main>
      <Slider {...settings} className="py-24">
        {
          data?.map((item, index) => {
            return <div key={index}>
              <div className="flex justify-around items-center">
                <div>
                  <h1 className="text-[32px]">{item.title}</h1>
                  <p>{item.info}</p>
                </div>
                <div >
                  <Image src={item.icon} width={300} height={100} alt="..." />
                </div>
              </div>
            </div>
          })
        }
      </Slider>
    </main>
  );
}
