import React from 'react';

const Review = () => {
    return (
        <>
            <div className="overflow-x-auto w-full">
                <div className="container flex flex-col w-full  p-1 mx-auto divide-y rounded-md divide-gray-700  dark:text-gray-100 ">
                    <div className="text-4xl py-5 text-center">All Client Reviews</div>
                    <div className="flex justify-between  md:mx-10 bg-gray-900 rounded-lg">
                        <div className="block space-x-4">
                            <div className='block md:flex md:w-72 justify-center items-center '>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full flex items-center mt-5" />

                                <h4 className="font-bold py-2 mx-2 mt-2">Leroy Jenkins</h4>
                            </div>
                        </div>

                        <div className="p-4 space-y-2 text-sm dark:text-gray-400 ml-5">
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
                                nec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Review;