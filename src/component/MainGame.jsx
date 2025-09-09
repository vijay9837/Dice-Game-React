import React from "react";
import { dice1, dice2, dice3, dice4, dice5, dice6 } from "./index";
import { Link } from "react-router";

function MainGame() {
  const [dice, setDice] = React.useState(dice1);
  const [score, setScore] = React.useState(0);
  const [isChoseNumber, setIsChoseNumber] = React.useState(false);

  let value = null;
  const chosenumber = (e) => {
    value = e.target.value;
  };

  const rollDice = () => {
    if (value === null) {
      setIsChoseNumber((prev) => !prev);
      setTimeout(() => {
        setIsChoseNumber(false);
      }, 2000);
    } else {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      if (randomNumber === 1) {
        setDice(dice1);
      } else if (randomNumber === 2) {
        setDice(dice2);
      } else if (randomNumber === 3) {
        setDice(dice3);
      } else if (randomNumber === 4) {
        setDice(dice4);
      } else if (randomNumber === 5) {
        setDice(dice5);
      } else if (randomNumber === 6) {
        setDice(dice6);
      }

      if (
        value === "1" ||
        value === "2" ||
        value === "3" ||
        value === "4" ||
        value === "5" ||
        value === "6"
      ) {
        if (randomNumber == value) {
          setScore(score + 2);
        } else {
          setScore(score - 2);
        }
      }
    }
  };

  const resetgame = () => {
    setScore(0);
    setDice(dice1);
  };

  const [isShowRules, setIsShowRules] = React.useState(false);
  const showRules = () => {
    setIsShowRules((prev) => !prev);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-between items-center">
      <header className="flex w-full h-2/10 justify-around items-center ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[7rem] font-bold text-black mb-[-20px] ">
            {score}
          </h1>
          <p className="font-bold text-black">TOTAL SCORE</p>
        </div>
        <div className="">
          <div>
            {isChoseNumber ? (
              <div className="bg-red-100 absolute top-5 left-6/10 text-[20px]  tracking-[2px] px-3 py-1 ">
                Please Chise Any Number
              </div>
            ) : null}
          </div>
          <div className="flex flex-row justify-between gap-x-4 ">
            <button
              type="number"
              onClick={chosenumber}
              value="1"
              className="px-6 py-3  text-[30px] font-bold bg-white text-black border border-black focus:bg-black  focus:text-white hover:shadow-xl duration-300"
            >
              1
            </button>
            <button
              type="number"
              onClick={chosenumber}
              value="2"
              className="px-6 py-3 text-[30px] font-bold bg-white text-black border border-black focus:bg-black focus:text-white hover:shadow-xl duration-300"
            >
              2
            </button>
            <button
              type="number"
              onClick={chosenumber}
              value="3"
              className="px-6 py-3 text-[30px] font-bold bg-white text-black border border-black focus:bg-black focus:text-white hover:shadow-xl duration-300"
            >
              3
            </button>
            <button
              type="number"
              onClick={chosenumber}
              value="4"
              className="px-6 py-3 text-[30px] font-bold bg-white text-black border border-black focus:bg-black focus:text-white hover:shadow-xl duration-300"
            >
              4
            </button>
            <button
              type="number"
              onClick={chosenumber}
              value="5"
              className="px-6 py-3 text-[30px] font-bold bg-white text-black border border-black focus:bg-black focus:text-white hover:shadow-xl duration-300"
            >
              5
            </button>
            <button
              type="number"
              onClick={chosenumber}
              value="6"
              className="px-6 py-3 text-[30px] font-bold bg-white text-black border border-black focus:bg-black focus:text-white hover:shadow-xl duration-300"
            >
              6
            </button>
          </div>
          <div>
            <p className="w-full text-right font-bold text-[20px]">
              {" "}
              SELECT ANY NUMBER
            </p>
          </div>
        </div>
      </header>
      <main className="h-[400px] w-2/10 p-2  flex flex-col justify-between items-center">
        <div>
          <img
            className="hover:shadow-2xl duration-300 "
            src={dice}
            onClick={rollDice}
            alt=""
          />
          <p className="font-bold text-black w-full text-center duration-200 uppercase">
            Click on dice to roll
          </p>
        </div>
        <div className="flex flex-col gap-y-2  justify-between ">
          <button
            onClick={resetgame}
            className="py-2 px-6 bg-white border text-black"
          >
            RESET GAME
          </button>
          <button
            onClick={showRules}
            className="py-2 px-6 bg-black border text-white"
          >
            SHOW RULES
          </button>
        </div>
      </main>
      {isShowRules ? (
        <div className="bg-red-100 p-4 rounded-[5px]">
          <h1 className="font-bold text-[20px]">How to play dice game</h1>
          <div>
            <p>1.Select any number</p>
            <p>
              2.after click on dice if selected number is equal to dice number
              you will get same point as dice
            </p>
            <p>3.if you get wrong guess then 2 point will be dedcuted </p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="h-2/10 w-8/10 flex justify-end">
        <button className="">
          <Link
            className="bg-red-600 text-white py-2 font-bold tracking-[2px] hover:scale-95 duration-300 active:bg-gray-700  px-4 rounded-[5px]"
            to={"/"}
          >
            Quit Game
          </Link>
        </button>
      </div>
    </div>
  );
}

export default MainGame;
