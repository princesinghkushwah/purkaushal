import React from 'react'

const Testimonials = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-center text-xl tracking-tight sm:text-4xl">
                    Customer Says
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    <blockquote className="rounded-lg bg-gray-100 p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt="Man"
                                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="h-16 w-16 rounded-full object-cover"
                            />

                            <div>

                                <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
                            </div>
                        </div>

                        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                            voluptatem alias ut provident sapiente repellendus.
                        </p>
                    </blockquote>

                    <blockquote className="rounded-lg bg-gray-100 p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt="Man"
                                src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg"
                                className="h-16 w-16 rounded-full object-cover"
                            />

                            <div>

                                <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
                            </div>
                        </div>

                        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                            voluptatem alias ut provident sapiente repellendus.
                        </p>
                    </blockquote>

                    <blockquote className="rounded-lg bg-gray-100 p-8">
                        <div className="flex items-center gap-4">
                            <img
                                alt="Man"
                                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                className="h-16 w-16 rounded-full object-cover"
                            />
                            <div>

                                <p className="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
                            </div>
                        </div>

                        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                            voluptatem alias ut provident sapiente repellendus.
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default Testimonials