import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeofcolor, setTypeofcolor] = useState("hex");
  const [Color, setColor] = useState("#000000");

  function handleCreateRandomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[handleCreateRandomUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = handleCreateRandomUtility(256);
    const g = handleCreateRandomUtility(256);
    const b = handleCreateRandomUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeofcolor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeofcolor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: Color,
      }}
    >
      <h1
        style={{
          fontSize: "100px",
          margin: "30px",
          fontStyle: "italic",
          fontWeight: "100",
        }}
      >
        Random Color Generator
      </h1>
      <button
        onClick={() => {
          setTypeofcolor("hex");
        }}
        style={{
          padding: "20px",
          fontSize: "20px",
          color: "black",
          backgroundColor: "grey",
          borderRadius: "25px",
          margin: "30px",
          cursor: "pointer",
        }}
      >
        Create HEX Color
      </button>
      <button
        onClick={() => {
          setTypeofcolor("rgb");
        }}
        style={{
          padding: "20px",
          fontSize: "20px",
          color: "black",
          backgroundColor: "grey",
          borderRadius: "25px",
          margin: "30px",
          cursor: "pointer",
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={() => {
          if (typeofcolor === "hex") {
            handleCreateRandomHexColor();
          } else {
            handleCreateRandomRgbColor();
          }
        }}
        style={{
          padding: "20px",
          fontSize: "20px",
          color: "black",
          backgroundColor: "grey",
          borderRadius: "25px",
          margin: "30px",
          cursor: "pointer",
        }}
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "50px",
          marginTop: "100px",
          flexDirection: "column",
        }}
      >
        <h3>{typeofcolor === "hex" ? "HEX Color:" : "RGB Color:"}</h3>
        <h1>{Color}</h1>
      </div>
    </div>
  );
}
