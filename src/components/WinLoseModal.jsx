import React, { useEffect } from "react";
import loseImage from "./sad.png";
import wonImage from "./trophy.png";
import { useState } from "react";
import loseSound from "../sounds/loseSound.mp3";
import victorySound from "../sounds/victorySound.mp3";

export default function WinLoseModal({ hasWon }) {
  const [close, setClose] = useState(false);

  const playSound = (sound) => {
    var audio = new Audio(sound);
    audio.play();
  };
  useEffect(() => {
    if (hasWon) {
      playSound(victorySound);
      console.log("victory sound played");
    } else {
      // here add the lose sound
      playSound(loseSound);
      console.log("lose sound played");
    }
  }, []);

  return (
    <div>
      <audio>
        <source src="../sounds/victorySound.mp3" type="audio/mpeg" />
      </audio>
      {!close ? (
        <div className=" font-sans flex justify-evenly fixed top-0 left-0 w-full h-full z-40 ">
          <div className="relative m-auto w-[300px] h-[400px] rounded-2xl text-white p-5 border-2 border-teal-500 border-double bg-gray-800 backdrop-blur-3xl">
            <img
              src={hasWon ? wonImage : loseImage}
              className="w-[200px] h-[200px] mx-auto m-5"
            ></img>
            <h1 className="text-3xl text-teal-500 font-bold text-center">
              {hasWon ? "WINNER !" : "YOU LOST !"}
            </h1>
            <p className="text-slate-400 font-semibold text-center">
              {!hasWon
                ? "Better luck next time."
                : "Hurray ! You won the game."}
            </p>
            <button
              className="absolute bottom-5 btn btn-primary w-[255px] text-white"
              onClick={() => {
                setClose(true);
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
