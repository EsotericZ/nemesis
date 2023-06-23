import React, { useCallback, useState } from 'react';
import {
    IResolveParams,
    LoginSocialApple,
    LoginSocialFacebook,
    LoginSocialGoogle,
} from 'reactjs-social-login';

import {
    AppleLoginButton,
    FacebookLoginButton,
    GoogleLoginButton,
} from 'react-social-login-buttons';

const REDIRECT_URI = 'http://localhost:3000/home';

export const Login = () => {
    const [provider, setProvider] = useState('');
    const [profile, setProfile] = useState<any>('');

    const onLoginStart = useCallback(() => {
        alert('login start');
    }, []);

    const onLogoutSuccess = useCallback(() => {
        setProfile(null);
        setProvider('');
        alert('Logout Success');
    }, []);

    const onLogout = useCallback(() => {}, []);

    return (
        <>
            <h1>Testing Social Media Login</h1>

            {/* <LoginSocialApple
                client_id={process.env.REACT_APP_APPLE_ID || 'd1s23'}
                scope={'name email'}
                // redirect_uri={REDIRECT_URI}
                onLoginStart={onLoginStart}
                onResolve={({ provider, data }: IResolveParams) => {
                    console.log(provider, data)
                    setProvider(provider);
                    setProfile(data);
                }}
                onReject={err => {
                    console.log(err);
                }}
            >
                <AppleLoginButton />
            </LoginSocialApple> */}

            {/* <LoginSocialGoogle
                client_id={process.env.REACT_APP_GG_APP_ID || '1fd23s'}
                onLoginStart={onLoginStart}
                // redirect_uri={REDIRECT_URI}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }: IResolveParams) => {
                    setProvider(provider);
                    setProfile(data);
                }}
                onReject={err => {
                    console.log(err);
                }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle> */}

            <LoginSocialFacebook
                appId={process.env.REACT_APP_FB_APP_ID || ''}
                fieldsProfile={
                    'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
                }
                onLoginStart={onLoginStart}
                onLogoutSuccess={onLogoutSuccess}
                redirect_uri={REDIRECT_URI}
                onResolve={({ provider, data }: IResolveParams) => {
                    console.log(provider, data);
                    setProvider(provider);
                    setProfile(data);
                }}
                onReject={err => {
                   console.log(err);
                }}
            >
                <FacebookLoginButton />
            </LoginSocialFacebook>
        </>
    );
}