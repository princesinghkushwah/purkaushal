import React from 'react'

function PromisesCard() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'center' }} className=''>
            <h2 className="heading text-center text-4xl tracking-tight sm:text-4xl lg:py-12 lg:text-5xl pb-7">
                Purkaushal Promises
            </h2>
            <div  className="grid lg:w-10/12 w-full space-x-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-3 px-5 lg:px-10">
                <div style={{ backgroundColor: '#F6F6F6' }} className="px-4 py-4 bg-white border-1 border-lightgray-400 drop-shadow h-44">
                    <h3 className="text-2xl text-center text-gray-800">10</h3>
                    <p className="text-center text-sm sm:text-xl text-gray-500">100% Certified <br></br>Jewellery</p>
                </div>
                <div style={{ backgroundColor: '#F6F6F6' }} className="px-4 py-4 bg-white border-1 border-lightgray-400 drop-shadow h-44">
                    <h3 className="text-2xl text-center text-gray-800">20</h3>
                    <p className="text-center text-sm sm:text-xl text-gray-500">100% <br></br>Refund</p>
                </div>
                <div style={{ backgroundColor: '#F6F6F6' }} className="px-4 py-4 bg-white border-1 border-lightgray-400 drop-shadow h-44">
                    <h3 className="text-2xl text-center text-gray-800">30</h3>
                    <p className="text-center text-sm sm:text-xl text-gray-500">Lifetime Exchange <br></br>& Buyback</p>
                </div>
                <div style={{ backgroundColor: '#F6F6F6' }} className="px-4 py-4 bg-white border-1 border-lightgray-400 drop-shadow h-44">
                    <h3 className="text-2xl text-center text-gray-800">40</h3>

                    <p className="text-center text-sm sm:text-xl text-gray-500">Free Shipping & <br></br>Insurance</p>
                </div>

            </div>
        </div>
    )
}

export default PromisesCard
