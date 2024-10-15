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
    <div className="flex flex-col  flex-wrap gap-2 items-center p-6">
      <div className="flex flex-row gap-2">
        <div class="h-10 w-10 shadow-lg sm:h-20 sm:w-20 border p-1 text-center text-2xl sm:text-6xl bg-blue-500 text-white rounded-lg">
          B
        </div>

        <div class="h-10 w-10 sm:h-20 sm:w-20 border p-1 text-center  text-2xl sm:text-6xl bg-blue-500 text-white rounded-lg">
          I
        </div>

        <div class="h-10 w-10 sm:h-20 sm:w-20 border p-1 text-center  text-2xl sm:text-6xl bg-blue-500 text-white rounded-lg">
          N
        </div>
        <div class="h-10 w-10 sm:h-20 sm:w-20 border p-1 text-center  text-2xl sm:text-6xl bg-blue-500 text-white rounded-lg">
          G
        </div>
        <div class="h-10 w-10 sm:h-20 sm:w-20 border p-1 text-center  text-2xl sm:text-6xl bg-blue-500 text-white rounded-lg">
          O
        </div>
      </div>
      <div className="flex flex-row gap-2">
        {" "}
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1 text-center text-xl sm:text-4xl rounded-xl sm:rounded-2xl"
          id="1"
          onClick={() => handleClick(1)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="2"
          onClick={() => handleClick(2)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="3"
          onClick={() => handleClick(3)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="4"
          onClick={() => handleClick(4)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="5"
          onClick={() => handleClick(5)}
        ></button>
      </div>
      <div className="flex flex-row gap-2">
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl "
          id="6"
          onClick={() => handleClick(6)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="7"
          onClick={() => handleClick(7)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl "
          id="8"
          onClick={() => handleClick(8)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="9"
          onClick={() => handleClick(9)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="10"
          onClick={() => handleClick(10)}
        ></button>
      </div>
      <div className="flex flex-row gap-2">
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="11"
          onClick={() => handleClick(11)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="12"
          onClick={() => handleClick(12)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="13"
          onClick={() => handleClick(13)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 text-xl sm:text-4xl  border p-1 text-center rounded-xl sm:rounded-2xl"
          id="14"
          onClick={() => handleClick(14)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl  border p-1 text-center rounded-xl sm:rounded-2xl"
          id="15"
          onClick={() => handleClick(15)}
        ></button>
      </div>
      <div className="flex flex-row gap-2">
        <button
          class="h-10 w-10 sm:h-16 sm:w-20 text-xl sm:text-4xl  border p-1 text-center rounded-xl sm:rounded-2xl"
          id="16"
          onClick={() => handleClick(16)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center rounded-xl sm:rounded-2xl"
          id="17"
          onClick={() => handleClick(17)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  border  text-xl sm:text-4xl p-1 text-center rounded-xl sm:rounded-2xl"
          id="18"
          onClick={() => handleClick(18)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  border p-1  text-xl sm:text-4xl text-center rounded-xl sm:rounded-2xl"
          id="19"
          onClick={() => handleClick(19)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center rounded-xl sm:rounded-2xl"
          id="20"
          onClick={() => handleClick(20)}
        ></button>
      </div>
      <div className="flex flex-row gap-2">
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center rounded-xl sm:rounded-2xl"
          id="21"
          onClick={() => handleClick(21)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center rounded-xl sm:rounded-2xl"
          id="22"
          onClick={() => handleClick(22)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center rounded-xl sm:rounded-2xl"
          id="23"
          onClick={() => handleClick(23)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center rounded-xl sm:rounded-2xl"
          id="24"
          onClick={() => handleClick(24)}
        ></button>
        <button
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center rounded-xl sm:rounded-2xl"
          id="25"
          onClick={() => handleClick(25)}
        ></button>
      </div>
    </div>
  );
}
export default Table;
