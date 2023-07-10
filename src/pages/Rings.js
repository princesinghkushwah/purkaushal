import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "../components/Footer";
import collection from "../images/collection.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Menu from "./Menu";
import SortBy from './SortBy'
import axios from 'axios'

import { AiOutlineHeart } from "react-icons/ai";
function NosePin() {
  const [allProduct, setAllProduct] = useState([])
  const navigation = useNavigate();




  const getAllProduct = () => {
    axios.get("http://localhost:5001/api/allProduct").then((res) => (
      setAllProduct(res.data.data.filter((i)=> i.category==localStorage.getItem("category")))

    )).catch((err) => (
      console.log(err)
    ))
  }
  useEffect(() => {
    getAllProduct()
  }, [])
  console.log(allProduct);
  return (
    <div>
      <Header />
      <Menu />
      {localStorage.getItem('category')}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

        }}
      >
        <br></br>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            className="lg:w-4/5"
            style={{ borderRadius: 10, boxShadow: "1px 1px 1px 1px lightgrey" }}
            src={collection}
          ></img>
          <br></br>
          <hr className="lg:w-4/5 w-full"></hr>
          <br></br>
        </div>
        <div
          style={{ marginTop: "83vh", backgroundColor: '#B59363' }}
          className="w-full font-semibold fixed z-20 flex lg:hidden justify-evenly text-xl text-white items-center py-3"
        >
          <SortBy />
          <div className="h-5 border"></div>
          <label>FILTER</label>
        </div>


        <div
          className="lg:flex hidden lg:w-4/5 w-full "
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              className=""
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 10,
              }}
            >
              <div className="group relative text-2xl">

                <button style={{ backgroundColor: '#B59363' }} className="bg-gray-300 text-white py-2 px-6 rounded inline-flex items-center">
                  <span className="mr-1 text-base">PRICE</span>
                  <svg
                    className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                {/* menu list */}
                <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-60 z-10 text-sm">
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Below Rs. 10,000 (22)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 10,000 - Rs. 20,000 (128)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 20,000 - Rs. 30,000 (444)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Rs. 30,000 - Rs. 40,000 (495)
                  </li>
                </ul>

              </div>
              <div className="group relative text-2xl">

                <button style={{ backgroundColor: '#B59363' }} className="bg-gray-300 text-white py-2 px-6 rounded inline-flex items-center">
                  <span className="mr-1 text-base">METAL</span>
                  <svg
                    className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                {/* menu list */}
                <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-60 z-10 text-sm">
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Below Rs. 10,000 (22)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 10,000 - Rs. 20,000 (128)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 20,000 - Rs. 30,000 (444)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Rs. 30,000 - Rs. 40,000 (495)
                  </li>
                </ul>

              </div>
              <div className="group relative text-2xl">

                <button style={{ backgroundColor: '#B59363' }} className="bg-gray-300 text-white py-2 px-6 rounded inline-flex items-center">
                  <span className="mr-1 text-base">GOLD PURITY</span>
                  <svg
                    className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                {/* menu list */}
                <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-60 z-10 text-sm">
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Below Rs. 10,000 (22)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 10,000 - Rs. 20,000 (128)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 20,000 - Rs. 30,000 (444)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Rs. 30,000 - Rs. 40,000 (495)
                  </li>
                </ul>

              </div>
              <div className="group relative text-2xl">

                <button style={{ backgroundColor: '#B59363' }} className="bg-gray-300 text-white py-2 px-6 rounded inline-flex items-center">
                  <span className="mr-1 text-base">GENDER</span>
                  <svg
                    className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                {/* menu list */}
                <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-60 z-10 text-sm">
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Below Rs. 10,000 (22)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 10,000 - Rs. 20,000 (128)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 20,000 - Rs. 30,000 (444)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Rs. 30,000 - Rs. 40,000 (495)
                  </li>
                </ul>

              </div>
              <div className="group relative text-2xl">

                <button style={{ backgroundColor: '#B59363' }} className="bg-gray-300 text-white py-2 px-6 rounded inline-flex items-center">
                  <span className="mr-1 text-base">DELIVERY TIME</span>
                  <svg
                    className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                {/* menu list */}
                <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-60 z-10 text-sm">
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Below Rs. 10,000 (22)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 10,000 - Rs. 20,000 (128)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 20,000 - Rs. 30,000 (444)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Rs. 30,000 - Rs. 40,000 (495)
                  </li>
                </ul>

              </div>
              <div className="group relative text-2xl">

                <button style={{ backgroundColor: '#B59363' }} className="bg-gray-300 text-white py-2 px-6 rounded inline-flex items-center">
                  <span className="mr-1 text-base">WEIGHT</span>
                  <svg
                    className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                {/* menu list */}
                <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-60 z-10 text-sm">
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Below Rs. 10,000 (22)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 10,000 - Rs. 20,000 (128)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 pt-1 px-4 cursor-pointer">
                    Rs. 20,000 - Rs. 30,000 (444)
                  </li>
                  <li className="bg-gray-200 hover:bg-gray-400 py-1 px-4 cursor-pointer">
                    Rs. 30,000 - Rs. 40,000 (495)
                  </li>
                </ul>

              </div>


            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 10,
              }}
            >
              <select
                className="py-2 px-6"
                style={{ border: "1px solid #347AB8", color: "#347AB8" }}
              >
                <option>POPULAR</option>
              </select>
            </div>
          </div>
        </div>

        <section className="w-full">
          <div className="max-w-screen-xl mx-auto sm:px-6 px-5 sm:py-12 lg:px-8">
            <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
              {allProduct?.map((i) => (
                <li>
                  <div onClick={() => navigation('/ProductDetail')} className="group block overflow-hidden drop-shadow">
                    <div className="relative h-[150px] lg:mx-0 sm:h-[360px] sm:w-[360px] cursor-pointer">
                      <img
                        src={i?.mainImage}
                        alt=""
                        className="opacity-100 object-fill group-hover:opacity-0"
                      />

                      <img
                        src={i?.image[0]}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                      />
                    </div>

                    <div style={{ backgroundColor: '#FFEDD6' }} className="relative cursor-pointer py-3 lg:p-3 lg:w-[360px]">
                      <div className="flex justify-center lg:justify-between mb-2 items-center">
                        <h3 className="text-sm text-gray-700 font-semibold group-hover:underline group-hover:underline-offset-4">
                          {i?.productName}
                        </h3>
                        <AiOutlineHeart className="text-xl lg:block hidden" />
                      </div>

                      <div className="mt-1.5 flex items-center justify-center lg:justify-between text-gray-900">
                        <p className="tracking-wide ">₹ {i?.price}</p>

                        <button
                          onClick={() =>{
                            localStorage.setItem("productdetail",JSON.stringify(i))
                            navigation("/productDetail")
                          }}
                          className="bg-orange-400 pl-2 pr-2 pt-1 pb-1 rounded-sm hidden lg:block"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              {/* <li>
                <div onClick={() => navigation('/ProductDetail')} className="group block overflow-hidden drop-shadow">
                  <div className="relative h-[150px] lg:mx-0 sm:h-[360px] sm:w-[360px] cursor-pointer bg-red-300">
                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-PY-400x400.jpg"
                      alt=""
                      className="absolute inset-0 object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-Model-280x280.jpg"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div style={{ backgroundColor: '#FFEDD6' }} className="relative cursor-pointer bg-gray-200 py-3 lg:p-3 lg:w-[360px]">
                    <div className="flex justify-center lg:justify-between mb-2 items-center">
                      <h3 className="text-sm text-gray-700 font-semibold group-hover:underline group-hover:underline-offset-4">
                        Appealing Earnings
                      </h3>
                      <AiOutlineHeart className="text-xl lg:block hidden" />
                    </div>

                    <div className="mt-1.5 flex items-center justify-center lg:justify-between text-gray-900">
                      <p className="tracking-wide ">₹189.99</p>

                      <button
                        onClick={() => navigation("/productDetail")}
                        className="bg-orange-400 pl-2 pr-2 pt-1 pb-1 rounded-sm hidden lg:block"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => navigation('/ProductDetail')} className="group block overflow-hidden drop-shadow">
                  <div className="relative h-[150px] lg:mx-0 sm:h-[360px] sm:w-[360px] cursor-pointer bg-red-300">
                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-PY-400x400.jpg"
                      alt=""
                      className="absolute inset-0 object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-Model-280x280.jpg"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div style={{ backgroundColor: '#FFEDD6' }} className="relative cursor-pointer bg-gray-200 py-3 lg:p-3 lg:w-[360px]">
                    <div className="flex justify-center lg:justify-between mb-2 items-center">
                      <h3 className="text-sm text-gray-700 font-semibold group-hover:underline group-hover:underline-offset-4">
                        Appealing Earnings
                      </h3>
                      <AiOutlineHeart className="text-xl lg:block hidden" />
                    </div>

                    <div className="mt-1.5 flex items-center justify-center lg:justify-between text-gray-900">
                      <p className="tracking-wide ">₹189.99</p>

                      <button
                        onClick={() => navigation("/productDetail")}
                        className="bg-orange-400 pl-2 pr-2 pt-1 pb-1 rounded-sm hidden lg:block"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => navigation('/ProductDetail')} className="group block overflow-hidden drop-shadow">
                  <div className="relative h-[150px] lg:mx-0 sm:h-[360px] sm:w-[360px] cursor-pointer bg-red-300">
                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-PY-400x400.jpg"
                      alt=""
                      className="absolute inset-0 object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-Model-280x280.jpg"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div style={{ backgroundColor: '#FFEDD6' }} className="relative cursor-pointer bg-gray-200 py-3 lg:p-3 lg:w-[360px]">
                    <div className="flex justify-center lg:justify-between mb-2 items-center">
                      <h3 className="text-sm text-gray-700 font-semibold group-hover:underline group-hover:underline-offset-4">
                        Appealing Earnings
                      </h3>
                      <AiOutlineHeart className="text-xl lg:block hidden" />
                    </div>

                    <div className="mt-1.5 flex items-center justify-center lg:justify-between text-gray-900">
                      <p className="tracking-wide ">₹189.99</p>

                      <button
                        onClick={() => navigation("/productDetail")}
                        className="bg-orange-400 pl-2 pr-2 pt-1 pb-1 rounded-sm hidden lg:block"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => navigation('/ProductDetail')} className="group block overflow-hidden drop-shadow">
                  <div className="relative h-[150px] lg:mx-0 sm:h-[360px] sm:w-[360px] cursor-pointer bg-red-300">
                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-PY-400x400.jpg"
                      alt=""
                      className="absolute inset-0 object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-Model-280x280.jpg"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div style={{ backgroundColor: '#FFEDD6' }} className="relative cursor-pointer bg-gray-200 py-3 lg:p-3 lg:w-[360px]">
                    <div className="flex justify-center lg:justify-between mb-2 items-center">
                      <h3 className="text-sm text-gray-700 font-semibold group-hover:underline group-hover:underline-offset-4">
                        Appealing Earnings
                      </h3>
                      <AiOutlineHeart className="text-xl lg:block hidden" />
                    </div>

                    <div className="mt-1.5 flex items-center justify-center lg:justify-between text-gray-900">
                      <p className="tracking-wide ">₹189.99</p>

                      <button
                        onClick={() => navigation("/productDetail")}
                        className="bg-orange-400 pl-2 pr-2 pt-1 pb-1 rounded-sm hidden lg:block"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div onClick={() => navigation('/ProductDetail')} className="group block overflow-hidden drop-shadow">
                  <div className="relative h-[150px] lg:mx-0 sm:h-[360px] sm:w-[360px] cursor-pointer bg-red-300">
                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-PY-400x400.jpg"
                      alt=""
                      className="absolute inset-0 object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/06/DOC-ST-2-Model-280x280.jpg"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div style={{ backgroundColor: '#FFEDD6' }} className="relative cursor-pointer bg-gray-200 py-3 lg:p-3 lg:w-[360px]">
                    <div className="flex justify-center lg:justify-between mb-2 items-center">
                      <h3 className="text-sm text-gray-700 font-semibold group-hover:underline group-hover:underline-offset-4">
                        Appealing Earnings
                      </h3>
                      <AiOutlineHeart className="text-xl lg:block hidden" />
                    </div>

                    <div className="mt-1.5 flex items-center justify-center lg:justify-between text-gray-900">
                      <p className="tracking-wide ">₹189.99</p>

                      <button
                        onClick={() => navigation("/productDetail")}
                        className="bg-orange-400 pl-2 pr-2 pt-1 pb-1 rounded-sm hidden lg:block"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            marginTop: 15,
          }}
        ></div>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </div>
  );
}

export default NosePin;
