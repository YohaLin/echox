import React from "react";
import menuArrow from "../assets/menuArrow.svg";
import { menuList } from "../constants/menuList";

interface SideMenuProps {
  menu: number;
  setMenu: (menu: number) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ menu, setMenu }) => {
  return (
    <div className="flex flex-col gap-[10px] w-[170px] pb-[30px] border-b border-b-gray-700">
      <p className="text-[18px] text-green-500">側邊選單標題</p>
      <ul className="flex flex-col gap-[5px] w-full pl-8 list-none">
        {menuList.map((item) => {
          if (item.id !== menu) {
            return (
              <li
                value={`menu${item.id}`}
                className="text-gray-700"
                key={item.id}
              >
                <button
                  type="button"
                  className="text-start"
                  onClick={() => setMenu(item.id)}
                >
                  {item.title}
                </button>
              </li>
            );
          } else {
            return (
              <li
                value={`menu${item.id}`}
                className=" text-green-500"
                key={item.id}
              >
                <button
                  type="button"
                  className="flex justify-between items-center text-start"
                  onClick={() => setMenu(item.id)}
                >
                  {item.title}{" "}
                  <img
                    src={menuArrow}
                    alt="menuArrow"
                    className="animate-bounce w-14 h-4"
                  />
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
