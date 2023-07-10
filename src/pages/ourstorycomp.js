import React from "react";
import { useNavigate } from "react-router-dom"

const About3 = () => {
    const navigation = useNavigate()
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div className="lg:w-10/12 w-full my-5 lg:my-0" >
                <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-4 ">
                    <h2 className="heading text-4xl lg:text-5xl leading-3 cursor-pointer mb-7 lg:mb-12 w-full text-center">About Us</h2>
                    <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10">
                    <img className="sm:hidden block w-full" src="https://purkaushal.com/wp-content/uploads/2022/06/74-G-Pendant-Model.jpg" alt="people discussing on board" />
                        <div className="w-full lg:w-2/4 border py-5 bg-white lg:absolute lg:mt-40 lg:p-12  px-5 text-justify">
                            <h4 className="heading capitalize w-full lg:text-2xl text-2xl lg:leading-10 leading-9 text-center">We believe That Jewellery Complete Your Look</h4>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-5 mb-3">At PurKaushal, we believe that the finest jewelry needs to come from the heart. Jewelry is a statement of fashion, luxury and nobility all around the world. Let your style shine bright!! With our alluring collection of traditional jewelry as well as vintage diamond collection. Designed by professional artists and crafted by the world’s best craftsmen. We are all about the luxurious, feasible, exclusive and outstanding designs with easy and smooth shopping experience.</p>
                            <div><i onClick={() => navigation('/OurStory')} class="fa fa-long-arrow-right fa-2x cursor-pointer" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <img style={{ marginLeft: 600 }} className="lg:block hidden w-full" src="https://purkaushal.com/wp-content/uploads/2022/06/74-G-Pendant-Model.jpg" alt="people discussing on board" />
                            {/* <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" /> */}
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default About3;
