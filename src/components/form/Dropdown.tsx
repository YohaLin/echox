import clsx from "clsx";
import React from "react";
import { formButtonStyle } from "../../constants/buttonStyle";
import { menuList } from "../../constants/menuList";

interface DropdownProps {
  menu: number;
  setMenu: (menu: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ menu, setMenu }) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label className="text-[1.125rem] text-green-500" htmlFor="menu5">
        側邊選單標題
      </label>
      <select
        name="side-menu"
        id="side-menu"
        className={clsx("cursor-pointer", formButtonStyle)}
        onChange={(e) => setMenu(Number(e.target.value))}
        value={menu}
      >
        {menuList.map((item) => (
          <option value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
