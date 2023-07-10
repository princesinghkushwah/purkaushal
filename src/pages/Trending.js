import React from 'react'

function Trending() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <section className="lg:w-10/12 w-full mt-12">
        <div className="container lg:px-6 pt-3 mx-auto">
          <h1 className="heading w-full h-2 lg:py-12 text-center text-4xl lg:text-5xl ">
            Trending
          </h1>

          


          <section>
            <div className="max-w-screen-xl px-5 py-6 mx-auto sm:px-3 sm:py-10 lg:px-8">
              <ul className="gap-4 grid grid-cols-1 mt-8 lg:grid-cols-2">
                <li>
                  <a href="#" className="block overflow-hidden group">
                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/07/LR-16-Model.jpg"

                      alt=""
                      className=" w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div  className="relative px-2 pb-2 pt-3 bg-[#FFEDD6]">
                      <h3
                        className=" text-gray-700 group-hover:underline group-hover:underline-offset-4"
                      >
                        Basic Tee
                      </h3>

                      <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" className="block overflow-hidden group">
                    <img
                      src="https://purkaushal.com/wp-content/uploads/2022/07/LR-16-Model.jpg"

                      alt=""
                      className=" w-full mt-4 lg:mt-0 object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative px-2 pb-2 pt-3 bg-[#FFEDD6]">
                      <h3
                        className=" text-gray-700 group-hover:underline group-hover:underline-offset-4"
                      >
                        Basic Tee
                      </h3>

                      <p className="mt-2">
                        <span className="sr-only"> Regular Price </span>

                        <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>

        </div>
      </section>

    </div>
  )
}

export default Trending
