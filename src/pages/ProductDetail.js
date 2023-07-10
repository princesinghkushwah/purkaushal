import React, { useState } from "react";
import Header from "./Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu"; 

function ProductDetail() {
  const navigation = useNavigate();
  const [customize, setCustomize] = useState(false)
  const [productImage, setProductImage] = useState("")
  const data = localStorage.getItem("productdetail")
  const jvalue = JSON.parse(data)
  const [productDetail, setProductDetail] = useState(jvalue)
  const posts = [
    {
        title: "React Tailwind Card with Grid 1",
        img: "https://kinclimg5.bluestone.com/f_webp,c_scale,w_176,b_rgb:f0f0f0/giproduct/BIPO0741S20_RAA18DIG6XXXXXXXX_ABCD00-PICS-00004-1024-53748.png",
        content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "React Tailwind Card with Grid 2",
        img: "https://kinclimg0.bluestone.com/f_webp,c_scale,w_176,b_rgb:f0f0f0/giproduct/BIPO0741S20_RAA18DIG6XXXXXXXX_ABCD00-BP-PICS-00000-1024-53748.png",
        content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "React Tailwind Card with Grid 3",
        img: "https://kinclimg3.bluestone.com/f_webp,c_scale,w_176,b_rgb:f0f0f0/giproduct/BIPO0741S20_RAA18DIG6XXXXXXXX_ABCD00-PICS-00000-1024-53748.png",
        content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
    {
        title: "React Tailwind Card with Grid 4",
        img: "https://kinclimg6.bluestone.com/f_webp,c_scale,w_176,b_rgb:f0f0f0/giproduct/BIPO0741S20_RAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-53748.png",
        content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    },
]
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <div
        className="flex flex-wrap justify-center pb-10"
        style={{
          
          width: "100%",
          
        }}
      >
        
          <div className="flex flex-col items-center lg:w-2/5 w-full">
            <img className="w-full " src={`${productImage ? productImage : productDetail?.mainImage}`}></img>
            <div className="lg:grid flex gap-2 lg:grid-cols-4 py-3 px-5 bg-white lg:bg-transparent">
                {productDetail.image.map((items, key) => (
                    <div className="w-full h-20  border-gray-300 border lg:max-w-sm" key={key}>
                        <img
                            onClick={()=>setProductImage(items)}
                            className="object-cover border-gray-300 w-full h-20"
                            src={items}
                            alt="image"
                        />
                        
                    </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col mt-5 lg:w-2/5 w-full lg:shadow-none shadow-lg  mx-5 lg:bg-transparent bg-white">
            <h2 className="text-2xl lg:text-3xl py-2 lg:text-left text-center">{productDetail?.productName}</h2>
            <h2 className="text-2xl font-semibold lg:text-left text-center">₹ {productDetail?.price}</h2>
            <label className="text-gray-500 text-sm lg:text-left text-center mb-1">
              MRP. Incl of all taxes
            </label>
            <hr className="lg:hidden"></hr>
            <div className="bg-white flex flex-col my-3 p-3">
              <div>
                <label className="text-gray-500 text-sm">Your pincode</label>
                <input className="w-2/5 border ml-2 h-7"></input>
                <button className="border bg-gray-200 h-7 px-2 text-sm font-semibold">Update</button>
              </div>
              <div className="p-2 border-dashed border my-2 text-sm">
                <label>
                  Available in our store at NIT, Faridabad and 16 other store(s)<br></br>
                  <label className="text-blue-700">View all designs in stores near you</label>
                </label>
              </div>
              <div className="text-sm ">
                Delivery By <span className="font-semibold">Today Evening (12th Jun)</span> for <span className="font-semibold">Pincode 110001</span>
                <br></br>
                <label className="text-gray-500 text-sm">
                  (Order before 4pm for same-day-delivery)
                </label>
              </div>
            </div>
            <label className="text-gray-700 font-bold py-2 lg:px-0 px-5">
              Diamond Ring In 18Kt Rose Gold (5.06 gram) with Diamonds (0.3260
              Ct)
            </label>
            <hr className="my-2 w-full border-gray-400"></hr>
            <div className="flex justify-between w-full text-black font-semibold py-2 px-5 lg:px-0">
              {customize==false?<label className="cursor-pointer" onClick={()=>setCustomize(!customize)}>Customize this product</label>:
              <label className="cursor-pointer" onClick={()=>setCustomize(!customize)}>Hide Customization</label>}
              {customize==false?<button onClick={()=>setCustomize(!customize)} className="font-semibold text-2xl">+</button>
              :<button onClick={()=>setCustomize(!customize)} className="font-semibold text-2xl">-</button>}
            </div>
            {customize&&
            <div className="flex flex-col">
              <div className="flex my-1">
               <label>Weight Gold:</label>
                <div className="bg-white mx-4 flex">
                  <div>
                  {productDetail.goldWeight.map((i)=><button className="mx-2 border-2 hover:bg-[#755D3A] hover:text-white rounded border-[#755D3A] px-3 py-1 text-sm">{i} Gram</button>)}
                </div>
                 
                </div>
              </div>
              <div className="flex my-1">
               <label>Gold Type:</label>
                <div className="bg-white mx-4 flex">
                  <div>
                  {productDetail.goldType.map((i)=><button className="mx-2 border-2 hover:bg-[#755D3A] hover:text-white rounded border-[#755D3A] px-3 py-1 text-sm">{i}</button>)}
                </div>
                 
                </div>
              </div>
              <div className="flex my-1">
               <label>Gold:</label>
                <div className="bg-white mx-4 flex">
                  <div>
                  {productDetail.gold.map((i)=><button className="mx-2 border-2 hover:bg-[#755D3A] hover:text-white rounded border-[#755D3A] px-3 py-1 text-sm">{i}</button>)}
                </div>
                  
                </div>
              </div>
              <div className="flex my-1">
               <label>Solitairy:</label>
                <div className="bg-white mx-4 flex">
                  <div>
                  {productDetail.solitairy.map((i)=><button className="mx-2 border-2 hover:bg-[#755D3A] hover:text-white rounded border-[#755D3A] px-3 py-1 text-sm">{i}</button>)}
                </div>
                 
                </div>
              </div>
              <div className="flex my-2">
               <label>Diamond:</label>
                <div className="bg-white mx-4 flex">
                  <div>
                  {productDetail.diamond.map((i)=><button className="mx-2 border-2 hover:bg-[#755D3A] hover:text-white rounded border-[#755D3A] px-3 py-1 text-sm">{i}</button>)}
                
                </div>
                 
                </div>
              </div>

            </div>}
            <hr className=" w-full border-gray-400"></hr>
           
            <div className="lg:-ml-0 -ml-5 lg:mt-0 mt-7 flex justify-between w-full lg:px-0 px-5 lg:relative fixed lg:bg-transparent bg-white lg:shadow-none shadow-2xl  border">
              <button 
                onClick={()=>navigation('/cart')}
                style={{ backgroundColor: "#755D3A" }}
                className="text-white py-2 px-1 lg:w-[45%] w-[48%] lg:text-lg text-sm font-semibold my-4"
              >
                BUY NOW
              </button>
              <button
                style={{ borderColor: "#ED3318", color:'#ED3318' }}
                className="text-white py-2 px-1 lg:w-[45%] w-[48%] lg:text-lg text-sm font-semibold my-4 border"
              >
                10+1 MONTHLY PLAN
              </button>
            </div>
            
          </div>
        
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ProductDetail;
