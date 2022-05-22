import React from 'react';
import { AiFillFlag } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const Summary = () => {
    return (
        <div>

            <div class="py-8 bg-gray-50 overflow-hidden">
                <div class="container m-auto px-6 space-y-4 text-gray-500 md:px-12">

                    <div>
                        <h2 class="mt-2 text-2xl text-gray-900 font-bold md:text-2xl text-center">Million Business Trust Us</h2>
                    </div>


                    <div class="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                            <div class="relative p-8 space-y-8">

                                <AiFillFlag className='icon' />

                                <div class="space-y-2">
                                    <h5 class="text-2xl text-gray-800 font-medium transition group-hover:text-teal-300">100+ <br />Countries </h5>

                                </div>
                            </div>
                        </div>


                        <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                            <div class="relative p-8 space-y-8">

                                <BsCurrencyDollar className='icon' />

                                <div class="space-y-2">
                                    <h5 class="text-2xl text-gray-800 font-medium transition group-hover:text-teal-300">100M+ <br />Revenues </h5>

                                </div>
                            </div>
                        </div>

                        <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                            <div class="relative p-8 space-y-8">

                                <MdOutlineEmojiPeople className='icon' />

                                <div class="space-y-2">
                                    <h5 class="text-2xl text-gray-800 font-medium transition group-hover:text-teal-300">33k+ <br />Reviews </h5>

                                </div>
                            </div>
                        </div>
                        <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                            <div class="relative p-8 space-y-8">

                                <FaTools className='icon' />

                                <div class="space-y-2">
                                    <h5 class="text-2xl text-gray-800 font-medium transition group-hover:text-teal-300">60+ <br />Tools </h5>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;