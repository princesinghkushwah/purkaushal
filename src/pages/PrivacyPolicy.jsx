import React from 'react'
import Header from './Header'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
    return (
        <>
        <Header/>
        
        <section className="bg-gray-100 text-gray-700">
            <div className="container flex flex-col items-center justify-center py-10 mx-auto md:p-8">
                <h2 className="mb-5 text-4xl font-bold leading-none text-center sm:text-5xl">PRIVACY POLICY

                </h2>

                <div className="flex mx-5 flex-col lg:w-[84%] divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8  divide-gray-700">
                    We know that your privacy is important and we respect that. We assure you that PurKaushal maintains complete confidentiality of the details that you have shared with us and will
                    not share it with any third party. We ask for certain details like name,date of birth,e-mail address ,contact number etc. just for the feedback’s contents
                    or while placing an order.Also, for enhanced security, we do not accept any financial information on its servers. All information entered by
                    the customer is directly received through our payment gateway and is transmitted to their respective bank’s servers. All this is done through
                    an industry standard encryption protocol known as SSL (Secure Socket Layer). The payment that we
                    received is not accessible to any third party disclosure agreement with us and we will not share any personal information of any customers.
                </div>


            </div>
        </section>
        <Footer/>
        </>
    )
}

export default PrivacyPolicy