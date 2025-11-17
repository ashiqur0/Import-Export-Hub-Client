import React, { use, useState } from 'react';
import logo from '/logo.png'
import { IoCloseOutline } from 'react-icons/io5';
import { CiMenuFries } from 'react-icons/ci';
import { Link, NavLink } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = use(AuthContext);

    const links = <>
        <NavLink to='/allProducts'>AllProducts</NavLink>
        <NavLink to='/myExports'>MyExports</NavLink>
        <NavLink to='/myImports'>MyImports</NavLink>
        <NavLink to='/addExports'>AddExport</NavLink>
    </>

    const handleLogOut = () => {
        return logOut()
            .then(() => {
                toast.success('Success Logout...');
            })
            .catch(error => {
                toast.error('Logout Failed with: ', error.code);
            })
    }

    return (
        <section className='p-4 shadow-md shadow-slate-900 bg-slate-900 '>
            <nav className='md:flex justify-between items-center max-w-7xl mx-auto'>
                <div className='flex justify-between items-center cursor-pointer'>

                    {/* Logo and Brand Name Link to Home Page */}
                    <Link to='/' className='flex items-center gap-3 md:gap-3'>
                        <img className='w-7 lg:w-10' src={logo} alt="" />
                        <h1 className='font-inter font-xl lg:text-2xl font-bold'>Import Export Hub</h1>
                    </Link>

                    {/* PopUp Icons for Mobile Screen */}
                    <div className='md:hidden cursor-pointer mr-2'
                        onClick={() => setOpen(!open)}>
                        {open ? <IoCloseOutline /> : <CiMenuFries />}
                    </div>

                    <ul className={`z-10 w-full text-center md:hidden flex flex-col absolute duration-1000 hover:shadow-sm py-1 rounded-sm bg-slate-900 px-4 text-white text-md
                        ${open ? 'top-16 right-0' : '-top-64 right-0'}
                        `}>{links}
                        {
                            user ? <>
                                <Link to='/'><button onClick={handleLogOut}>Logout</button></Link>
                            </>
                                :
                                <>
                                    <NavLink to='/signup'>Signup</NavLink>
                                    <NavLink to='/login'>Login</NavLink>
                                </>
                        }
                    </ul>
                </div>

                <div>
                    <ul className='md:flex hidden gap-8 font-semibold text-white'>
                        {links}
                    </ul>
                </div>

                <div className='md:flex hidden gap-3'>
                    {
                        user ? <>
                            <NavLink
                                // onClick={handleLogOut}
                                to='/' className="rounded-sm font-semibold hover:bg-slate-800 bg-slate-900"
                            >
                                <button onClick={handleLogOut}>Logout</button></NavLink>
                            <Link
                                to='/'
                                className='w-10 border border-green-500 rounded-full ml-3 cursor-pointer'
                            >
                                <img
                                    className='rounded-full w-8 h-8'
                                    src={`${user && user?.photoURL}` } title={user.displayName} />
                            </Link>
                        </>
                            :
                            <>
                                <Link to='/login' className="rounded-sm font-semibold hover:bg-slate-800 bg-slate-900"><button>Login</button></Link>
                                <Link to='/signup' className="rounded-sm font-semibold hover:bg-slate-800 bg-slate-900"><button>Signup</button></Link>
                            </>
                    }
                </div>
            </nav>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </section>
    );
};

export default Navbar;