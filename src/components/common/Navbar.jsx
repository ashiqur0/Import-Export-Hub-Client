import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <NavLink to='/allProducts'>All Products</NavLink>
        <NavLink to='/myExports'>My Exports</NavLink>
        <NavLink to='/myImports'>My Imports</NavLink>
        <NavLink to='/addExports'>Add Export</NavLink>
    </>

    const user = false;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Import Export Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <>
                        <button  className="btn">Log out</button>
                    </> || <div className='flex gap-3'>
                        <NavLink to='/signup' className="btn">SignUp</NavLink>
                        <NavLink to='/login' className="btn">Login</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;