import React, { useState, useEffect } from "react";
import logo from "../images/purkaushal.png";
import { useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Login from "./Login";
import { VscAccount } from "react-icons/vsc";
import Logo from "../images/Icone .png";
import LogoName from "../images/Logo (1).png";
import Sign from "./Sign";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [collection, setCollection] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  const toggleCollection = () => {
    setIsCollectionOpen(!isCollectionOpen);
  };

  const navigation = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [search, setSearch] = useState(false);
  const [navList, setNavList] = useState(0)

  return (
    <header className="bg-white lg:px-40 md:h-14">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            className="text-white focus:outline-none lg:hidden pr-3 -mt-5"
            onClick={toggleMenu}
          >
            {!isMenuOpen ? (
              <svg
                className="block h-6 w-6 text-orange-800"
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6 text-orange-800"
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <div className="flex">
            {isMenuOpen == false && (
              <img
                onClick={() => navigation("/")}
                className="cursor-pointer z-50 lg:h-16 h-12"
                src={Logo}
              ></img>
            )}
            <img
              onClick={() => navigation("/")}
              style={{ height: "5vh" }}
              className="cursor-pointer mx-2"
              src={LogoName}
            ></img>
          </div>
        </div>

        <div className="hidden md:block -mt-8">
          <ul className="flex justify-between items-center space-x-4">
            <p
              onClick={() => navigation("/")}
              className="text-black-300 hover:text-orange-800 font-semibold px-5  rounded-md cursor-pointer text-xs"
            >
              HOME
            </p>
            <p
              onClick={() => navigation("/ourStory")}
              className="text-black-300 cursor-pointer hover:text-orange-800 px-5  rounded-md text-xs font-semibold"
            >
              OUR STORY
            </p>

            <p
              onClick={() => navigation("/contactUs")}
              className="text-black-300 cursor-pointer hover:text-orange-800 px-5  rounded-md text-xs font-semibold"
            >
              CONTACT US
            </p>
            <p className="text-black-300 hover:text-orange-800 cursor-pointer  px-5  rounded-md text-xs font-medium">
              <i className="fa fa-heart-o" aria-hidden="true"></i> 0
            </p>

            <p className="text-black-300 hover:text-orange-800 cursor-pointer pl-5   rounded-md text-xs font-medium">
              {search && (
                <input className="border-2 border-[#755D3A] mr-2 p-1"></input>
              )}
              <i
                onClick={() => setSearch(true)}
                className="fa fa-search"
                aria-hidden="true"
              ></i>
            </p>
            <div className="flex justify-start items-center">

            <p className="text-black-300 hover:text-orange-800 cursor-pointer  rounded-md text-xs font-semibold">
              <Login></Login>
            </p> <span className="font-bold">|</span>
            <p className="text-black-300 hover:text-orange-800 cursor-pointer  rounded-md text-xs font-semibold">
              <Sign />
            </p>
            </div>
          </ul>
        </div>
        <div className="md:hidden flex justify-between items-center ">
          <div className="flex justify-between items-center -mt-5">
            <p onClick={()=>navigation('/cart')} className="text-black-300 hover:text-orange-800 cursor-pointer px-3 rounded-md text-xs font-medium">
              <AiOutlineShoppingCart size={20} />
            </p>
            <i
              onClick={() => navigation("/Search")}
              class="fa fa-search"
              aria-hidden="true"
            ></i>
          </div>
          
        </div>
      </nav>
      <div
        className={`fixed inset-y-0 left-0 w-full bg-white text-black transform duration-500 ease-in-out z-10 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          style={{ backgroundColor: "#755D3A" }}
          className="flex justify-start items-center gap-3 p-3 border text-white"
        >
          <VscAccount size={20} />
          <span
            onClick={() => {
              navigation("/SignUp");
              setIsMenuOpen(false);
            }}
          >
            {" "}
            Tap to Login / Sign Up
          </span>{" "}
          <label
            onClick={() => setIsMenuOpen(false)}
            className="w-28 text-right"
          >
            X
          </label>
        </div>

        <ul className="flex flex-col space-y-">
          <li className= {`${navList==1&& "bg-[#FFEDD6]"}`}>
            <p
              onClick={() => {navList==1?setNavList(0): setNavList(1)}}
              className="text-black-300 hover:text-orange-800 px-5 py-3 rounded-md cursor-pointer text-base"
            >
              <span className="text-lg mr-2">+</span> Watch Jewellery
            </p>
            {navList==1&&<div className="flex flex-col gap-3 ml-12 pb-3">
              <label>Charm</label>
              <label>Band</label>
              <label>Pin</label>
            </div>}
          </li>
          <hr></hr>
          <li>
            <p
              onClick={() => navigation("/")}
              className="text-black-300 hover:text-orange-800 px-5 py-3 rounded-md cursor-pointer text-base"
            >
              <span className="text-lg mr-2">+</span> Women
            </p>
          </li>
          <hr></hr>
          <li>
            <p
              onClick={() => navigation("/")}
              className="text-black-300 hover:text-orange-800 px-5 py-3 rounded-md cursor-pointer text-base"
            >
              <span className="text-lg mr-2">+</span> Men
            </p>
          </li>
          <hr></hr>
          <li>
            <p
              onClick={() => navigation("/")}
              className="text-black-300 hover:text-orange-800 px-5 py-3 rounded-md cursor-pointer text-base"
            >
              <span className="text-lg mr-2">+</span> Kids and Ingantd
            </p>
          </li>
          <hr></hr>
          <li>
            <p
              onClick={() => navigation("/")}
              className="text-black-300 hover:text-orange-800 px-5 py-3 rounded-md cursor-pointer text-base"
            >
              <span className="text-lg mr-2">+</span> Offers
            </p>
          </li>
          <hr></hr>
          <li>
            <p
              onClick={() => navigation("/")}
              className="text-black-300 hover:text-orange-800 px-5 py-3 rounded-md cursor-pointer text-base"
            >
              <span className="text-lg mr-2">+</span> Gifting
            </p>
          </li>
          <hr></hr>

          {/* <li onClick={toggleCollection} className='flex justify-start gap-20'><p className="text-black-300 cursor-pointer hover:text-orange-800 px-5 py-2 rounded-md text-xs font-semibold">Collection</p><span>-</span> </li> */}
          {isCollectionOpen && (
            <div className="fixed  inset-y-0 right-0 w-64 bg-white text-black transform transition-transform duration-1000 ease-in-out z-10 ">
              <div className="mt-32"></div>
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-bold">Collections</h2>
                <button
                  className="text-black focus:outline-none"
                  onClick={toggleCollection}
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col p-4 ">
                <li>
                  <p href="/">Collection 1</p>
                </li>
                <li>
                  <p href="/">Collection 2</p>
                </li>
                <li>
                  <p href="/">Collection 3</p>
                </li>
                <li>
                  <p href="/">Collection 4</p>
                </li>
              </ul>
            </div>
          )}
          {isCollectionOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 z-0"
              onClick={toggleCollection}
            ></div>
          )}
        </ul>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 z-0"
          onClick={toggleMenu}
        ></div>
      )}
      {collection && (
        <div
          onMouseLeave={() => setCollection(false)}
          style={{
            marginLeft: 700,
            zIndex: 100,
            borderColor: "#BD8C49",
            width: 500,
          }}
          class="bg-white mt-4 fixed flex flex-row p-4 border-t-2"
        >
          <div class="flex flex-col px-4">
            <label
              onClick={() => navigation("/Collection")}
              class="py-2 border-b hover:text-orange-500 cursor-pointer"
            >
              Earnings
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Diwali Earnings
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Fancy Studs
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Hanging Cluster
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Nose Oins
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Pendants
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Banglets
            </label>
            {/* <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Earnings</label> */}
          </div>
          <div class="flex flex-col px-10">
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Finger Rings
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Couple Rings
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Mangal Sutra
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Bracelets
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Terzetto
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Chains
            </label>
            <label class="py-2 border-b hover:text-orange-500 cursor-pointer">
              Gold Coin
            </label>
          </div>
        </div>
      )}
      {searchBar && (
        <div
          onMouseLeave={() => setSearchBar(false)}
          style={{
            marginLeft: 1150,
            zIndex: 100,
            borderColor: "#BD8C49",
            width: 300,
          }}
          class="bg-white mt-4 fixed flex flex-row p-3 border-t-2"
        >
          <div class="flex flex-col px-4">
            <input class="w-52 border h-8 px-3" placeholder="Search"></input>
          </div>
        </div>
      )}
      {isMenuOpen == false && (
        <div
          style={{ backgroundColor: "#755D3A" }}
          className="w-full h-4 bg-black absolute z-30 -mt-4 lg:hidden"
        ></div>
      )}
    </header>
  );
};

export default Header;
