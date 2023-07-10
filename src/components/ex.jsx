












import React, { useState } from 'react';

const Header = () => {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  const toggleCollection = () => {
    setIsCollectionOpen(!isCollectionOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold">Logo</a>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleCollection}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {isCollectionOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-gray-900 text-white transform transition-transform duration-500 ease-in-out z-10">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold">Collections</h2>
            <button
              className="text-white focus:outline-none"
              onClick={toggleCollection}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-4">
            <li><a href="/">Collection 1</a></li>
            <li><a href="/">Collection 2</a></li>
            <li><a href="/">Collection 3</a></li>
            <li><a href="/">Collection 4</a></li>
          </ul>
        </div>
      )}
      {isCollectionOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 z-0"
          onClick={toggleCollection}
        ></div>
      )}
    </header>
  );
};

export default Header;
























// import React, { useState } from 'react';
// import Login from './Login'
// import { useNavigate } from 'react-router-dom';
// // import { useNavigation } from 'react-router';
// import CollectionHover from './CollectionHover';
// import logo from '../images/purkaushal.png'


// const Navbar = () => {
//   const navigation = useNavigate()
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };
//   const [collection, setCollection] = useState(false)
//   const [searchBar, setSearchBar] = useState(false)

//   return (
    
//     <nav className="bg-white md:h-20 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0 ">
//             <img style={{height:'8vh', marginTop:15}} className='hidden md:block' src='https://purkaushal.com/wp-content/uploads/2022/03/Logo.png'></img>
//               <img style={{height:'8vh', marginTop:15}} className='block md:hidden' src={logo}></img>
//             </div>
//           </div>
//           <div style={{width:'67%'}} className="hidden md:block">
//             <div onMouseOver={()=>{if(collection){setCollection(false)}}} className="ml-10 flex items-baseline space-x-4 mt-5 mb-3">
//               <a onClick={()=>navigation('/')} className="text-black-300 hover:text-orange-800 font-semibold px-5 py-2 rounded-md cursor-pointer text-xs">
//                 HOME
//               </a>
            
//               <a onClick={()=>navigation('/ourStory')} className="text-black-300 hover:text-orange-800 px-5 py-2 rounded-md text-xs font-semibold cursor-pointer">
//                 OUR STORY
//               </a>
//               <a onClick={()=>navigation('/collection')} onMouseOver={()=>setCollection(true)}  className="text-black-300 cursor-pointer hover:text-orange-800 px-5 py-2 rounded-md text-xs font-semibold">
//                 COLLECTIONS 
//                 <i class="fa fa-angle-down" aria-hidden="true"></i>

//               </a>

//               <a onClick={()=>navigation('/contactUs')} className="text-black-300 cursor-pointer hover:text-orange-800 px-5 py-2 rounded-md text-xs font-semibold">
//                 CONTACT US
//               </a>
//               <a  className="text-black-300 hover:text-orange-800 cursor-pointer py-2 px-5  rounded-md text-xs font-medium">
//               <i className="fa fa-heart-o" aria-hidden="true"></i> 0

//               </a>
//               <a  className="text-black-300 hover:text-orange-800 cursor-pointer py-2 px-5 rounded-md text-xs font-medium">
//               <i className="fa fa-shopping-cart " aria-hidden="true"></i>

//               </a>
//               <div>
//               <a  className="text-black-300 hover:text-orange-800 cursor-pointer pl-5  py-2 rounded-md text-xs font-medium">
//               <i className="fa fa-search" aria-hidden="true"></i>
//               </a>
//               <a  className="text-black-300 hover:text-orange-800 cursor-pointer py-2 rounded-md text-xs font-semibold">
//               <Login></Login>
//               </a>
//               </div>
              
//             </div>
//           </div>
         
//           <div className="md:hidden">
//             <button
//               onClick={toggleNavbar}
//               type="button"
//               className=" inline-flex items-center text-orange-300 justify-center p-2 rounded-md   focus:outline-none  focus:ring-offset-2 "
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6 "
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {isOpen && (
//         <div className="md:hidden h-screen " id="mobile-menu">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a  className="hover:text-orange-800 block px-3 cursor-pointer py-2 rounded-md text-base font-medium">
//               Home
//             </a>
//             <hr className="w-screen"></hr>
//             <a  className="hover:text-orange-800 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">
//               Our Story
//             </a>
//             <hr className="w-screen"></hr>
//             <a  className="hover:text-orange-800 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">
//               Collection
//             </a>
//             <hr className="w-screen"></hr>
//             <a  className="hover:text-orange-800 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">
//               Contact Us
//             </a>
//             <hr className="w-screen"></hr>
//             <a  className="hover:text-orange-800 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">
//               Cart
//             </a>
//             <hr className="w-screen"></hr>
//             <a  className="hover:text-orange-800 cursor-pointer block px-3 py-2 rounded-md text-base font-medium">
//               Login
//             </a>
//           </div>
//         </div>
//       )}
//       {collection&&
//       <div onMouseLeave={()=>setCollection(false)} style={{marginLeft:700, zIndex:100, borderColor:'#BD8C49', width:500}} class="bg-white mt-4 fixed flex flex-row p-4 border-t-2">
//         <div class="flex flex-col px-4">
//         <label onClick={()=>navigation('/Collection')} class="py-2 border-b hover:text-orange-500 cursor-pointer">Earnings</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Diwali Earnings</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Fancy Studs</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Hanging Cluster</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Nose Oins</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Pendants</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Banglets</label>
//         {/* <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Earnings</label> */}
//         </div>
//         <div class="flex flex-col px-10">
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Finger Rings</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Couple Rings</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Mangal Sutra</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Bracelets</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Terzetto</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Chains</label>
//         <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Gold Coin</label>
//         {/* <label class="py-2 border-b hover:text-orange-500 cursor-pointer">Earnings</label> */}
//         </div>
        
//       </div>
//       }
//       {searchBar&&
//       <div onMouseLeave={()=>setSearchBar(false)} style={{marginLeft:1150, zIndex:100, borderColor:'#BD8C49', width:300}} class="bg-white mt-4 fixed flex flex-row p-3 border-t-2">
//         <div class="flex flex-col px-4">
//         <input class="w-52 border h-8 px-3" placeholder='Search'></input>
//         </div>
        
        
//       </div>
//       }
      
//        {/* {collection&&<div class="h-screen bg-blue-300 flex justify-center items-center z-100">
//     <div class="container mx-auto">
//         <div class="max-w-sm mx-auto md:max-w-lg">
//             <div class="w-full">
//                 <ul class="px-0">
//                     <li class="border bg-white list-none rounded-sm px-3 py-3 cursor-pointer hover:text-white hover:bg-blue-600" >List Item 1</li>
//                     <li class="border bg-white list-none rounded-sm px-3 py-3 cursor-pointer hover:text-white hover:bg-blue-600" >List Item 2</li>
//                     <li class="border bg-white list-none rounded-sm px-3 py-3 cursor-pointer hover:text-white hover:bg-blue-600" >List item 3</li>
//                     <li class="border bg-white list-none rounded-sm px-3 py-3 cursor-pointer hover:text-white hover:bg-blue-600" >List Item 4</li>
//                     <li class="border bg-white list-none rounded-sm px-3 py-3 cursor-pointer hover:text-white hover:bg-blue-600">List Item 5</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>} */}
//     </nav>
//   );
// };

// export default Navbar;      