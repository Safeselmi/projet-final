import React from "react";
import { createPopper } from "@popperjs/core";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import Connexion from "../Pages/Connexion";
import Inscription from "../Pages/Inscription";

const DropdownUser = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let Navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-[40px] p-2">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-Mauve-100 font-bold uppercase text-2xl px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150 "
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <FaUserCircle />
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : "white") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "3rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-lg py-2 px-4 font-font_fremid block w-full whitespace-normal bg-transparent " +
                  (color === "white" ? "white" : "text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  Navigate("/Inscription");
                }}
              >
                Inscription
              </a>
              <a
                href="#pablo"
                className={
                  "text-lg py-2 px-4 font-font_fremid block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? "white" : "text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  Navigate("/Connexion");
                }}
              >
                Connexion
              </a>
              <a
                href="#pablo"
                className={
                  "text-lg py-2 px-4 font-font_fremid block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-white" : "text-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  Navigate("/Connexion");
                }}
              >
                Déconnexion
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownUser;
