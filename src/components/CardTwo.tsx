import React from "react";
import CardButton from "./CardButton";
import { Button } from "../constants/enums";
import clsx from "clsx";

interface CardTwoProps {
  style: string;
}

const CardTwo: React.FC<CardTwoProps> = ({ style }) => {
  return (
    <div
      className={clsx(
        "relative flex flex-col justify-center gap-3 w-[280px] h-[280px] border-primary p-[50px]",
        style
      )}
    >
      {/* 三角形 */}
      <div className="absolute top-0 left-0 w-0 h-0 border-solid border-r-[100px] border-t-[100px] border-r-transparent border-t-green-500 bg-transparent"></div>
      <p className="absolute top-8 left-2 text-gray-800 bg-transparent text-[12px] leading-[14.63px] -rotate-45">
        Tag Name
      </p>

      {/* 文字：標題超過兩行，尾巴要... */}
      <div className="flex flex-col w-full h-fit gap-[5px]">
        <p className="leading-[23.68px] font-bold line-clamp-2">
          超過兩行的文字的標題尾巴要顯示，超過兩行的 ...
        </p>
        <p className="text-green-500 font-medium text-[14px] leading-[17.07px]">
          小標文字
        </p>
        <p className="text-gray-500 font-medium text-[14px] leading-[17.07px]">
          描述文字
        </p>
      </div>

      {/* 按鈕：加上 hover 樣式 */}
      <CardButton buttonType={Button.two} />
    </div>
  );
};

export default CardTwo;
