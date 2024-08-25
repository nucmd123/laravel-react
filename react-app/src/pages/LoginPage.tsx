import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { GoogleButtonLogin } from '../components/GoogleButtonLogin'
import { loginService, TLoginPayload } from '../services/authService'

export const LoginPage = () => {
    // use get width for google login button
    const inputRef = useRef<HTMLDivElement>(null)
    const [btnWidth, setBtnWidth] = useState<number>()
    useEffect(() => {
        setBtnWidth(inputRef.current?.offsetWidth)
    }, [btnWidth])

    // handle login form
    const { register, handleSubmit, formState } = useForm<TLoginPayload>()
    const handleLogin: SubmitHandler<TLoginPayload> = (payload) => {
        loginService(payload)
    }

    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md rounded-xl bg-white p-8 shadow'>
                <h1 className='text-center text-lg font-bold'>Đăng nhập</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='mb-4' ref={inputRef}>
                        <label
                            htmlFor='email'
                            className='mb-1 block text-sm font-semibold text-gray-800'
                        >
                            Email <span className='text-red-500'>*</span>
                        </label>
                        <input
                            id='email'
                            type='text'
                            defaultValue={'huythaia123@gmail.com'}
                            className={`w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring ${formState.errors.email ? 'border-red-500 ring-red-300' : ''}`}
                            {...register('email', {
                                required: 'Bạn chưa điền thông tin này',
                            })}
                        />
                        {formState.errors.email && (
                            <div className='text-xs text-red-500'>
                                {formState.errors.email.message}
                            </div>
                        )}
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='password'
                            className='mb-1 block text-sm font-semibold text-gray-800'
                        >
                            Mật khẩu <span className='text-red-500'>*</span>
                        </label>
                        <input
                            id='password'
                            type='password'
                            defaultValue={'123456789'}
                            className={`w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring ${formState.errors.password ? 'border-red-500 ring-red-300' : ''}`}
                            {...register('password', {
                                required: 'Bạn chưa điền thông tin này',
                            })}
                        />
                        {formState.errors.password && (
                            <div className='text-xs text-red-500'>
                                {formState.errors.password.message}
                            </div>
                        )}
                    </div>
                    <div className='mb-4'>
                        <button
                            type='submit'
                            className='w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-500'
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <p className='mb-4 select-none text-center text-blue-700 hover:cursor-pointer hover:underline'>
                        Quên mật khẩu
                    </p>
                    <div className='mb-4'>
                        <GoogleButtonLogin width={btnWidth} />
                    </div>
                </form>
            </div>
        </div>
    )
}
