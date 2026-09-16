// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <div
//       className="w-full h-screen duration-200"
//       style={{ backgroundColor: color }}>
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-teal-200 px-3 py-2 rounded-2xl">
//           <button
//             onClick={() => setColor("red")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-red-400"
//             style={{ backgroundColor: "red" }}>
//             Red
//           </button>
//           <button
//             onClick={() => setColor("green")}
//             className="outline-none px-4 py-1 rounded-full text-black shadow-green-400"
//             style={{ backgroundColor: "green" }}>
//             Green
//           </button>
//           <button
//             onClick={() => setColor("blue")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-blue-400"
//             style={{ backgroundColor: "blue" }}>
//             Blue
//           </button>
//           <button
//             onClick={() => setColor("purple")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-purple-400"
//             style={{ backgroundColor: "purple" }}>
//             Purple
//           </button>
//           <button
//             onClick={() => setColor("darkgray")}
//             className="outline-none px-4 py-1 rounded-full text-black shadow-gray-400"
//             style={{ backgroundColor: "darkgray" }}>
//             Dark Gray
//           </button>
//           <button
//             onClick={() => setColor("orange")}
//             className="outline-none px-4 py-1 rounded-full text-black shadow-orange-400"
//             style={{ backgroundColor: "orange" }}>
//             Orange
//           </button>
//           <button
//             onClick={() => setColor("deeppink")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-pink-400"
//             style={{ backgroundColor: "deeppink" }}>
//             Pink
//           </button>
//           <button
//             onClick={() => setColor("skyblue")}
//             className="outline-none px-4 py-1 rounded-full text-black shadow-blue-400"
//             style={{ backgroundColor: "skyblue" }}>
//             SkyBlue
//           </button>
//           <button
//             onClick={() => setColor("teal")}
//             className="outline-none px-4 py-1 rounded-full text-white shadow-teal-400"
//             style={{ backgroundColor: "teal" }}>
//             Teal
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  const colors = [
    {
      name: "Red",
      value: "red",
      text: "text-white",
      shadow: "shadow-red-400",
    },
    {
      name: "Green",
      value: "green",
      text: "text-white",
      shadow: "shadow-green-400",
    },
    {
      name: "Blue",
      value: "blue",
      text: "text-white",
      shadow: "shadow-blue-400",
    },
    {
      name: "Purple",
      value: "purple",
      text: "text-white",
      shadow: "shadow-purple-400",
    },
    {
      name: "Dark Gray",
      value: "darkgray",
      text: "text-white",
      shadow: "shadow-gray-400",
    },
    {
      name: "Orange",
      value: "orange",
      text: "text-black",
      shadow: "shadow-orange-400",
    },
    {
      name: "Pink",
      value: "deeppink",
      text: "text-white",
      shadow: "shadow-pink-400",
    },
    {
      name: "Sky Blue",
      value: "skyblue",
      text: "text-black",
      shadow: "shadow-sky-400",
    },
    {
      name: "Teal",
      value: "teal",
      text: "text-white",
      shadow: "shadow-teal-400",
    },
    {
      name: "Coral",
      value: "coral",
      text: "text-black",
      shadow: "shadow-orange-400",
    },
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-teal-200 px-3 py-2 rounded-2xl">
          {colors.map((colorItem) => (
            <button
              key={colorItem.value}
              onClick={() => setColor(colorItem.value)}
              className={`outline-none px-4 py-1 rounded-full ${colorItem.text} shadow-lg ${colorItem.shadow}`}
              style={{ backgroundColor: colorItem.value }}>
              {colorItem.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
