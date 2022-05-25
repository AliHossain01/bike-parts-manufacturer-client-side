import React from 'react';

const TopSellings = () => {
    return (
        <div>
            <h2 className='text-dark text-center md:text-2xl mt-5'> <strong>Top Selling Products</strong> </h2>
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">


                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://raw.githubusercontent.com/AliHossain01/new-motor-cycle-parts/main/helmet.jpg" alt="Helmet" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Helmet</div>

                    </div>

                </div>

                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://raw.githubusercontent.com/AliHossain01/new-motor-cycle-parts/main/engine.jpg" alt="Engine" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Engine</div>

                    </div>

                </div>


                <div class="rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://raw.githubusercontent.com/AliHossain01/new-motor-cycle-parts/main/tire.jpg" alt="Tire" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Tire</div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default TopSellings;