import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className= "text-xs px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
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
                <div style={{backgroundColor:'#755D3A'}} className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t-xl">
                  <label className="text-2xl font-normal text-white">
                  WELCOME BACK, LOGIN HERE
                  </label>
                  <button
                    className=" ml-auto border-0 text-black opacity-3 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <label style={{color:'white', cursor:'pointer'}}>
                      ×
                    </label>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-5 flex-auto">
                  <p className=" text-slate-500 text-sm leading-relaxed">
                  Please enter your phone number or email address below. We will send you the OTP.
                  </p>
                </div>
                <div className="p-6 flex flex-row justify-between w-full">
                  <input placeholder="Email or Phone Number" className="border-black border w-3/4 py-2 px-3 rounded"></input>
                  <button
                    className="bg-[#B59363] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
                {/*footer*/}
                <div className="flex flex-row items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-black text-white background-transparent uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Log in with email
                  </button>
                  <button
                    className="bg-[#B59363] text-white active:bg-emerald-600 uppercase text-sm px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Login with Facebook
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