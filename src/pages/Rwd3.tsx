import { FormEvent, useRef, useState } from "react";
import rwd3 from "../assets/rwd3.svg";
import FormButton from "../components/form/FormButton";
import Dropdown from "../components/form/Dropdown";
import TextInput from "../components/form/TextInput";
import { Menu } from "../constants/enums";
import SideMenu from "../components/SideMenu";

const Rwd3 = () => {
  // 假設 menuTwo 的 value 是從其他地方抓來的
  const menuTwoValue = "不可修改的欄位資料";

  const menuOneRef = useRef<HTMLInputElement>(null);
  const menuTwoRef = useRef<HTMLInputElement>(null);
  const menuThreeRef = useRef<HTMLInputElement>(null);
  const menuFourRef = useRef<HTMLInputElement>(null);
  const menuFiveRef = useRef<HTMLInputElement>(null);

  // 手機版的選單與電腦版的側邊欄要共同控制這個狀態
  const [menu, setMenu] = useState(Menu.five);
  const [errors, setErrors] = useState({
    menuOne: false,
    menuTwo: false,
    menuThree: false,
    menuFour: false,
    menuFive: false,
  });

  // 表單做驗證，回傳是否全部都填妥(boolean)
  const validateForm = () => {
    const newError = {
      menuOne: !menuOneRef.current?.value,
      menuTwo: !menuTwoRef.current?.value,
      menuThree: !menuThreeRef.current?.value,
      menuFour: !menuFourRef.current?.value,
      menuFive: !menuFiveRef.current?.value,
    };

    setErrors(newError);
    return Object.values(newError).every((e) => !e);
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 驗證表單
    if (validateForm()) {
      const formBody = {
        menuOne: menuOneRef.current?.value,
        menuTwo: menuTwoRef.current?.value,
        menuThree: menuThreeRef.current?.value,
        menuFour: menuFourRef.current?.value,
        menuFive: menuFiveRef.current?.value,
      };

      alert(JSON.stringify(formBody));
    }
  };

  return (
    <div className="w-full h-full p-5 lg:p-10">
      <div className="w-full h-full lg:w-[1000px] lg:flex lg:mx-auto">
        {/* 電腦版：左側有側邊欄 */}
        <div className="hidden sticky top-10 w-fit h-[calc(100vh-80px)] lg:flex lg:pr-[30px] lg:border-r lg:border-r-500">
          <SideMenu setMenu={setMenu} menu={menu} />
        </div>
        {/* 手機版：上方有下拉式選單 */}
        <div className="lg:hidden mb-[35px]">
          <Dropdown setMenu={setMenu}  menu={menu} />
        </div>

        {/* 表單 */}
        {menu === Menu.five && (
          <form
            className="w-full h-fit lg:w-[800px] lg:px-[60px] lg:pb-[30px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-[35px] lg:gap-10">
              <div className="flex flex-col gap-5 lg:gap-10">
                {/* 表單欄位 */}
                <div className="flex flex-col gap-5">
                  <TextInput
                    label="一般欄位"
                    disabled={false}
                    placeholder="填入欄位資料"
                    ref={menuOneRef}
                    error={errors.menuOne}
                    onChange={() => setErrors({...errors, menuOne: !menuOneRef.current?.value})}
                    required
                  />
                  <TextInput
                    label="不可修改的欄位"
                    disabled={true}
                    placeholder="填入欄位資料"
                    ref={menuTwoRef}
                    value={menuTwoValue}
                    error={errors.menuTwo}
                    onChange={() => setErrors({...errors, menuTwo: !menuTwoRef.current?.value})}
                    required
                  />
                  <TextInput
                    label="一般欄位"
                    disabled={false}
                    placeholder="填入欄位資料"
                    ref={menuThreeRef}
                    error={errors.menuThree}
                    onChange={() => setErrors({...errors, menuThree: !menuThreeRef.current?.value})}
                    required
                  />
                  <TextInput
                    label="一般欄位"
                    disabled={false}
                    placeholder="填入欄位資料"
                    ref={menuFourRef}
                    error={errors.menuFour}
                    onChange={() => setErrors({...errors, menuFour: !menuFourRef.current?.value})}
                    required
                  />
                  <TextInput
                    label="一般欄位"
                    disabled={false}
                    placeholder="填入欄位資料"
                    ref={menuFiveRef}
                    error={errors.menuFive}
                    onChange={() => setErrors({...errors, menuFive: !menuFiveRef.current?.value})}
                    required
                  />
                </div>

                {/* 說明區塊 */}
                <div className="flex flex-col gap-[10px]">
                  <p>我是不規則比例寬度區塊</p>

                  <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col gap-[15px] lg:w-[250px]">
                      <p className="text-green-500 font-bold">標題</p>
                      <p className="leading-[23.68px]">
                        其他說明文字，其他說明文字，其他說明文字，其他說明文字，其他說明文字，其他說明文字。
                      </p>
                      <p className="leading-[23.68px]">
                        外連連結樣式：
                        <a href="/rwd3/#" className="underline">
                          這裡是連結樣式喔
                        </a>
                        。
                      </p>
                    </div>

                    <img
                      src={rwd3}
                      alt=""
                      className="flex-grow border border-green-500 lg:flex-1 lg:aspect-square lg:min-w-0 lg:object-cover"
                    />

                    <div className="flex flex-col gap-[15px] lg:w-[200px]">
                      <p>補充說明標題</p>
                      <ul>
                        <li>說明文字</li>
                        <li>說明文字</li>
                        <li>說明文字</li>
                        <li>說明文字</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 按鈕們，border-top 有橫線 */}
              <div className="flex flex-col gap-5 pt-[30px] border-t-[2px] border-t-green-500 lg:flex-row-reverse lg:justify-end lg:gap-[25px] lg:pt-10">
                <FormButton type="submit" text="儲存" />
                <FormButton type="reset" text="重填" />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Rwd3;
