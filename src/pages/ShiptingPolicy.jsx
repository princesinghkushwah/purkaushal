import React from 'react'
import Header from './Header'
import Footer from '../components/Footer'

const ShiptingPolicy = () => {
    return (
        <>
         <Header/>
        
        <section className="bg-gray-100 text-gray-700">
            <div className="container flex flex-col items-center justify-center py-10 mx-auto md:p-8">
                <h2 className="mb-5 text-4xl text-center sm:text-5xl">SHIPPING POLICY
                </h2>

                <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:w-[84%] px-5 divide-gray-700">
                    In India, PurKaushal serves selected cities. Please check if we deliver to your pincode in the
                    shopping cart checkout page. If there will be no courier service available in your area, we do
                    apologize for the inconvenience.If you believe your package was damaged in shipping, we
                    require that you contact us within 5 days of delivery and we will work with you to quickly resolve
                    the issue. All refund recipients will receive an email confirmation for their records.
                </div>
                <div className="flex-col divide-y sm:flex-row sm:divide-y-0 sm:divide-x mx-5 sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <h3 className="font-semibold mb-2 mt-6 leading-none">SHIPPING & HANDLING CHARGES  </h3>
                    We are with the partnership to the trusted delivery or courier agency so that they can deliver the
                    product within the time limit and safely to the customers.We also ensure that the delivery man
                    must have an identity proof for the verification purpose.
                    PLEASE NOTE: Recipient needs to produce passport or driving license for receiving the
                    delivery.Domestic Order: We provide free shipping within India.
                    Custom Clearance: All shipments of Jewellery exported from India need to be cleared by the
                    Indian Customs office. Products along with their complete documentation are filed with the
                    authorized officer of the Indian Customs office for inspection, examination and assessment and
                    only then delivered to your shipping address. Hence, please ignore the message on the
                    package section which mentions: Please do not accept if the package is received in Open/
                    Tempered condition. You will find the package sealed with a label saying Opened for Customs.
                    Shipping Partner: Our domestic logistic partner is Blue Dart, Delhivery & Ecom Express. Our
                    international logistic partner is UPS.
                </div>
                <div className="grid gap-5 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32 mt-5 mx-5">

                    <div>
                        <h3 className="font-semibold">TRACK ORDER
                        </h3>
                        <p className="mt-1 divide-gray-700">All the registered customers can track their respective orders through Track Order Option.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">TIME TO DELIVER
                        </h3>
                        <p className="mt-1 divide-gray-700">Time taken for the delivery may vary for the different places. Moreover, we make our best efforts
                            to deliver your products as soon as possible.
                            Delivery Time for Domestic Orders
                            The product is delivered within 15 working days in India from the day of order confirmation,
                            provided such delivery is not delayed by any governmental authority or any other entity acting
                            on behalf of the government or acting as per the directions of the government.
                            Transit Insurance: All goods will be fully insured by PurKaushal Company Limited until they
                            reach you, so your purchase is 100% safe.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        </>
    )
}

export default ShiptingPolicy