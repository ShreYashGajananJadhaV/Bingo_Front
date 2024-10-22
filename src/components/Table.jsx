import React from "react";
import { useContext, useEffect } from "react";
import MessageContext from "./MessageContext";
import useSound from "use-sound";
import popSound from "../sounds/popSound.mp3";
import clickSound from "../sounds/clickSound.mp3";
import pickSound from "../sounds/pickSound.mp3";

function Table() {
  const {
    message,
    stompClient,
    setNum,
    Num,
    connected,
    name,
    groupId,
    setConstValMap,
    chance,
    rowsCompleted,
    connecting,
    setChance,
  } = useContext(MessageContext);

  const [pop] = useSound(popSound);
  const [click] = useSound(clickSound);
  const [pick] = useSound(pickSound);

  const handleClick = (id) => {
    debugger;
    const element = document.getElementById(id);
    console.log("I am in handleCLick with " + id);
    if (
      connected &&
      element.getAttribute("data-theme") !== "retro" &&
      !connecting &&
      chance
    ) {
      pop();
      setChance(false);
      stompClient.send(
        "/app/sendToUser",
        {},
        JSON.stringify({
          sender: name,
          groupId: groupId,
          message: id,
        })
      );

      element.style.filter = "blur(3px)";
      element.setAttribute("data-theme", "retro");
      element.disabled = true;
    } else {
      element.textContent = Num;
      setNum(Num + 1);
      click();
      const newConst = id;
      const newValue = element.textContent;

      setConstValMap((prevMap) => ({ ...prevMap, [newConst]: newValue }));
    }
  };

  useEffect(() => {
    const bingoCells = document.querySelectorAll(".bingo-cell");

    bingoCells.forEach((cell, index) => {
      if (index < rowsCompleted) {
        // Add blur effect and change data-theme to cupcake
        cell.setAttribute("data-theme", "cupcake");
        const existingLine = cell.querySelector(".diagonal-line");
        if (!existingLine) {
          const line = document.createElement("span");
          line.className =
            "diagonal-line absolute animate-fade rounded-3xl top-1/2 left-0 w-full h-1 bg-black transform rotate-45 bg-slate-600";
          cell.appendChild(line);
        }
      } else {
        // Remove blur effect and reset data-theme if needed
        cell.setAttribute("data-theme", "default"); // Replace "default" with your actual default theme name
      }
    });
  }, [rowsCompleted]);

  useEffect(() => {
    if (
      message &&
      document.getElementById(message).getAttribute("data-theme") != "retro"
    ) {
      pick();
      const element = document.getElementById(message);
      element.setAttribute("data-theme", "retro");
      element.style.filter = "blur(3px)";
      element.disabled = true;
      element.classList.add("animate-jump");

      setTimeout(() => {
        element.classList.remove("animate-jump");
      }, 1000);
    }
  }, [message]);

  return (
    <div className="flex flex-col flex-wrap gap-2 items-center p-6 ">
      <div className="flex flex-row gap-2 justify-center md:flex-wrap font-bold relative">
        <div className="bingo-cell h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-teal-500 text-white rounded-lg font-sans relative">
          B
        </div>
        <div className="bingo-cell h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-teal-500 text-white rounded-lg font-sans relative">
          I
        </div>
        <div className="bingo-cell h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-teal-500 text-white rounded-lg font-sans relative">
          N
        </div>
        <div className="bingo-cell h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-teal-500 text-white rounded-lg font-sans relative">
          G
        </div>
        <div className="bingo-cell h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-teal-500 text-white rounded-lg font-sans relative">
          O
        </div>
      </div>

      <div class="divider"></div>

      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="1"
          onClick={() => handleClick(1)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="2"
          onClick={() => handleClick(2)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="3"
          onClick={() => handleClick(3)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="4"
          onClick={() => handleClick(4)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="5"
          onClick={() => handleClick(5)}
          disabled={!chance}
        ></button>
      </div>
      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="6"
          onClick={() => handleClick(6)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="7"
          onClick={() => handleClick(7)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="8"
          onClick={() => handleClick(8)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="9"
          onClick={() => handleClick(9)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="10"
          onClick={() => handleClick(10)}
          disabled={!chance}
        ></button>
      </div>
      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="11"
          onClick={() => handleClick(11)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="12"
          onClick={() => handleClick(12)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="13"
          onClick={() => handleClick(13)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="14"
          onClick={() => handleClick(14)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="15"
          onClick={() => handleClick(15)}
          disabled={!chance}
        ></button>
      </div>

      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="16"
          onClick={() => handleClick(16)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="17"
          onClick={() => handleClick(17)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="18"
          onClick={() => handleClick(18)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="19"
          onClick={() => handleClick(19)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="20"
          onClick={() => handleClick(20)}
          disabled={!chance}
        ></button>
      </div>
      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="21"
          onClick={() => handleClick(21)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="22"
          onClick={() => handleClick(22)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="23"
          onClick={() => handleClick(23)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="24"
          onClick={() => handleClick(24)}
          disabled={!chance}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="25"
          onClick={() => handleClick(25)}
          disabled={!chance}
        ></button>
      </div>
    </div>
  );
}
export default Table;
