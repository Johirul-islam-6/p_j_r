import React from 'react';

const Marn = () => {
    return (
        <div>
            <div className='w-[100%] md:h-[110vh] pt-20 relative'>
                <div className="absolute top-10 right-5 z-50">
                    <a a href='https://drive.google.com/file/d/1Ka9CVaSTMAXRkvuXqCd0IgnsSYBRkl-J/view' className='absolute top-10 right-44 btn bg-amber-600 outline-none mt-2 text-white'>downlode</a>
                </div>

                <iframe className='Pdf w-[90%] md:h-[100vh] h-[80vh] mx-auto bg-[#14213D]' src="https://drive.google.com/file/d/1Ka9CVaSTMAXRkvuXqCd0IgnsSYBRkl-J/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        </div>
    );
};

export default Marn;