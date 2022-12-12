import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setLoginUserEmail(data.email);

            })
            .catch(e => {
                console.error(e.message)
                setLoginError(e.message);
            });
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-semibold text-center mb-9'>Login
                </h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="text"  {...register("email", { required: 'Email is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-orange-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password"  {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert" className='text-orange-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text font-semibold">Forget Password</span>
                        </label>
                    </div>

                    <input className='btn btn-accent w-full mt-4' type="submit" value='Login' />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='pt-3 text-center font-semibold'>New to doctors portal? <Link className='text-secondary ' to='/signup'>Create new account</Link></p>
                <div className="divider my-6">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;