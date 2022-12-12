import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(e => console.error(e));
            })
            .catch(e => {
                console.error(e)
                setSignUpError(e.message)
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-xi-flame.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);

            })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-semibold text-center mb-9'>Sign Up
                </h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: 'Email is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password"  {...register("password", {
                            required: "Password is missing",
                            minLength: { value: 6, message: "Password must be at least six characters" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase number and special character' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    <input className='btn btn-accent w-full mt-8' type="submit" value='Sign Up' />

                </form>
                <p className='pt-3 text-center font-semibold'>Already have an account? <Link className='text-secondary' to='/login'>Please login</Link></p>
                <div className="divider my-6">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;