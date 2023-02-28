import { Link } from "react-router-dom";

const CryptoCards = ({ rank, icon, name, symbol, price, change, cap }) => {
  const xxxds = "text-red-700";
  return (
    <div className="rounded-lg relative w-full backdrop-blur-[20px] bg-[#ffffff33] m-5 p-0.5 h-16 flex items-center justify-between">
      <input type={"checkbox"} className="flex-1"></input>
      <p className="flex-1">{rank}</p>
      <div className="flex-1">
        <Link to="#" className="flex">
          <img src={icon} className="w-7"></img>
          <h1 className="m-0.5 p-0.5">{name}</h1>
        </Link>
      </div>
      <p className="flex-1 text-right">
        {Math.round(parseFloat(price, 10) * Math.pow(10, 5)) / Math.pow(10, 5)}
      </p>
      <p className={xxxds + " flex-1 text-right"}>{change + "%"}</p>
      <p className="flex-1 text-right">{cap}</p>
    </div>
  );
};

export default CryptoCards;