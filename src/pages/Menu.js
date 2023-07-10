import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigation = useNavigate()
 
  return (
    <> 
    <div
      style={{ backgroundColor: "#755D3A" }}
      className="w-full text-white lg:flex hidden items-center justify-center "
    >
      <div className="w-3/5 py-2 text-white flex justify-between">
        <label onClick={()=>navigation('/collection')} className="cursor-pointer link link-underline link-underline-black">
          Best Seller
        </label>
        <label onClick={()=>navigation('/collection')} className="cursor-pointer link link-underline link-underline-black">
          New Arrival
        </label>
        <label onClick={()=>{
          localStorage.setItem("category","Rings");
        
          navigation('/Rings');
        }} className="cursor-pointer link link-underline link-underline-black">
          Rings
        </label>
        <label onClick={()=>{
          localStorage.setItem("category","Earrings");
        
          navigation('/collection');
        }
      
      } className="cursor-pointer link link-underline link-underline-black">
          Earrnings
        </label>
        <label onClick={()=>navigation('/collection')} className="cursor-pointer link link-underline link-underline-black">
          Bracelets & Bangles
        </label>
        <label onClick={()=>{
          localStorage.setItem("category","Nosepin");
        
          navigation('/NosePin');
        }} className="cursor-pointer link link-underline link-underline-black">
          Nose Pin
        </label>
        <label onClick={()=>navigation('/collection')} className="cursor-pointer link link-underline link-underline-black">
          Special Offer
        </label>
      </div>
    </div>
    
    </>
  );
}

export default Menu;
