import Image from "next/image";
import React from "react";
import Card from "./../UI/Card";
import { MdKingBed, MdBathtub, MdOutlineAttachMoney } from "react-icons/md";
import { RiRulerFill } from "react-icons/ri";
import { formatter } from "./../../utils/formatter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const EstateInfo = ({ item }) => {
  return (
    <div className="w-full lg:w-1/2">
      <Card>
        <div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            effect="cube"
            spaceBetween={0}
            slidesPerView={1}
          >
            {item.image.map((img,index) => (
              <SwiperSlide key={index}>
                <Image
                  className="w-full "
                  alt={item.address}
                  width={800}
                  height={400}
                  src={`/images/${img}`}
                />
              </SwiperSlide>
            ))}
        </Swiper>

          <h1 className="text-black dark:text-[#fff] font-bold text-2xl mt-4">
            {formatter.format(item.price)} {item.for}
          </h1>
          <span className="py-2 text-gray dark:text-slate-400 font-medium">
            {item.region} - {item.city} {item.address}
          </span>
          <div className="py-2 px-5 text-sm sm:text-lg bg-white dark:bg-slate-700 flex justify-between rounded-lg my-5">
            <div className="flex flex-col items-center">
              <MdBathtub size={40} className="text-blue" />
              <span className="font-medium">{item.bathroom} BathRooms</span>
            </div>
            <div className="flex flex-col items-center">
              <MdKingBed size={40} className="text-yellow-500" />
              <span className="font-medium">{item.rooms} Bed Rooms</span>
            </div>

            <div className="flex flex-col items-center">
              <RiRulerFill size={40} className="text-green-500" />
              <span className="font-medium">{item.area} meter</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">About this Estate</h3>
          <article>
            <p className="text-gray dark:text-slate-400 text-md tracking-wide leading-8">
              {item.description}
            </p>
          </article>
        </div>
      </Card>
    </div>
  );
};

export default EstateInfo;
