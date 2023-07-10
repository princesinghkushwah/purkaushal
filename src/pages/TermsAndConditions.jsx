import React, { useState } from 'react'
import Accordian from '../components/Accordian'
import Header from './Header'
import Footer from '../components/Footer'

const TermsAndConditions = () => {
    const [open, setOpen] = useState(false)

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    const data = [

        {
            tittle: " ELIGIBILITY CRITERIA",
            desc: "If you are below 18 years of age, you are restricted to use or purchase from or with this            website. Persons who are not intended to contact within the meaning of the Indian Contract            Act, 1872 are not eligible to use this website."
        },
        {
            tittle: "PRICING AND PAYMENT            ",
            desc: "Orders can be shipped within India, so the payment can only be accepted in INR. CGST/SGST and IGST,are applicable in prices. Any other import duties or charges levied in the destination country of the shipment has to be borne by the recipient of the order. No returns/exchange/refund applicable for international            orders."
        },
        {
            tittle: "DELIVERY SCHEDULE       ",
            desc: "We recognize that your privacy is major to you and we respect that. We ensure you that we maintain complete confidentiality of the details that you have shared with us and will not share it with any third party. A provisional delivery date/time will be given along with the order confirmation. The correct delivery date shall be given to you as soon as your order is ready for dispatch. Alternatively, customers can track their order by clicking Track Order and find the order sta"
        },
        {
            tittle: "CANCELLATION BY CUSTOMERS            ",
            desc: "Once an order is placed, it can only be canceled before it is shipped to the provided destination.Registered customers can always check the status of their order from the Track Order availableat our website. Once we receive a cancellation we will start the process of refunding theamount to your account or via different modes of payments."
        },


    ]
    return (
        <>
        <Header/>
        <section className="bg-gray-100 text-gray-700">

            <div className="container flex flex-col items-center justify-center py-10 mx-auto md:p-8">
                <h2 className="mb-5 text-4xl font-bold leading-none text-center sm:text-5xl">TERMS AND CONDITIONS</h2>

                <div className="flex px-5 flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:w-[84%] divide-gray-700">
                    PurKaushal Jewellers, has its headquarters at Baran, Rajasthan, India. The Platforms are
                    owned and edited by PurKaushal Jewellers.
                    These Terms of Use govern your use of PurKaushal Jewellers websites and mobile applications
                    (together the “Platforms”). In these Terms of Use, we use the term PurKaushal Jewellers (and
                    “we”, “us” and “our”) to refer to the head office of PurKaushal Jewellers at the registered
                    address above and its affiliates.
                    Kindly read these terms and conditions before using this platform. By using the Platform, you
                    signify your approval and agreement to these Terms. If you do not agree to these terms and
                    conditions you are not allowed to access through the website.
                    If you have any queries about these terms and conditions or any complaints or suggestions
                    regarding our website, or call us on 1800-576-8884 (Timings: 10.00 A.M to 7.00 P.M Indian
                    Standard Time).
                </div>
                <section className='bg-gray-100 text-gray-700 pt-5 grid place-items-center'>

                    <div className='px-5 lg:w-[84%]'>
                        {data.map((d, index) => (
                            <Accordian key={index} open={index === open} tittle={d.tittle} desc={d.desc} toggle={() => toggle(index)} />

                        ))}
                    </div>
                </section>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default TermsAndConditions