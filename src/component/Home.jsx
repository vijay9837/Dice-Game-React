import React from "react";
import DicePng from "../images/Game Page/dices 1.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="  h-screen flex items-center justify-center">
      <div className="w-[80%] h-[80%] bg-white  flex items-center justify-center">
        <div className="w-1/2  flex items-center justify-center">
          <img className="hover:scale-95 duration-500" src={DicePng} alt="dicepng" />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-[6rem] font-bold text-center">DICE GAME</h1>
          <button className="">
            <Link className="bg-black text-white py-2 font-bold tracking-[2px] hover:scale-95 duration-300 active:bg-gray-700  px-4 rounded-[5px]" to={"/game"}>
            PLAYGAME
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
