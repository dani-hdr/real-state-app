import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdKingBed, MdBathtub } from "react-icons/md";
import { RiRulerFill } from "react-icons/ri";
import Like from '../UI/Like';
import Badge from "../UI/Badge";
import { useDispatch } from "react-redux";
import {setHover,unsetHover} from '../../redux/mapSlice'
import { formatter } from "../../utils/formatter";

const EstateItem = ({item}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <div onClick={()=>router.push(`/estate/${item.id}`)} onMouseLeave={()=> dispatch(unsetHover(item.id))} onMouseEnter={()=>dispatch(setHover(item.id))} className="flex w-full flex-col  flex-grow rounded-2xl dark:bg-slate-800 shadow-md hover:shadow-lg cursor-pointer hover:-translate-y-1  transition-all ease-in-out ">
      <div className="relative">
        <div className="absolute z-10 flex gap-2 top-5 left-5">
          <Badge color="blue">{item.forWhat}</Badge>
          {item.isNew && <Badge color="green">New</Badge>}
        </div>
        <div className="absolute z-10 top-5 right-5">
          <Like active={item.isLiked}/>
        </div>
        <Image
          placeholder="blur"
          blurDataURL={`/images/${item.image[0]}`}
          width={500}
          height={250}
          className="rounded-3xl contrast-75 "
          src={`/images/${item.image[0]}`}
          alt="house"
        />
      </div>
      <div className="p-4 ">
        <span className="text-black dark:text-[#fff] font-bold text-xl">{formatter.format(item.price)}</span>
        <p className="text-gray dark:text-slate-400 text-sm my-3 line-clamp-2 ">
          {`${item.region} - ${item.city}`} <br/>
          {item.address}
        </p>
        <div className="flex  justify-between gap-1 ">
          <div className="flex group items-center py-2 px-4 bg-white dark:bg-slate-700  transition hover:bg-blue rounded-lg">
            <MdBathtub className="text-blue group-hover:text-white text-2xl mr-2" />
            <span className="text-black dark:text-slate-400 group-hover:text-white text-sm font-medium">
            {item.bathrooms}
            </span>
          </div>
          <div className="flex group  items-center py-2 px-4 bg-white dark:bg-slate-700 transition hover:bg-yellow-500 rounded-lg">
            <MdKingBed className="text-yellow-500 group-hover:text-white text-2xl mr-2" />
            <span className="text-black dark:text-slate-400 group-hover:text-white text-sm font-medium">
              {item.rooms}
            </span>
          </div>
          <div className="flex group items-center py-2 px-4 bg-white dark:bg-slate-700 transition hover:bg-green-500 rounded-lg">
            <RiRulerFill className="text-green-500 group-hover:text-white text-2xl mr-2" />
            <span className="text-black dark:text-slate-400 group-hover:text-white text-sm font-medium">
              {item.area}m
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateItem;
