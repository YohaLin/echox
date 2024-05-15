import clsx from "clsx";
import arrow from "../assets/arrow.svg";
import { Button } from "../constants/enums";

interface CardButtonProps {
  buttonType: number;
}

const CardButton: React.FC<CardButtonProps> = ({ buttonType }) => {
  return (
    <button
      className={clsx(
        "flex justify-center items-center gap-[5px] w-full border-primary rounded-[4px]",
        "group transition duration-500 hover:-translate-y-1 active:translate-y-0",
        {
          "h-10 lg:flex-1 px-11 py-3 lg:gap-[10px]": buttonType === Button.one,
          "h-10": buttonType === Button.two,
        }
      )}
      type="button"
    >
      <span
        className={clsx("text-green-500", {
          "text-[14px] leading-[20.72px] lg:text-md lg:leading-[23.68px]":
            buttonType === Button.one,
          "text-md leading-[23.68px]": buttonType === Button.two,
        })}
      >
        置底按鈕
      </span>
      <img src={arrow} alt="arrow" className="w-[25px] h-[25px]" />
    </button>
  );
};

export default CardButton;
