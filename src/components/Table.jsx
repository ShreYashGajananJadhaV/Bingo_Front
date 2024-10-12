import React from "react";
import { useContext, useEffect } from "react";
import MessageContext from "./MessageContext";

function Table() {
  const { message, stompClient, setNum, Num, connected, name, groupId } =
    useContext(MessageContext);

  const handleClick = (id) => {
    const element = document.getElementById(id);

    if (connected) {
      stompClient.send(
        "/app/sendToUser",
        {},
        JSON.stringify({
          sender: name,
          groupId: groupId,
          message: element.textContent,
        })
      );
    }

    if (element != null && element.textContent === "") {
      element.textContent = Num;
      setNum(Num + 1);
    } else {
      console.log("ele is null");
    }
  };

  useEffect(() => {
    if (message) {
      alert("Message recieved is --" + message);
    }
  }, [message]);

  return (
    <div class="flex flex-col gap-2 flex-wrap bg-violet-300 items-center p-6">
      <div className="flex flex-row gap-2">
        <div class="h-10 w-10 sm:h-20 sm:w-20 border p-1 text-center  bg-blue-500 text-2xl sm:text-6xl text-white rounded-sm">
          B
        </div>

        <div class="h-10 w-10 sm:h-20 sm:w-20 border p-1 text-center  text-2xl sm:text-6xl bg-blue-500 text-white rounded-sm">
          I
        </div>

        <div class="h-10 w-10 sm:h-20 sm:w-20 border p-1 text-center  text-2xl sm:text-6xl bg-blue-500 text-white rounded-sm">
          N
        </div>
        <div class="h-10 w-10 sm:h-20 sm:w-20 border p-1 text-center  text-2xl sm:text-6xl bg-blue-500 text-white rounded-sm">
          G
        </div>
        <div class="h-10 w-10 sm:h-20 sm:w-20 border p-1 text-center  text-2xl sm:text-6xl bg-blue-500 text-white rounded-sm">
          O
        </div>
      </div>
      <div className="flex flex-row gap-2">
        {" "}
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1 text-center text-xl sm:text-4xl rounded-sm"
          id="1"
          onClick={() => handleClick(1)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="2"
          onClick={() => handleClick(2)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="3"
          onClick={() => handleClick(3)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="4"
          onClick={() => handleClick(4)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="5"
          onClick={() => handleClick(5)}
        ></div>
      </div>
      <div className="flex flex-row gap-2">
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="6"
          onClick={() => handleClick(6)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="7"
          onClick={() => handleClick(7)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="8"
          onClick={() => handleClick(8)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="9"
          onClick={() => handleClick(9)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="10"
          onClick={() => handleClick(10)}
        ></div>
      </div>
      <div className="flex flex-row gap-2">
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="11"
          onClick={() => handleClick(11)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="12"
          onClick={() => handleClick(12)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 border p-1  text-xl sm:text-4xl text-center"
          id="13"
          onClick={() => handleClick(13)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 text-xl sm:text-4xl  border p-1 text-center"
          id="14"
          onClick={() => handleClick(14)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl  border p-1 text-center"
          id="15"
          onClick={() => handleClick(15)}
        ></div>
      </div>
      <div className="flex flex-row gap-2">
        <div
          class="h-10 w-10 sm:h-16 sm:w-20 text-xl sm:text-4xl  border p-1 text-center"
          id="16"
          onClick={() => handleClick(16)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center"
          id="17"
          onClick={() => handleClick(17)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  border  text-xl sm:text-4xl p-1 text-center"
          id="18"
          onClick={() => handleClick(18)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  border p-1  text-xl sm:text-4xl text-center"
          id="19"
          onClick={() => handleClick(19)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center"
          id="20"
          onClick={() => handleClick(20)}
        ></div>
      </div>
      <div className="flex flex-row gap-2">
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center"
          id="21"
          onClick={() => handleClick(21)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center"
          id="22"
          onClick={() => handleClick(22)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center"
          id="23"
          onClick={() => handleClick(23)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center"
          id="24"
          onClick={() => handleClick(24)}
        ></div>
        <div
          class="h-10 w-10 sm:h-16 sm:w-20  text-xl sm:text-4xl border p-1 text-center"
          id="25"
          onClick={() => handleClick(25)}
        ></div>
      </div>
    </div>
  );
}
export default Table;
