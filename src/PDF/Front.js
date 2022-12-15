import React from 'react';

const Front = () => {
    return (
        <>
            <div className='w-[100%] md:h-[110vh] pt-20 relative'>
                <div className="absolute top-10 right-5 z-50">
                    <a a href='https://drive.google.com/file/d/1ssRKdmJdYiqbE47VWROpOlPCPpX5WYgX/view' className='absolute top-10 right-44 btn bg-amber-600 outline-none mt-2 text-white'>downlode</a>
                </div>
                <iframe className='Pdf w-[90%] md:h-[100vh] h-[80vh] mx-auto bg-[#14213D]' src="https://drive.google.com/file/d/1ssRKdmJdYiqbE47VWROpOlPCPpX5WYgX/preview" allow="autoplay"></iframe>
            </div>
        </>
    );
};

export default Front;