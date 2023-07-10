import axios from "axios";
import React, { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    number: "",
    policy: false
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData(prevData => ({ ...prevData, [name]: value }))
  }
  const userDetail = async () => {
    try {
      const res = axios.post("/api/allProduct",)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(formData);
  return (
    <>
    <button
        className="text-xs px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Signup
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                  style={{ backgroundColor: "#755D3A" }}
                  className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t-xl"
                >
                  <label className="text-2xl font-normal text-white">
                    HELLO THERE, SIGNUP HERE
                  </label>
                  <button
                    className=" ml-auto border-0 text-black opacity-3 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <label style={{ color: "white", cursor: "pointer" }}>
                      ×
                    </label>
                  </button>
                </div>
                {/*body*/}
                <form>
                  <div className="p-6 flex flex-col gap-2 justify-between w-full">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name" onChange={handleChange} className="border-black border w-full py-2 text-base px-3 h-10"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email" onChange={handleChange} className="border-black border w-full py-2 text-basr px-3 h-10"
                    />
                    <input
                      name="number"
                      type="number"
                      placeholder="Mobile Number" onChange={handleChange}
                      className="border-black border w-full py-2 text-base px-3 h-10"
                    />
                  </div>
                  <div className="px-6 flex items-center">
                    <input type="checkbox" name="policy" onChange={handleChange} />
                    <label>
                      {" "}
                      I accept BlueStone Terms of Service and Privacy Policy.
                    </label>
                  </div>
                </form>
                <div className="w-full my-3">
                  <button
                    className="bg-black w-[90%] text-white background-transparent uppercase px-6 mx-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    CREATE ACCOUNT
                  </button>
                  <label className="w-full ml-[350px] cursor-pointer">
                    Already Have an Account? Login
                  </label>
                </div>
                {/*footer*/}
                <div className="flex flex-row items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-black text-white background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Sign up with email
                  </button>
                  <button
                    className="bg-[#B59363] text-white active:bg-emerald-600 uppercase text-sm px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Sign up with Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}