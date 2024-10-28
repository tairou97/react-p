import { useState } from "react";
import "./App.css";
import Card from "./componets/Card";
function App() {
  return (
    <div className=" ">
      <h1 className=" text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind CSS
      </h1>
      <Card username="Tairou" />
      <Card username="DreamTeam" position="Full Stack Developer" />
    </div>
  );
}

export default App;
