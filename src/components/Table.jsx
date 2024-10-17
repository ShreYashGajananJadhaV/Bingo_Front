import React from "react";
import { useContext, useEffect } from "react";
import MessageContext from "./MessageContext";

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
  } = useContext(MessageContext);

  const handleClick = (id) => {
    const element = document.getElementById(id);

    if (connected) {
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
    } else if (element != null && element.textContent === "") {
      element.textContent = Num;
      setNum(Num + 1);

      const newConst = id;
      const newValue = element.textContent;

      setConstValMap((prevMap) => ({ ...prevMap, [newConst]: newValue }));
    }
  };

  useEffect(() => {
    if (message) {
      const element = document.getElementById(message);
      element.setAttribute("data-theme", "retro");
      element.style.filter = "blur(3px)";
      element.disabled = true;
    }
  }, [message]);

  return (
    <div className="flex flex-col flex-wrap gap-2 items-center p-6 ">
      <div className="flex flex-row gap-2  justify-center md:flex-wrap">
        <div className=" h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-blue-500 text-white rounded-lg font-mono">
          B
        </div>
        <div className=" h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-blue-500 text-white rounded-lg font-mono">
          I
        </div>
        <div className=" h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-blue-500 text-white rounded-lg font-mono">
          N
        </div>
        <div className=" h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-blue-500 text-white rounded-lg font-mono">
          G
        </div>
        <div className=" h-14 w-14 md:h-20 md:w-24 border p-1 flex justify-center items-center text-3xl  md:text-5xl sm:rounded-2xl bg-blue-500 text-white rounded-lg font-mono">
          O
        </div>
      </div>
      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="1"
          onClick={() => handleClick(1)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="2"
          onClick={() => handleClick(2)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="3"
          onClick={() => handleClick(3)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="4"
          onClick={() => handleClick(4)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="5"
          onClick={() => handleClick(5)}
        ></button>
      </div>
      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="6"
          onClick={() => handleClick(6)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="7"
          onClick={() => handleClick(7)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="8"
          onClick={() => handleClick(8)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="9"
          onClick={() => handleClick(9)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="10"
          onClick={() => handleClick(10)}
        ></button>
      </div>
      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="11"
          onClick={() => handleClick(11)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="12"
          onClick={() => handleClick(12)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="13"
          onClick={() => handleClick(13)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="14"
          onClick={() => handleClick(14)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="15"
          onClick={() => handleClick(15)}
        ></button>
      </div>

      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="16"
          onClick={() => handleClick(16)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="17"
          onClick={() => handleClick(17)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="18"
          onClick={() => handleClick(18)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="19"
          onClick={() => handleClick(19)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="20"
          onClick={() => handleClick(20)}
        ></button>
      </div>
      <div className="flex flex-row gap-2 justify-center md:flex-wrap">
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="21"
          onClick={() => handleClick(21)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="22"
          onClick={() => handleClick(22)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="23"
          onClick={() => handleClick(23)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="24"
          onClick={() => handleClick(24)}
        ></button>
        <button
          className=" h-14 w-14 md:h-20 md:w-24 border p-1 text-center text-3xl  md:text-5xl rounded-xl sm:rounded-2xl font-mono transform active:scale-90 transition-transform"
          id="25"
          onClick={() => handleClick(25)}
        ></button>
      </div>
    </div>
  );
}
export default Table;
