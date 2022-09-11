import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdKingBed, MdBathtub } from "react-icons/md";
import { RiRulerFill } from "react-icons/ri";
import Like from '../UI/Like';
import Badge from "../UI/Badge";

import { useDispatch } from "react-redux";
import {setHover,unsetHover} from '../../redux/mapSlice'
const EstateItem = ({item}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  return (
    <div onClick={()=>router.push(`/Estate/${item.id}`)} onMouseLeave={()=> dispatch(unsetHover(item.id))} onMouseEnter={()=>dispatch(setHover(item.id))} className="flex w-80 flex-col rounded-2xl shadow-md hover:shadow-lg cursor-pointer hover:-translate-y-1  transition-all ease-in-out ">
      <div className="relative">
        <div className="absolute z-10 flex gap-2 top-5 left-5">
          <Badge color="blue">{item.forWhat}</Badge>
          {item.isNew && <Badge color="green">New</Badge>}
        </div>
        <div className="absolute z-10 top-5 right-5">
          <Like active={item.isLiked}/>
        </div>
        <Image
          width={500}
          height={250}
          className="rounded-3xl contrast-75 "
          src={`/images/${item.image[0]}`}
          alt="house"
        />
      </div>
      <div className="p-4 ">
        <span className="text-black font-bold text-xl">$ {item.price}</span>
        <p className="text-gray text-sm my-3 line-clamp-2 ">
          {`${item.region} - ${item.city}`} <br/>
          {item.address}
        </p>
        <div className="flex justify-between gap-1 ">
          <div className="flex group items-center py-2 px-4 bg-white transition hover:bg-blue rounded-lg">
            <MdBathtub className="text-blue group-hover:text-white text-2xl mr-2" />
            <span className="text-black group-hover:text-white text-sm font-medium">
            {item.bathroom}
            </span>
          </div>
          <div className="flex group  items-center py-2 px-4 bg-white transition hover:bg-yellow-500 rounded-lg">
            <MdKingBed className="text-yellow-500 group-hover:text-white text-2xl mr-2" />
            <span className="text-black group-hover:text-white text-sm font-medium">
              {item.rooms}
            </span>
          </div>
          <div className="flex group items-center py-2 px-4 bg-white transition hover:bg-green-500 rounded-lg">
            <RiRulerFill className="text-green-500 group-hover:text-white text-2xl mr-2" />
            <span className="text-black group-hover:text-white text-sm font-medium">
              {item.area}m
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateItem;
