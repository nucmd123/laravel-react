import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginService, TLoginPayload } from '@/services/authService'
import { setToast } from '@/redux/slice/toastSlice'
import { emailValidate } from '@/utils/validateEmail'
import { GoogleButtonLogin } from '@/components/GoogleButtonLogin'
import { Button } from '@/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { AxiosError } from 'axios'
import handleAxiosError from '@/helpers/axiosHelpers'

export const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loginLoading, setLoginLoading] = useState<boolean>(false)

    // handle login form
    const { register, handleSubmit, formState } = useForm<TLoginPayload>()
    const handleLogin: SubmitHandler<TLoginPayload> = async payload => {
        setLoginLoading(true)
        try {
            const res = await loginService(payload)

            dispatch(
                setToast({
                    message: 'Đăng nhập thành công',
                    type: 'success',
                }),
            )

            navigate('/dashboard')
        } catch (error) {
            if (error instanceof AxiosError) handleAxiosError(error)
        } finally {
            setLoginLoading(false)
        }
    }
    //

    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md rounded-xl bg-white p-8 shadow'>
                <h1 className='text-center text-lg font-bold'>Đăng nhập</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='mb-4'>
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
                                validate: {
                                    isEmail: data => {
                                        return (
                                            emailValidate(data) ||
                                            `Email không đúng định dạng`
                                        )
                                    },
                                },
                            })}
                        />
                        {formState.errors.email?.type === 'required' && (
                            <div className='text-xs text-red-500'>
                                {formState.errors.email.message}
                            </div>
                        )}
                        {(formState.errors.email?.type === 'pattern' ||
                            formState.errors.email?.type === 'isEmail') && (
                            <div className='text-xs text-red-500'>
                                {formState.errors.email.message}
                                {/* `Tên người dùng dài từ 6 - 30 ký tự, có thể chứa chữ cái (a-z), số (0-9) và dấu chấm (.), không chứa ký hiệu như &, =, _, ', -, +, ,, <, >, hoặc nhiều dấu chấm liên tiếp. Có thể bắt đầu hoặc kết thúc bằng dấu chấm.` */}
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
                        {formState.errors.password?.type === 'required' && (
                            <div className='text-xs text-red-500'>
                                {formState.errors.password.message}
                            </div>
                        )}
                    </div>
                    <div className='mb-4'>
                        {/* <button
                            type='submit'
                            className='w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-500'
                        >
                            Đăng nhập
                        </button> */}
                        <Button
                            type='submit'
                            className='w-full bg-blue-600 text-base font-normal hover:bg-blue-500'
                            variant='default'
                            disabled={loginLoading}
                        >
                            {loginLoading ? (
                                <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
                            ) : (
                                <></>
                            )}

                            {loginLoading ? 'Đang đăng nhập' : 'Đăng nhập'}
                        </Button>
                    </div>
                    <p className='mb-4 select-none text-center text-blue-700 hover:cursor-pointer hover:underline'>
                        Quên mật khẩu
                    </p>
                    <div className='mb-4'>
                        <GoogleButtonLogin />
                    </div>
                </form>
            </div>
        </div>
    )
}
