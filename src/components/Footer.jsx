import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';




const Footer = () => {
    const [dropdownToggle, setdropdownToggle] = useState(false)
    const [dropdownToggle1, setdropdownToggle1] = useState(false)
    const [dropdownToggle2, setdropdownToggle2] = useState(false)



    const navigation = useNavigate()
    return (
        <footer style={{backgroundColor:"black"}} className="sm:px-4 lg:px-40 w-full divide-y  text-white">
            <div className="container sm:px-7 flex flex-col justify-between py-10 mx-auto sm:space-y-2 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3 my-4">
                    <Link href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <img style={{height:'5vh'}} src='https://purkaushal.com/wp-content/uploads/2022/03/Logo.png'></img>
                    </Link>
                </div>
                <div className="hidden sm:grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="heading text-2xl tracking-wide  text-white font-medium">About</h3>
                        <ul className="space-y-1">
                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/ourStory')}>Our Story</p>
                            </li>
                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/contactUs')}>Contact Us
                                </p>
                            </li>

                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/Faq')}>FAQ</p>

                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="heading text-2xl tracking-wide text-white font-medium">Store</h3>
                        <ul className="space-y-1">
                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/TermsAndConditions')}>Terms and condition</p>
                            </li>
                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/ReturnAndExchange')} >Return and exchange policy</p>
                            </li>
                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/ShiptingPolicy')}>Shipping policy</p>
                            </li>
                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/PrivacyPolicy')}>Privacy policy</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="heading text-2xl text-white font-medium">Care</h3>
                        <ul className="space-y-1">
                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/Collection')}>Collections</p>
                            </li>
                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/TermsAndConditions')}>My Account</p>
                            </li>
                            <li>
                                <p style={{ cursor: 'pointer' }} onClick={() => navigation('/TermsAndConditions')}>Wishlist</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="heading text-2xl text-gray-50">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <p href="#" title="Facebook" className="flex items-center p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                </svg>
                            </p>
                            <p href="#" title="Twitter" className="flex items-center p-1">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                                </svg>
                            </p>
                            <p href="#" title="Instagram" className="flex items-center p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>



                <div className=" sm:hidden  px-3 " >
                    <button className="text-white border font-medium  text-sm px-4 py-2.5 
                    text-center  items-center w-full flex justify-between" type="button" data-dropdown-toggle="dropdown" onClick={() => setdropdownToggle(!dropdownToggle)}> <span>About</span>
                        <svg className="w-4 h-4 ml-2"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    {dropdownToggle && <div className={" text-base z-50 list-none  divide-gray-100  shadow "} id="dropdown">
                        <div className="px-4 ">
                            {/* <   span className="block text-sm">Bonnie Green</span> */}
                            {/* <span className="block text-sm font-medium text-gray-900 truncate">About</span> */}
                        </div>
                        <ul className="py-1 bg-transparent text-white border border-t-0" aria-labelledby="dropdown">
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/ourStory')}>Our Story</p>
                            </li>
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/contactUs')}>Contact Us
                                </p>
                            </li>
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/Faq')}>FAQ</p>
                            </li>
                        </ul>
                    </div>}
                </div>

                <div className="sm:hidden px-3">
                    <button className="text-white border font-medium  text-sm px-4 py-2.5 
                    text-center  items-center w-full flex justify-between" type="button" data-dropdown-toggle="dropdown" onClick={() => setdropdownToggle1(!dropdownToggle1)}> <span>Store</span>
                        <svg className="w-4 h-4 ml-2"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    {dropdownToggle1 && <div className={"  text-base z-50 list-none  divide-gray-100  shadow "} id="dropdown">
                        <div className="px-4 ">
                            {/* <span className="block text-sm">Bonnie Green</span>
                            <span className="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span> */}
                        </div>
                        <ul className="py-1  text-white border border-t-0" aria-labelledby="dropdown">
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/TermsAndConditions')}>Terms and condition</p>
                            </li>
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/ReturnAndExchange')} >Return and exchange policy</p>
                            </li>
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/ShiptingPolicy')}>Shipping policy</p>
                            </li>
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/PrivacyPolicy')}>Privacy policy</p>
                            </li>
                        </ul>
                    </div>}
                </div>
 
                <div className="sm:hidden px-3">
                    <button className="text-white border font-medium  text-sm px-4 py-2.5 
                    text-center  items-center w-full flex justify-between" type="button" data-dropdown-toggle="dropdown" onClick={() => setdropdownToggle2(!dropdownToggle2)}> <span>Care</span>
                        <svg className="w-4 h-4 ml-2"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    {dropdownToggle2 && <div className={"  text-base z-50 list-none  divide-gray-100  shadow "} id="dropdown">
                        <div className="px-4 ">
                            {/* <span className="block text-sm">Bonnie Green</span>
                            <span className="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span> */}
                        </div>
                        <ul className="py-1  text-white border border-t-0" aria-labelledby="dropdown">
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/Collection')}>Collections</p>
                            </li>
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/TermsAndConditions')}>My Account</p>
                            </li>
                            <li>
                                <p className='text-sm hover:bg-gray-100  block px-4 py-2' style={{ cursor: 'pointer' }} onClick={() => navigation('/TermsAndConditions')}>Wishlist</p>
                            </li>
                        </ul>
                    </div>}
                </div>

                <div className="sm:hidden max-w-lg  mx-auto mt-4">
                    <div className="heading text-2xl text-gray-50">Social media</div>
                    <div className="flex justify-around">
                        <p title="Facebook" className="flex items-center p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                            </svg>
                        </p>
                        <p title="Twitter" className="flex items-center p-1">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                            </svg>
                        </p>
                        <p title="Instagram" className="flex items-center p-1">
                            <svg x mlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                                <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© All rights reserved.</div>
        </footer>
    )
}

export default Footer