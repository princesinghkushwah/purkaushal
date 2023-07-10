import React, { useState } from 'react'
import Accordian from '../components/Accordian'
import Header from './Header'
import Footer from '../components/Footer'


const ReturnAndExchange = () => {
    const [open, setOpen] = useState(false)

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    const data = [

        {
            tittle: "7- DAYS RETURN POLICY FOR DOMESTIC ORDERS ONLY",
            desc: "It’s very rare that the order delivered is in damaged condition,or otherwise,so you can return it within 7 days of purchase.Your Payment will be refund and our courier partner will collect your item from your respective address and will get it back to us."
        },
        {
            tittle: "RETURN CHARGES ",
            desc: "Domestic Order: Our courier partner will collect the order from the provided address (within                India). Customers need not pay any shipping charges to return the product."
        },
        {
            tittle: "HOW TO INITIATE THE REFUND PROCESS?",
            desc: " 1. Customers should contact PurKaushal customer support on 1800-572-8884 within 7 days                from the receipt of product.                2. Customers should not return the product before receiving a confirmation mail from                PurKaushal about the same.                3. All the products must be returned in their original condition, unaltered and unused. 4. Provide the invoice/guarantee card into the package for the return process. Without the above, returns will not be processed NOTE: We shall not accept any request after 7 days from the date of purchase of the product"
        },
        {
            tittle: "REFUND  ",
            desc: "We shall start the process of refund once we receive the product.The product should be in unused condition and in its original packaging with its price tags without any failure. Once the refund process has been started, the amount will be directly refunded to your account via the same mode through which the transaction was made or through cheque ( amount would be refunded through cheque, only in cases where the debit/credit card used by customer while placing the order is not in use). In case the customer pays online then the amount will be refunded within 7-15 working days from the receipt of returned product(s) at the warehouse of PurKaushal"
        },


    ]
    return (
        <>
        <Header/>
        <section className="bg-gray-100 text-gray-700">
            <div className="container flex flex-col items-center justify-center py-10 mx-auto md:p-8">
                <h2 className="mb-5 text-4xl  text-center sm:text-5xl">Return and Exchange Policy</h2>

                <div className="flex flex-col mx-5 divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:w-[84%] divide-gray-700">
                    PurKaushal is committed to ensuring full customer satisfaction with respect to the products
                    available on our website, security & customer assistance. However, if you are not happy with
                    the product, you can choose to return the order.
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

export default ReturnAndExchange