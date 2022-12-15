import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import './Contact.css'
import emailJs from 'emailjs-com'
import AOS from 'aos';


const EmailSendMessage = () => {
    useEffect(() => {

        AOS.init();

    }, [])

    // const sendIngEmail = (event) => {
    //     event.preventDefault()
    //     const from = event?.target;
    //     const name = from?.name?.value;
    //     const email = from?.email?.value;
    //     const message = from?.message?.value;
    //     // const confirmPassword = from?.cPasswor?.value
    //     if (from) {
    //         toast.success('Sending Email Successfully')
    //         from.reset()
    //     }

    //     emailJs.sendForm('service_womd0xn', 'template_859itvh', event.target, 'Z3lDPSteTONgmbOq9')
    //         .then(res => {
    //             console.log(res);
    //         }).catch(err => console.log(err))


    // }

    return (
        <>
            <section
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-duration="1000"
                className="p-6 dark:bg-gray-800 dark:text-gray-50">

                <form action="https://getform.io/f/346003ba-86ef-4b17-9fc1-6ebd93a3af1a" method="POST">
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="hidden md:grid space-y-2 col-span-full lg:col-span-2">
                            <div className="imagediv"></div>
                        </div>
                        <div className=" space-y-2 col-span-full lg:col-span-2">
                            <p className="text-2xl md:text-center uppercase">Send Email</p>
                            <p className="text-sm md:text-center pb-3">If you have something to say, you can write it here !</p>

                            <div className="block">
                                <input
                                    type="text" name="name"
                                    id='name'
                                    placeholder='Your full Name'
                                    className=" input input-bordered w-full justify-center flex mx-auto"
                                    data-temp-mail-org='0'
                                    required />

                            </div>
                            <div className="block py-5">
                                <input type="email" name="email" id='email' placeholder="Your Email" className=" input input-bordered w-full justify-center flex mx-auto" data-temp-mail-org='0' required />
                            </div>
                            <div className="block ">
                                <input name='phone' id='phone' type="number" placeholder="Your Phone Number" className=" input input-bordered w-full justify-center flex mx-auto" data-temp-mail-org='0' required />
                            </div>
                            <div className="block pt-5">
                                <textarea type="text" name="message" className="textarea textarea-info w-full justify-center flex mx-auto" placeholder="Bio"></textarea>
                            </div>
                            <div className="flex py-1">
                                <div className="grid grid-cols-1 md:grid-cols-4">
                                    <label className="pl-1 mr-3 ">
                                        <span className="label-text text-[18px] md:text-[15px] text-amber-600">What is your Gender ? : </span>
                                    </label>
                                    <span className='mr-5 text-[15px] pl-1'><span className="label-text-alt text-[15px] cursor-pointer">Male   : <input className='w-[20px]' type="radio" name="gender" value="male" checked /></span></span>
                                    <span className='mr-5 text-[15px] pl-1'><span className="label-text-alt text-[15px] cursor-pointer">Femail : <input className='w-[20px]' type="radio" name="gender" value="female" checked /></span></span>
                                    <span className='mr-5 text-[15px] pl-1'><span className="label-text-alt text-[15px] cursor-pointer">Other : <input className='w-[20px]' type="radio" name="gender" value="other" checked /></span></span>
                                </div>
                            </div>

                            <button type="submit" className='btn btn-primary w-[100%]' >Submite</button>

                        </div>

                    </div>

                </form>
            </section>
        </>
    );
};

export default EmailSendMessage;