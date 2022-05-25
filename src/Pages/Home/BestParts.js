import React from 'react';




const BestParts = () => {
    return (
        <div>
            <h2 className='text-dark text-center md:text-2xl mt-5 uppercase'> <strong>New Releasing Bikes for You</strong> </h2>
            <div class="carousel w-full mt-14 mb-8">

                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://raw.githubusercontent.com/AliHossain01/new-motor-cycle-parts/main/bike2800x200.jpg" class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://raw.githubusercontent.com/AliHossain01/new-motor-cycle-parts/main/bike31800x200.jpg" class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://raw.githubusercontent.com/AliHossain01/new-motor-cycle-parts/main/bike1800x200.jpg" class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://raw.githubusercontent.com/AliHossain01/new-motor-cycle-parts/main/bike2800x200.jpg" class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestParts;

{/* <h2 className='text-dark text-center md:text-2xl'> <strong>Top Product</strong> </h2> */ }