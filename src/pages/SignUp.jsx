import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const SignUp = () => {

    const { signupWithEmail, googleSignIn, updateUser, setUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.state);
    const [passwordError, setPasswordError] = useState('');
    const { toggle } = useAuth();

    const handleSignup = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordFormat.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Password Not Strong Enough",
                text: "Password should contain Uppercase, Lowercase and atleast 6 character",
                footer: '<a href=""></a>'
            });
            return setPasswordError('Password should contain Uppercase, Lowercase and atleast 6 character');
        }

        signupWithEmail(email, password)
            .then(result => {
                const user = result.user;

                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        Swal.fire({
                            title: "SignUp success!",
                            icon: "success",
                            draggable: true
                        });
                        navigate(`${location.state ? location.state : '/'}`);
                    })
                    .catch((error) => {
                        Swal.fire({
                            icon: "error",
                            title: `${error.code}`,
                            text: `${error.message}`,
                            footer: '<a href=""></a>'
                        });
                        setUser(user);
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: `${error.code}`,
                    text: `${error.message}`,
                    footer: '<a href=""></a>'
                });
            })
        console.log({ name, email, photo, password });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    title: "Signup!",
                    text: "Your account has been created successfully.",
                    icon: "success"
                });
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((err) => {
                alert(err);
            })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <title>Import-Export Sign up</title>
            <div className={`card ${toggle && 'bg-slate-800'} w-full max-w-sm shrink-0 shadow-2xl border border-slate-700`}>
                <h2 className='text-center text-3xl font-semibold mt-6 '>Sign up here</h2>
                <form onSubmit={handleSignup}
                    className="card-body">
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input
                            type="txt"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='name'
                            placeholder="Your Name"
                            required
                        />

                        <label className="label">Email</label>
                        <input
                            type="email"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='email'
                            placeholder="Email"
                            required
                        />

                        <label className="label">Photo</label>
                        <input
                            type="txt"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='photo'
                            placeholder="Photo URL"
                            required
                        />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            className={`input w-full ${toggle && 'bg-slate-800'}`}
                            name='password'
                            placeholder="Password"
                            required
                        />

                        <p className='text-red-500'>{passwordError}</p>
                        <button type='submit' className="btn btn-neutral mt-4">Sign up</button>

                        {/* Google */}
                        <div onClick={handleGoogleSignIn}
                            className="btn border hover:border-rose-600 bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Signup with Google
                        </div>

                        <p>Already have an account? <Link to='/login'><span className='text-blue-500'>login</span></Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUp;