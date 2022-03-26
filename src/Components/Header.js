import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import Cart from "../Pages/Shopping/Cart";
import Favorite from "../Pages/Favorite";
import { BiSearchAlt } from "react-icons/bi";

function Header(props) {
  // bg colors

  return (
    <div className="header">
      <div className="flex flex-row  bg-mauve-100">
        {/*ligne header*/}

        <div className="flex flex-col  w-[500px] ">
          <img src={logo} className="flex  rounded-full w-28" />
        </div>
        <div className="flex flex-col justify-center mt-8 w-[850px]">
          <div class="input-group flex">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              className="w-5/12 rounded h-8 bg-LightGris-100"
            />
            <button className="bg-mauve-100 w-[36px] ml-1">
              <BiSearchAlt className="text-2xl text-Mauve-100  " />
            </button>
          </div>
        </div>

        <div className="flex flex-col m-auto  w-60 ">
          {/*ligne les icons*/}
          <div className="flex flex-col">
            <div className=" flex flex-row h-28 text-violet-100">
              {props.icon1}

              {props.icon2}

              <button className="text-Mauve-100 cursor-pointer  font-bold h-[40px] mt-2  ml-4 ml-4 text-2xl px-2  py-2 rounded shadow hover:shadow-lg hover:bg-Bleu-100 outline-none focus:outline-none  ease-linear transition-all duration-150 ">
                <Link to={Cart} />
                {props.icon3}
              </button>

              <button className="text-Mauve-100  cursor-pointer font-bold h-[40px] mt-2 ml-4 text-2xl px-2 py-2 rounded shadow hover:shadow-lg  hover:bg-Bleu-100 outline-none focus:outline-none  ease-linear transition-all duration-150 ">
                <Link to={Favorite} />
                {props.icon4}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
