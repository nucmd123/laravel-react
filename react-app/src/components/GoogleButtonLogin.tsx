import env from '@/configs/envConfig'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type TCredentialResponse = {
    clientId: string
    client_id: string
    credential: string
    select_by: 'btn' | 'fedcm'
}

export const GoogleButtonLogin = () => {
    const navigate = useNavigate()
    const [googleButtonLoginWidth, setGoogleButtonLoginWidth] =
        useState<number>(400)

    const handleCredentialResponse = (res: TCredentialResponse) => {
        console.log('Google credential response:', res)
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: env.GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse,
                context: 'signin',
                ux_mode: 'popup',
                cancel_on_tap_outside: false,
                use_fedcm_for_prompt: true,
            })

            // handle width of button <= 400
            const googleButtonLoginElement = document.getElementById(
                'google-login-button',
            )
            if (googleButtonLoginElement?.offsetWidth) {
                const offsetWidth =
                    googleButtonLoginElement?.offsetWidth <= 400
                        ? googleButtonLoginElement?.offsetWidth
                        : 200
                setGoogleButtonLoginWidth(offsetWidth)
            }

            window.google.accounts.id.renderButton(googleButtonLoginElement, {
                type: 'standard',
                theme: 'outline',
                size: 'large',
                width: googleButtonLoginWidth,
                logo_alignment: 'left',
                shape: 'rectangular',
                text: 'continue_with',
            })
            // window.google.accounts.id.prompt()
        }
    }, [navigate, googleButtonLoginWidth])

    return (
        <>
            <div
                id='google-login-button'
                className={`${googleButtonLoginWidth <= 400 ? 'w-full' : 'w-[400px]'}`}
            ></div>
        </>
    )
}
