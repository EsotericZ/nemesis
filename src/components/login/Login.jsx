import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import {
    // IResolveParams,
    // LoginSocialApple,
    LoginSocialFacebook,
    LoginSocialGoogle,
} from 'reactjs-social-login';
// import {
//     // AppleLoginButton,
//     FacebookLoginButton,
//     GoogleLoginButton,
// } from 'react-social-login-buttons';

import getSocialEmail from '../../services/users/getSocialEmail';

const REACT_APP_FB_APP_ID = process.env.REACT_APP_FB_APP_ID;
const REDIRECT_URI = 'http://localhost:3000/';

export const Login = () => {
    let navigate = useNavigate();
    const [provider, setProvider] = useState('');
    const [profile, setProfile] = useState('');
    const [activeTab, setActiveTab] = useState('tab1');

    const handleClickTab = (value) => {
        if (value === activeTab) {
            return;
        }
        setActiveTab(value);
    };

    const checkSocialLogin = (response) => {
        setProvider(response.provider);
        setProfile(response.data);
        getSocialEmail(response.data.email)
        .then((response) => {
            if (!response.data) {
                console.log('User not found')
                return
            }
            console.log('User found')
            navigate('/home');
        })
    }

    const onLogoutSuccess = useCallback(() => {
        setProfile(null);
        setProvider('');
        alert('Logout Success');
    }, []);

    const onLogout = useCallback(() => {}, []);

    return (
        <>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleClickTab('tab1')} active={activeTab === 'tab1'}>
                            Login
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleClickTab('tab2')} active={activeTab === 'tab2'}>
                            Register
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane show={activeTab === 'tab1'}>
                        <MDBInput wrapperClass='mb-4' label='Email' id='emailLogin' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' id='passwordLogin' type='password' />
                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot Password?</a>
                        </div>
                        <div className="d-flex justify-content-center">
                            <MDBBtn className="mb-4 w-50" size="lg">Sign in</MDBBtn>
                        </div>
                        <p className="text-center fw-bold mb-4">OR</p>

                        <LoginSocialGoogle
                            client_id='539545956696-28afjvupcvj56ph5o4lcqv9fsg687l50.apps.googleusercontent.com'
                            // onLoginStart={onLoginStart}
                            redirect_uri={REDIRECT_URI}
                            scope="openid profile email"
                            discoveryDocs="claims_supported"
                            access_type="offline"
                            onResolve={(response) => {
                                console.log(response);
                                // setProvider(response.provider);
                                // setProfile(response.data);
                            }}
                            onReject={err => {
                                console.log(err);
                            }}
                        >
                            <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#db4437'}}>
                                <MDBIcon fab icon="google" className="mx-2"/>
                                    Continue With Google
                            </MDBBtn>
                            {/* <GoogleLoginButton /> */}
                        </LoginSocialGoogle>

                        <LoginSocialFacebook
                            appId={REACT_APP_FB_APP_ID}
                            // fieldsProfile={
                            //     'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
                            // }
                            // onLogoutSuccess={onLogoutSuccess}
                            redirect_uri={REDIRECT_URI}
                            onResolve={(response) => {
                                console.log(response);
                                checkSocialLogin(response);

                            }}
                            onReject={err => {
                            console.log(err);
                            }}
                        >
                            {/* <FacebookLoginButton /> */}
                            <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                                    Continue With Facebook
                            </MDBBtn>
                        </LoginSocialFacebook>
                    </MDBTabsPane>

                    <MDBTabsPane show={activeTab === 'tab2'}>
                        {/* <div className="text-center fw-bold mb-3">
                            <p>Sign Up With</p>
                            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>
                                <MDBBtn floating size='md' tag='a' className='me-2'>
                                    <MDBIcon fab icon='google' />
                                </MDBBtn> */}

                                {/* <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn> */}

                                {/* <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn> */}
                            {/* </div> */}
                            {/* <p className="text-center mt-3">or:</p> */}
                            {/* <p className="text-center fw-bold mt-3">OR</p>
                        </div> */}

                        <MDBInput wrapperClass='mb-4' label='Name' id='nameRegister' type='text' />
                        <MDBInput wrapperClass='mb-4' label='Email' id='emailRegister' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' id='passwordRegister' type='password' />

                        {/* <div className='d-flex justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                        </div> */}
                        <div className="d-flex justify-content-center">
                            <MDBBtn className="mb-4 w-50" size="lg">Sign up</MDBBtn>
                        </div>

                        <p className="text-center fw-bold mb-4">OR</p>

                        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#db4437'}}>
                            <MDBIcon fab icon="google" className="mx-2"/>
                                Continue With Google
                        </MDBBtn>

                        <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                            <MDBIcon fab icon="facebook-f" className="mx-2"/>
                                Continue With Facebook
                            </MDBBtn>
                    </MDBTabsPane>
                </MDBTabsContent>
            </MDBContainer>

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
        </>
    );
}