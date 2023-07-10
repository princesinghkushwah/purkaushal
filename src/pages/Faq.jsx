import React, { useState } from 'react'
import { Collapse } from 'react-collapse'
import Accordian from '../components/Accordian'
import Header from './Header'
import Footer from '../components/Footer'

const Faq = () => {
    const [open, setOpen] = useState(false)

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }


    const data = [
        {
            tittle: "What is the estimated delivery time?",
            desc: "For orders within India, our delivery date depends on the product selected as well as the   shipping address provided by you. We have several products under the Same Day Shipping section. These are ready to ship products and will be delivered to your address            within 10-15 business days."
        },
        {
            tittle: "Customer Delight",
            desc: "In case your queries were unanswered contact our Customer Delight team at            1800-567-8884"
        },
        {
            tittle: "Will I have to pay for shipping the product back to you?",
            desc: "We offer FREE Return Shipping. You’ll receive complimentary return shipping on all            resizing, exchanges, or refunds for all products within the 30-day money back policy.            This is, however, applicable for orders within India only."
        },
        {
            tittle: " Is my jewellery authentic and certified? ",
            desc: " All diamond and gemstone jewellery bought from PurKaushal.com is certified by SGL,            IGI, GIA or HKD and all gold jewellery bought from PurKaushal.com is BIS hallmarked,            some of the most respected and trusted diamond grading bodies in the world"
        },
        {
            tittle: "What will my packing be like?",
            desc: "Your jewellery will arrive in exclusive PurKaushal gift boxes."
        },
        {
            tittle: " Can I order by phone?",
            desc: "Sure.You can browse through our designs on the website and order your            selected design by phone. Our customer Delight representative would help you            place the order. Please contact them at 1800-576-8884"
        },
        {
            tittle: "Will I get an order confirmation?",
            desc: "Yes. Your order confirmation will be sent to the email you provide while placing            your order."
        },
        {
            tittle: "How to Cancel an Order? ",
            desc: "Please contact our Customer Delight team at 1800-576-8884 to cancel your orders."
        },
        {
            tittle: "How do I track my order after it has been shipped?",
            desc: "Please log in to your PurKaushal account and track your order in the “Order History” section of your account."
        },
        {
            tittle: "Are there any hidden costs?",
            desc: "There are no hidden costs or additional shipping charges. The total price            mentioned on the product page next to the photograph is the final price. What            you see is what you pay."
        },
        {
            tittle: "100% Certified Jewelry",
            desc: "We have 100 % certified jewelry,each and every piece you get is fully checked for quality and authenticity by reputed organization. Every piece of jewelry carries the trusted BIS Hallmarkassuring the purity of the gold it has been moulded out of. The diamonds in our collections come with a certificate of authenticity from prestigious laboratories such as IGI, SGL and HKD. All PurKaushal solitaires carry a certificate of authenticity from world-renowned laboratories such as GIA and IGI."
        },
        {
            tittle: "Lifetime Exchange & Money Back:",
            desc: "If you feel that you get bored of your PurKaushal old jewelry then you can exchange it and canbuy with your choice. We offer a Lifetime Exchange & Buyback Policy on all purchases madefrom PurKaushal, within India. The product, along with the original product certificate can bereturned or exchanged basis its current market value, with deductions towards making charges. We do not charge for return shipping on any returns or exchanges."
        },
        {
            tittle: "100% Refund",
            desc: "In the rare occasion that you are not satisfied with our product within 30 days,we will refund100% of your money back. Once a product is returned under our 30-Day Money-Back policy, therefund will be credited to your PurKaushal account. You may choose to either make anotherpurchase using the same or get the amount refunded to your bank account. We offer free return shipping on all resizing, exchanges, or refunds for all products within 30 days of the purchase. This is applicable to orders within India"
        },

    ]
    return (

        <>
        <Header/>
            <section className='bg-gray-100 text-gray-700 grid place-items-center py-10'>
                <h2 className="text-4xl font-bold leading-none text-center sm:text-5xl pb-5">Frequently Asked Questions</h2>

                <div className='px-5 text-base lg:text-lg lg:w-[80%]'>
                    {data.map((d, index) => (
                        <Accordian key={index} open={index === open} tittle={d.tittle} desc={d.desc} toggle={() => toggle(index)} />

                    ))}
                </div>
            </section>
           <Footer/>
        </>

    )
}

export default Faq