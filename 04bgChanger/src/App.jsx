import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      {" "}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-green-600"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-blue-500"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white  bg-purple-500"
          >
            Purple
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-orange-500"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("HotPink")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-rose-400"
          >
            HotPink
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white bg-black"
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black  bg-white"
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
