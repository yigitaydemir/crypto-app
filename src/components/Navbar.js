import Logo from "../media/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative backdrop-blur-[20px] bg-[#00000033] text-white w-11/12 max-w-6xl my-2 m-auto rounded-md">
      <div className=" w-full flex items-center justify-between">
        <div className="flex items-center justify-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-20 m-0.5 p-0.5" />
          </Link>
          <input
            className="text-black m-0.5 p-0.5 rounded-md"
            type="text"
            placeholder=" Search..."
          />
        </div>

        <nav>
          <ul className="flex items-center justify-center">
            <Link to="/watchlist">
              <li className="m-0.5 p-0.5 text-lg rounded-md bg-blue-600 hover:bg-blue-500 w-24 text-center">
                Watchlist
              </li>
            </Link>

            <Link to="#">
              <li className="m-0.5 p-0.5 text-xl rounded-md bg-blue-600 hover:bg-blue-500 w-24 text-center">
                Login
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
