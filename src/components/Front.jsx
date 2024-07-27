import React from 'react';
import { Carousel, IconButton, Typography, Button } from "@material-tailwind/react";

const Front = () => {
    return (
        <div>

            <div className='w-full  bg-[#118DEF]  gap-5 justify-center items-center p-5 grid md:grid-cols-2 mt-2 '>

                <div className='text-center flex-col '>

                    <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-4xl dark:text-white">Reviews From Our Student </h1>
                    <div className=' w-full flex justify-center items-center text-3xl'>
                      ⭐⭐⭐
                    </div>
                </div>

                <div className=' h-[20rem]  bg-brown-50 p-3'>

                    <Carousel className="rounded-xl w-full">


                        <div className='flex items-center justify-center h-full  bg-[#FFCA5D] p-2'>
                            <div className='flex-col m-2'>
                                <div className='text-left text-xl  text-white'>One should definietly enroll in this course </div>
                                <div className='text-center text-xl'>- Megha</div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center h-full  bg-[#FFCA5D] p-2'>
                            <div className='flex-col m-2'>
                                <div className='text-left text-2xl  text-white '>I learned something new</div>
                                <div className='text-center text-xl'>- Rahul</div>
                            </div>
                        </div>


                        <div className='flex items-center justify-center h-full  bg-[#FFCA5D] p-2'>
                            <div className='flex-col m-2'>
                                <div className='text-left text-2xl  text-white'>what a course i will recommend to others </div>
                                <div className='text-center text-xl'>- shruti</div>
                            </div>
                        </div>

                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Front;
