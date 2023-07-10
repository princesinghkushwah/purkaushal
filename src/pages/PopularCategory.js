import React from 'react'

function PopularCategory() {
  return (
    <div style={{width:'100%', display:'flex', justifyContent:'center', backgroundColor:'#FEF8F8'}}>
        <section className="lg:w-10/12 w-full">
    <div className="container px-5 lg:py-10 mt-5 mx-auto">
        <h1 className="heading w-40 h-2 mx-auto rounded-lg text-4xl lg:text-5xl">
        Categories
        </h1>

       

        <div className="grid grid-cols-3 mt-16 xl:mt-16 gap-3 md:grid-cols-1 xl:grid-cols-6">
            <div className="flex flex-col items-center xl:p-3 cursor-pointer">
                <p >
                    <img className="w-35 h-35 bg-gray-200 drop-shadow ring-gray-300" src='https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-of-Light-Pendant-1-360x360.jpg'></img>
                </p>
                <h1 className="h-2 mx-auto mt-3 lg:text-md text-sm font-semibold">
                    NECKLACES
                </h1>

                
            </div>
            <div className="flex flex-col items-center xl:p-3 cursor-pointer">
                <p >
                    <img className="w-35 h-35 bg-gray-200  dark:bg-gray-700 drop-shadow ring-gray-300 dark:ring-gray-600" src='https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rings-360x360.jpg'></img>
                </p>
                <h1 className="h-2 mx-auto mt-3 lg:text-md text-sm font-semibold">
                    RINGS
                </h1>

                
            </div>
            <div className="flex flex-col items-center cursor-pointer   xl:p-3">
                <p >
                    <img className="w-35 h-35 bg-gray-200  dark:bg-gray-700 drop-shadow ring-gray-300 dark:ring-gray-600" src='https://alukas.presslayouts.com/wp-content/uploads/2023/02/Rose-Gold-Bracelet-1-360x360.jpg'></img>
                </p>
                <h1 className="h-2 mx-auto mt-3 lg:text-md text-sm font-semibold">
                    BRACELETS
                </h1>

                
            </div>
            <div className="flex flex-col items-center cursor-pointer  xl:mt-0 xl:p-3 mt-4">
                <p >
                    <img className="w-35 h-35 bg-gray-200  dark:bg-gray-700 drop-shadow ring-gray-300 dark:ring-gray-600" src='https://alukas.presslayouts.com/wp-content/uploads/2023/02/Sterling-Silver-Dangles-Earrings-1-360x360.jpg'></img>
                </p>
                <h1 className="h-2 mx-auto mt-3 lg:text-md text-sm font-semibold">
                    EARNINGS
                </h1>

                
            </div>
            <div className="flex flex-col items-center xl:mt-0 cursor-pointer xl:p-3 mt-4">
                <p >
                    <img className="w-35 h-35 bg-gray-200  dark:bg-gray-700 drop-shadow ring-gray-300 dark:ring-gray-600" src='https://alukas.presslayouts.com/wp-content/uploads/2023/02/Charm-Dangles-360x360.jpg'></img>
                </p>
                <h1 className="h-2 mx-auto mt-3 lg:text-md text-sm font-semibold">
                    DANGAL
                </h1>

                
            </div>
            <div className="flex flex-col items-center cursor-pointer  xl:p-3 xl:mt-0 mt-4">
                <p >
                    <img className="w-35 h-35 bg-gray-200  dark:bg-gray-700 drop-shadow ring-gray-300 dark:ring-gray-600" src='https://alukas.presslayouts.com/wp-content/uploads/2023/04/Gift-360x360.jpg'></img>
                </p>
                <h1 className="h-2 mx-auto mt-3 lg:text-md text-sm font-semibold">
                    GIFT IDEAS
                </h1>

                
            </div>

        </div>
    </div>
</section>
      
    </div>
  )
}

export default PopularCategory
