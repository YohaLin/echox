import React, { useState } from "react";
import { CardOneType } from "../types/card";
import CardButton from "./CardButton";
import { Button } from "../constants/enums";

interface CardOneProps { card: CardOneType }

const CardOne: React.FC<CardOneProps> = ({ card }) => {
  const [image, setImage] = useState(card.image);

  // 模擬 hover <img> 時換圖片
  const handleMouseEnter = () => {
    setImage(card.imageHovered);
  };

  // 模擬非 hover <img> 時換回原圖片
  const handleMouseLeave = () => {
    setImage(card.image);
  };

  return (
    <div className="flex flex-col gap-[15px] lg:gap-3 w-full h-full border-primary rounded-[4px] p-[10px] lg:w-[280px] lg:p-[30px]">
      <div className="flex flex-col gap-3 flex-1 w-full h-full">
        {/* 圖片：等比縮放 */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt="square"
            className="w-full aspect-square bg-white transition duration-300 hover:scale-[1.05]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        {/* 文字：標題超過兩行，尾巴要... */}
        <div className="flex flex-col w-full h-fit gap-[5px] lg:h-[92px]">
          <h3 className="line-clamp-2">{card.title}</h3>
          <p className="text-green-500 font-medium text-[13px] leading-[15.85px] lg:text-[0.875rem] lg:leading-[17.07px]">
            {card.subTitle}
          </p>
          <p className="text-gray-500 font-medium text-[13px] leading-[15.85px] lg:text-[0.875rem] lg:leading-[17.07px]">
            {card.description}
          </p>
        </div>
      </div>

      {/* 按鈕：加上 hover 樣式 */}
      <CardButton buttonType={Button.one} />
    </div>
  );
};

export default CardOne;
