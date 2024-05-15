
import CardOne from "../components/CardOne";
import { cardList } from "../constants/cardList";

const Rwd1 = () => {

  return (
    <div className="w-full h-auto p-[15px] lg:p-10">
      <div className="w-full h-auto mx-auto lg:w-fit">
        {/* 卡片 container：grid 排版 */}
        <div className="grid grid-cols-2 gap-x-[10px] gap-y-5 lg:grid-cols-3 lg:gap-x-5">
          {/* 卡片 */}
          {cardList.map((card) => (
            <CardOne card={card} key={card.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rwd1;
