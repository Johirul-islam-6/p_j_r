import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExtraProject = () => {
    const [imgss, setImg] = useState()
    useEffect(() => {
        fetch('https://web-technology-server-site.vercel.app/simple')
            .then(res => res.json())
            .then(data => {
                setImg(data)
            })

    }, [])

    console.log(imgss);
    return (
        <div className='w-[100%]  bg-[#14213D]'>

            <h1 className='py-14 text-4xl text-center fonts'>Simple 3 Project</h1>

            <div className="grid gird-cols-1 md:grid-cols-3 gap-x-5 borderBtn">

                {imgss?.map(product => <>
                    <div key={product?.id} className="card  z-50">
                        <figure><img className='h-[60vh]' src={product?.img} alt="product image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Site Title : {product?.name}</h2>
                            <Link to={`/simple-project/${product?.id}`} className='btn btn-primary'>Details</Link>

                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>

                </>
                )}


            </div>
            <Link to={`/project`} className="btn btn-primary w-[20%] flex mx-auto mt-10">More Porjects..</Link>
        </div>
    );
};

export default ExtraProject;