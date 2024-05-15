import { useState } from "react";
import CardTwo from "../components/CardTwo";

const Rwd2 = () => {
  const [method, setMethod] = useState({id: 1, text: "absolute + transform"});

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 z-10 flex flex-col gap-4">
        <p className="w-full text-center"> 方式 {method.id}：「{method.text}」</p>

        <div className="flex">
          <button onClick={() => setMethod({id: 1, text: "absolute + transform"})}>1</button>
          <button onClick={() => setMethod({id: 2, text: "flex"})}>2</button>
          <button onClick={() => setMethod({id: 3, text: "flex + margin auto"})}>3</button>
          <button onClick={() => setMethod({id: 4, text: "grid"})}>4</button>
        </div>
      </div>

      {method.id === 1 ? (
        // absolute + transform
        <div className="w-full h-screen">
          <CardTwo style="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      ) : method.id === 2 ? (
        // flex
        <div className="flex justify-center items-center w-full h-screen">
          <CardTwo style="" />
        </div>
      ): method.id === 3 ? (
        // flex + margin auto
        <div className="flex w-full h-screen">
          <CardTwo style="m-auto" />
        </div>
      ):  (
        // grid
        <div className="grid place-content-center w-full h-screen">
          <CardTwo style="" />
        </div>
      ) }
    </div>
  );
};

export default Rwd2;
