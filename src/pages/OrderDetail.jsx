import React from "react";
import Header from "./Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Logo from "../images/Icone .png";
import LogoName from "../images/Logo (1).png";

const OrderDetail = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="h-[9vh] bg-white shadow-lg border flex items-center lg:justify-between p-2 lg:px-[200px]">
        <div className="flex">
        <img
          onClick={() => navigation("/")}
          src={Logo}
          className="h-[6vh] mr-3 "
        ></img>
        <img src={LogoName} className="lg:flex hidden h-[5vh]">
        </img>
        </div>
        <label className="text-xl lg:text-3xl font-semibold pr-10">Delivery</label>
        <label className="text-xl lg:text-3xl font-semibold w-44 text-right">
          STEP 2/3
        </label>
      </div>

      <div className="bg-gray-100 py-5">
        <div className="mx-auto max-w-6xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="lg:col-span-2 bg-white shadow-md p-4">
            <h4 className="font-semibold text-lg">Your Details</h4>
            <hr className="border mb-4  text-gray-600" />
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 ">
              <div className="md:col-span-3">
                <label for="email">Email Address</label>
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                />
              </div>

              <div className="md:col-span-2">
                <label for="mobile_number">Mobile Number</label>
                <input
                  type="text"
                  name="mobile_number"
                  id="mobile_number"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder="Mobile Number"
                />
              </div>
              <div className="md:col-span-6 mt-5">
                <h4 className="font-semibold text-lg">Delivery Details</h4>
                <hr className="border mb-3  text-gray-600" />
              </div>
              <div className="md:col-span-5 flex flex-col">
                <span className="mb-2 text-gray-400">
                  We will deliver the order at the below address.
                </span>
                <label for="recipient_name">Recipient's Name</label>
                <input
                  type="text"
                  name="recipient_name"
                  id="recipient_name"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                />
              </div>
              <div className="md:col-span-3">
                <label for="recipient_mob">Recipient's mobile (optional)</label>
                <input
                  type="text"
                  name="recipient_mob"
                  id="recipient_mob"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>

              <div className="md:col-span-2">
                <label for="pincode">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>
              <div className="md:col-span-3">
                <label for="home_Add">Apartment/House/Flat No</label>
                <input
                  type="text"
                  name="home_Add"
                  id="home_Add"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>

              <div className="md:col-span-2">
                <label for="street_name">Steet/Colony/Area Name</label>
                <input
                  type="text"
                  name="street_name"
                  id="street_name"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>
              <div className="md:col-span-3">
                <label for="locality">Locality / Town</label>
                <input
                  type="text"
                  name="locality"
                  id="locality"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>

              <div className="md:col-span-2">
                <label for="landmark">Landmark (optional)</label>
                <input
                  type="text"
                  name="landmark"
                  id="landmark"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder=""
                />
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name="landmark"
                  id="landmark"
                  className=" border mt-1 rounded bg-gray-50"
                  value=""
                  placeholder=""
                />
                <label className="text-xs ml-1 mt-1" for="landmark">
                  Billing address is same as shipping address
                </label>
              </div>
            </div>
          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <p className="text-gray-700 font-normal mb-2">ORDER SUMMARY</p>
            <div className="mb-2 flex justify-between">
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
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OrderDetail;
