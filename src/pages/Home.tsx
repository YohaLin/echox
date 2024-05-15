import carousel from "../assets/carousel.svg";

const Home = () => {
  return (
    <div className="flex relative w-full h-screen bg-home">
      <div className="absolute top-0 left-0 flex w-full h-[46px] bg-repeat overflow-hidden">
        <img src={carousel} alt="" className="h-[46px] animate-scrollRight" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollRight" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollRight" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollRight" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollRight" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollRight" />
      </div>
      <div className="absolute bottom-0 left-0 flex w-full h-[46px] bg-repeat overflow-hidden">
        <img src={carousel} alt="" className="h-[46px] animate-scrollLeft" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollLeft" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollLeft" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollLeft" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollLeft" />
        <img src={carousel} alt="" className="h-[46px] animate-scrollLeft" />
      </div>

      <div className="flex flex-col w-fit h-fit bg-transparent m-auto">
        <p className="bg-transparent outlined-text text-[50px] font-extrabold">前端切版面試考題</p>
      </div>
    </div>
  );
};

export default Home;
