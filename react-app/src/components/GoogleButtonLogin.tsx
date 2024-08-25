import { useEffect } from 'react'
import env from '../configs/envConfig'
import './GoogleButtonLogin.css'
import { useNavigate } from 'react-router-dom'

type Props = { width?: number }
export const GoogleButtonLogin = ({ width = 400 }: Props) => {
    const navigate = useNavigate()

    const handleCredentialResponse = (res: TRes) => {
        console.log('Google credential response:', res)
    }

    useEffect(() => {
        console.log(window.google)
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: env.GOOGLE_CLIENT_ID,
                callback: handleCredentialResponse,
                context: 'signin',
                ux_mode: 'popup',
                cancel_on_tap_outside: false,
                use_fedcm_for_prompt: true,
            })
            window.google.accounts.id.renderButton(
                document.getElementById('google-login-button'),
                {
                    type: 'standard',
                    theme: 'outline',
                    size: 'large',
                    width: width <= 400 ? width : 400,
                    logo_alignment: 'left',
                    shape: 'rectangular',
                    text: 'continue_with',
                },
            )
            // window.google.accounts.id.prompt()
        } else {
            navigate(0)
        }
    }, [width, navigate])

    type TRes = {
        clientId: string
        client_id: string
        credential: string
        select_by: 'btn' | 'fedcm'
    }

    return (
        <>
            <div id='google-login-button'></div>
        </>
    )
}
