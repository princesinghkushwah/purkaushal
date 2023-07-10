import React from "react";
import Header from "./Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Icone .png";
import LogoName from "../images/Logo (1).png";

const ShoppinCart = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="h-[9vh] bg-white shadow-lg border flex lg:justify-between lg:px-[200px] items-center p-2">
        <div className="flex">
        <img
          onClick={() => navigation("/")}
          src={Logo}
          className="h-[6vh] mr-3 "
        ></img>
        <img src={LogoName} className="lg:flex hidden h-[5vh]">
        </img>
        </div>
        <label className="text-xl lg:text-3xl font-semibold pr-2">Review Cart</label>
        <label className="text-xl lg:text-3xl font-semibold w-44 text-right">
          STEP 1/3
        </label>
      </div>
      <div className=" bg-gray-100 pt-10">
        <h1 className="mb-5 text-center text-2xl font-bold">
          My Shopping Cart (2 Items)
        </h1>
        <div className="mx-auto max-w-6xl justify-center px-5 md:flex md:space-x-6 xl:px-0">
          <div className="px-3 md:w-2/3 bg-white shadow-lg border mb-3">
            <div className="md:flex flex flex-col items-strech py-2 lg:py-3 border-t border-gray-50">
              <div className="flex">
                <div className="md:w-4/12 2xl:w-1/4 w-[50%] lg:m-2">
                  <img
                    src="https://kinclimg3.bluestone.com/f_webp,c_scale,w_220,b_rgb:f0f0f0/giproduct/BISJ0005R08_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-18028.png"
                    alt="Black Leather Bag"
                    className="h-full object-center object-cover border-gray-300 border-2 md:block hidden"
                  />
                  <img
                    src="https://kinclimg3.bluestone.com/f_webp,c_scale,w_220,b_rgb:f0f0f0/giproduct/BISJ0005R08_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-18028.png"
                    alt="Black Leather Bag"
                    className="md:hidden w-[100%] object-center border-gray-300 border-2 object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 lg:flex hidden flex-col justify-center pr-1 ml-2 ">
                  <div className="lg:flex justify-between w-full ml-3 hidden">
                    <div className="sm:mt-0">
                      <h2 className="text-lg font-semibold text-gray-900">
                        The Texere Ring
                      </h2>
                      <p className=" text-xs text-gray-700">
                        Product Code: 001408-1048297
                      </p>
                    </div>
                    <div className="flex sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center font-semibold border-gray-100 mr-3">
                        ₹ 60,999
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="bg-gray-100 text-gray-800 pt-1 pb-1 pl-6 pr-6 rounded text-sm ">
                      Ring Size
                    </p>
                    <select
                      aria-label="Select quantity"
                      className="py-2 px-1  "
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                    |
                    <div>
                      <span>Quantity</span>
                      <select
                        aria-label="Select quantity"
                        className="py-2 px-1 "
                      >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-full ">
                    <p className="bg-gray-100 text-gray-800 pt-1 pb-1 pl-6 pr-6 rounded text-sm ">
                      Metal
                    </p>
                    <p className="text-sm ml-2 border pt-1 pb-1 pl-6 pr-6">
                      18Kt Gold, 7.61 gram
                    </p>
                  </div>
                  <div className="flex items-center justify-start w-full pt-1 ">
                    <p className="bg-gray-100 text-gray-800 pt-1 pb-1 pl-6 pr-6 rounded text-sm ">
                      Stone
                    </p>
                    <p className="text-sm ml-2 border pt-1 pb-1 pl-6 pr-6">
                      1 Diamond, 0.1100 Carat, SI IJ
                    </p>
                  </div>
                  <div className="flex justify-between w-full lg:bg-transparent">
                    <button
                      style={{ backgroundColor: "#755D3A" }}
                      className="text-white py-1 px-1 lg:w-[45%] w-[48%] lg:text-lg text-sm font-semibold my-4"
                    >
                      Remove
                    </button>
                    <button
                      style={{ borderColor: "#755D3A", color: "#755D3A" }}
                      className="text-white py-1 px-1 lg:w-[45%] w-[48%] lg:text-lg text-sm font-semibold my-4 border"
                    >
                      Move to Wishlist
                    </button>
                  </div>
                </div>
                <div className="lg:hidden items-center justify-between w-full ml-3">
                  <div className="sm:mt-0">
                    <h2 className="text-lg font-semibold text-gray-900">
                      The Texere Ring
                    </h2>
                    <p className=" text-xs text-gray-700">
                      Product Code: 001408-1048297
                    </p>
                  </div>
                  <div className="flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center font-semibold border-gray-100">
                      ₹ 60,999
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:pl-3 lg:hidden md:w-8/12 2xl:w-3/4 flex flex-col justify-center pr-1">
                <div className="lg:flex items-center justify-between w-full ml-3 hidden">
                  <div className="sm:mt-0">
                    <h2 className="text-lg font-semibold text-gray-900">
                      The Texere Ring
                    </h2>
                    <p className=" text-xs text-gray-700">
                      Product Code: 001408-1048297
                    </p>
                  </div>
                  <div className="flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center font-semibold border-gray-100">
                      ₹ 60,999
                    </div>
                  </div>
                </div>
                <hr className="my-3"></hr>
                <div className="flex justify-between w-full pt-1">
                  <div className="flex">
                    <p className="text-gray-800 pt-1 pb-1 rounded text-sm ">
                      Ring Size
                    </p>
                    <select
                      aria-label="Select quantity"
                      className="py-1 px-2 border mx-2"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>

                  <div className="flex">
                    <span>Quantity</span>
                    <select
                      aria-label="Select quantity"
                      className="py-1 px-2 border ml-2"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                </div>
                <hr className="my-3"></hr>
                <div className="flex items-center justify-start w-full ">
                  <p className="bg-gray-100 text-gray-800 pt-1 pb-1 pl-6 pr-6 rounded text-sm ">
                    Metal:
                  </p>
                  <p className="text-sm ml-2  pt-1 pb-1 pl-6 pr-6">
                    18Kt Gold, 7.61 gram
                  </p>
                </div>
                <div className="flex items-center justify-start w-full pt-1 ">
                  <p className="bg-gray-100 text-gray-800 pt-1 pb-1 pl-6 pr-6 rounded text-sm ">
                    Stone:
                  </p>
                  <p className="text-sm ml-2  pt-1 pb-1 pl-6 pr-6">
                    1 Diamond, 0.1100 Carat, SI IJ
                  </p>
                </div>
                <div className="flex justify-between w-full lg:bg-transparent">
                  <button
                    style={{ backgroundColor: "#755D3A" }}
                    className="text-white py-2 px-1 lg:w-[45%] w-[48%] lg:text-lg text-sm font-semibold my-4"
                  >
                    Remove
                  </button>
                  <button
                    style={{ borderColor: "#755D3A", color: "#755D3A" }}
                    className="text-white py-2 px-1 lg:w-[45%] w-[48%] lg:text-lg text-sm font-semibold my-4 border"
                  >
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sub total */}
          <p className="text-gray-700 font-semibold mt-10 lg:hidden">
            ORDER SUMMARY
          </p>
          <div className="mt-3 mb-3 h-full border bg-white p-3 shadow-lg md:mt-0 md:w-1/3">
            <p className="text-gray-700 font-semibold lg:block hidden">
              ORDER SUMMARY
            </p>
            <div className="mb-2 flex justify-between mt-3">
              <p className="text-gray-700">Total (2 Items)</p>
              <p className="text-gray-700">₹ 2000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700 font-medium text-md">Total Payable</p>
              <p className="text-gray-700 font-medium text-md">₹ 2000</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <div className="">
                <p className="mb-1 text-lg  text-green-700">
                  You save <span>₹ 200</span>
                </p>
                {/* <p className="text-sm text-gray-700">including VAT</p> */}
              </div>
            </div>
            <button
              onClick={() => navigation("/OrderDetail")}
              className="mt-2 w-full bg-[#755D3A] py-1.5 font-medium text-blue-50"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ShoppinCart;
