import { useEffect } from "react";
import { useState } from "react";

const RandomColor = () => {
  const [typeofColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function utility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleHexColorGenerator() {
    // #000000
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[utility(hex.length)];
    }

    setColor(hexColor);
    console.log(hexColor);
  }

  function handleRGBColorGenrator() {
    const r = utility(256);
    const g = utility(256);
    const b = utility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() =>{},[])

  return (
    <div style={{ backgroundColor: color }} className="h-screen flex flex-col">
      <div className="flex justify-evenly p-4">
        <button
          onClick={() => setTypeOfColor("hex")}
          className=" bg-black text-white font-bold py-2 px-4 rounded"
        >
          Hex Color Generator
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className=" bg-black text-white font-bold py-2 px-4 rounded"
        >
          RGB Color Generator
        </button>
        <button
          onClick={
            typeofColor === "hex"
              ? handleHexColorGenerator
              : handleRGBColorGenrator
          }
          className="bg-black text-white font-bold py-2 px-4 rounded"
        >
          Random Color Generator
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection : "column",
          gap : "20px"
        }}
      >
        <h3>{typeofColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
