import React from "react";

function Table() {
  var num = 1;

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element != null && element.textContent === "") {
      element.textContent = num++;
    } else {
      console.log("ele is null");
    }
  };

  return (
    <div class="grid grid-cols-5 gap-1 grid-rows-6 w-full h-full ">
      <div className="border p-2 text-center bg-blue-500 text-white rounded-sm flex-1">
        B
      </div>
      <div className="border p-2 text-center bg-blue-500 text-white rounded-sm flex-1">
        I
      </div>
      <div className="border p-2 text-center bg-blue-500 text-white rounded-sm flex-1">
        N
      </div>
      <div className="border p-2 text-center bg-blue-500 text-white rounded-sm flex-1">
        G
      </div>
      <div className="border p-2 text-center bg-blue-500 text-white rounded-sm flex-1">
        O
      </div>
      <div
        class="border p-2 text-center  rounded-sm flex-1"
        id="1"
        onClick={() => handleClick(1)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="2"
        onClick={() => handleClick(2)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="3"
        onClick={() => handleClick(3)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="4"
        onClick={() => handleClick(4)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="5"
        onClick={() => handleClick(5)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="6"
        onClick={() => handleClick(6)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="7"
        onClick={() => handleClick(7)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="8"
        onClick={() => handleClick(8)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="9"
        onClick={() => handleClick(9)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="10"
        onClick={() => handleClick(10)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="11"
        onClick={() => handleClick(11)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="12"
        onClick={() => handleClick(12)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="13"
        onClick={() => handleClick(13)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="14"
        onClick={() => handleClick(14)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="15"
        onClick={() => handleClick(15)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="16"
        onClick={() => handleClick(16)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="17"
        onClick={() => handleClick(17)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="18"
        onClick={() => handleClick(18)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="19"
        onClick={() => handleClick(19)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="20"
        onClick={() => handleClick(20)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="21"
        onClick={() => handleClick(21)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="22"
        onClick={() => handleClick(22)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="23"
        onClick={() => handleClick(23)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="24"
        onClick={() => handleClick(24)}
      ></div>
      <div
        class="border p-2 text-center flex-1"
        id="25"
        onClick={() => handleClick(25)}
      ></div>
    </div>
  );
}
export default Table;
