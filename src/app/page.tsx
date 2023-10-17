"use client";
import Image from "next/image";
import WorkpaLogo from ".//WokpaLogo.png";
import Waveform from ".//waveform.png";
import star from ".//stars.png";
import badge from ".//badge.png";
import microphone from ".//microphone.png";
import heart from ".//heart.png";
import list from ".//list.png";
import plus from ".//plus.png";
import vector from ".//Vector.png";
import playlist from ".//playlist.png";
import recent from ".//recent.png";
import subcription from ".//subscription.png";
import podcast from ".//podcast.png";
import advert from ".//advert.png";
import blog from ".//blog.png";
import mobile from ".//mobile.png";
import search from ".//search.png";
import star1 from ".//star1.png";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex ">
      <div className="bg-zinc-800 w-1/4 h-screen p-4 overflow-auto">
        <Image src={WorkpaLogo} alt="" />

        <div className="py-5">
          <div className="text-white flex-col space-y-5 text-lg font-bold mb-4">
            <div className="flex  gap-1">
              <Image src={Waveform} alt="" /> <p className="">Discover</p>
            </div>
            <div className="flex  gap-1">
              <Image src={star} alt="" /> <p className="">Top 50 podcasts</p>
            </div>
            <div className="flex  gap-1">
              <Image src={badge} alt="" /> <p className="">Categories</p>
            </div>
            <div className="flex  gap-1">
              <Image src={microphone} alt="" />{" "}
              <p className="">Add your podcast</p>
            </div>
          </div>
        </div>

        <div
          className="cursor-pointer flex justify-center items-center gap-2 "
          onClick={toggleDropdown}
        >
          <p>Your Library</p> <Image className="w-2 h-2" src={vector} alt="" />
        </div>
        <div className="flex justify-center items-center cursor-pointer mb-16">
          {isOpen && (
            <div className=" w-32 p-4 flex justify-center items-center gap-3 ">
              <div>
                <Image src={heart} alt="" />
              </div>
              <div>
                <Image src={list} alt="" />
              </div>
              <div>
                <Image src={plus} alt="" />
              </div>
            </div>
          )}
        </div>

        <div className="text-white flex-col space-y-5 text-lg font-bold mb-4">
          <div className="flex  gap-1">
            <Image src={playlist} alt="" /> <p className="">Your playlist</p>
          </div>
          <div className="flex  gap-1">
            <Image src={recent} alt="" /> <p className="">Recently played</p>
          </div>
          <div className="flex  gap-1">
            <Image src={subcription} alt="" />{" "}
            <p className="">Subscription & Hosts</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="text-white flex-col space-y-5 text-lg font-bold mb-4">
          <div className="flex  gap-1">
            <Image src={blog} alt="" /> <p className="">Wokpa for podcasters</p>
          </div>
          <div className="flex  gap-1">
            <Image src={recent} alt="" />{" "}
            <p className="">Wokpa for advertisers</p>
          </div>
          <div className="flex  gap-1">
            <Image src={subcription} alt="" />{" "}
            <p className="">Read our blogs</p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-800 w-3/4 h-16 p-4">
        <nav className="flex justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by podcast Name"
              className="pl-10 pr-2 py-1 rounded-md w-full"
            />
            <Image
              src={search}
              alt=""
              className="absolute right-2 top-1/2 bottom-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[197px] h-[42px] bg-black rounded-[18px] shadow flex justify-center items-center">
              <Image src={mobile} alt="" />
              <button className="">Download the app</button>
            </div>
            <button className="w-[120px] h-[42px] bg-teal-500 rounded-xl">
              Signup
            </button>
            <button className="w-[120px] h-[42px] rounded-xl border border-white">
              Login
            </button>
          </div>
        </nav>

        <div className=" bg-neutral-800">
          <div className="p-5">
            <p>
              <Image src={star1} alt="" />{" "}
              <div className="text-white text-[28px] font-bold font-['Euclid Circular A'] leading-tight">
                Pick of the week
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
