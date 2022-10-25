import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-slate-700 lg:px-10">
                {/* -------------navbar start------------ */}
                <div className="navbar-start ">
                    {/* ---------logo show lg:--------- */}
                    <div className='hidden lg:block'>
                        <div className='flex'>
                            <Link to='/' className=" normal-case text-xl w-10">
                                <img className='w-10' src='' alt="" />Web
                            </Link>
                            <Link to='/' className='mx-1 flex items-center font-bold text-2xl text-amber-500'>Learning<span className='text-white'>Bd</span></Link>
                        </div>
                    </div>
                    {/* ------ toggle droup down -------------- */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-white mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="lg-header hiside menu menu-compact dropdown-content  p-2  shadow bg-slate-700  rounded-box w-60  lg:hidden">
                            <Link to='/' className='btn mx-6'>Home</Link>
                            <Link to='courses' className='btn'>Our Courses</Link>
                            <Link to='/project' className='btn mx-6'>our service</Link>

                            <Link to='/about' className='btn'>About</Link>
                            <Link to='skill' className='btn mx-6'>Contact us</Link>
                            <Link to='/registration' className='btn mx-6'>Registrar</Link>
                            <Link to='/login' className='btn'>Login</Link>
                        </ul>
                    </div>
                </div>
                {/* ---------------navbar-Center ----------- */}
                <div className="navbar-center">
                    {/* ---------logo show md or small--------- */}
                    <div className='flex justify-start  lg:hidden'>
                        <Link to='/' className=" normal-case text-xl w-8 sm:w-6">
                            <img className=' w-10 imates' src='' alt="" />
                        </Link><Link to='/' className='logo-text lg:mx-1 flex items-center font-bold text-2xl text-amber-500'>BO<span className='text-white'>SS</span></Link>
                    </div>
                </div>
                {/* -----------navbar-end text btn section--------- */}
                <div className="navbar-end">

                    {/* <ul className="lg-header mx-10  hidden lg:block">
                        <Link to='/' className='btn mx-6'>Home</Link>
                        <Link to='/education' className='btn'>Education</Link>
                        <Link to='skill' className='btn mx-6'>Skill</Link>
                        <Link to='/project' className='btn mx-6'>My Project</Link>

                        <Link to='/about' className='btn'>About</Link>
                        <Link to='/registrar' className='btn mx-6'>Registrar</Link>
                        <Link to='/login' className='btn'>Login</Link>
                    </ul> */}
                    <div className="hidden lg:block mr-5">

                        <ul className="lg-header menu menu-horizontal p-0">
                            <Link to='/' className='btn mx-6'>Home</Link>
                            <Link to='courses' className='btn'>Our Courses</Link>    
                            <li tabIndex={0} className=''>
                                <Link to='/development' className='btn mx-5'>
                                    our service
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>

                                {/* -----inside ui link droup-down menu----- */}
                                <ul className="px-2 pb-2 bg-slate-700 w-44">
                                    <Link to='skill' className='btn mx-6'>Skill</Link>
                                    <Link to='/project' className='btn mx-6'>Our Project</Link>

                                    <Link to='/registration' className='btn mx-6'>Registrar</Link>
                                    <Link to='/login' className='btn'>Login</Link>
                                </ul>
                                {/* -----inside ui link droup-down menu end----- */}
                            </li>    
                            <Link to='/about' className='btn'>About</Link>
                            <Link to='/registration' className='btn mx-6'>Registrar</Link>
                            <Link to='/login' className='btn'>Login</Link>

                                    {/* <Link to='/' onClick='' id='logout' className='btn mx-4'>Log out</Link> */}
                   

                        </ul>
                    </div>


                    {/* ----------you profile start----------- */}
                    <div id='avatar' className="avatar online placeholder mr-2 ">
                        <div className="w-7 rounded-full ring ring-primary
                         ring-offset-base-100 ring-offset-2">
                           
                                    <img className='w-6 bg-slate-300' src='' />
                                    
                                    {/* <img className='w-6 bg-slate-300' src="https://placeimg.com/192/192/people" /> */}
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Navbar;