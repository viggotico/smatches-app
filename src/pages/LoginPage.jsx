import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import logo from '../assets/logo.png';
import '../css/LoginPage.css';

const LoginSequence = ({ type, changeType }) => {
    const fieldsetRef = useRef();
    const [validationMessage, setValidationMessage] = useState('');
    // const [lastSequence, setLastSequence] = useState('none');
    const [inputValues, setinputValues] = useState({});
    const navigate = useNavigate();

    const isValidInput = (e) => {
        // const validInput = e.target?.checkValidity();
        // e?.preventDefault();
        // setinputValues(prev => {
        //     let value = { ...prev };
        //     value[e.target?.id] = e.target?.value;
        //     return { ...prev, ...value };
        // });
        // console.log('validationMessage:', e.target?.validationMessage);
        // if (e.target?.validationMessage) {
        //     setValidationMessage(e.target?.validationMessage);
        //     e.target?.classList?.add('input-invalid');
        // }
        // else {
        //     setValidationMessage('');
        //     e.target?.classList?.remove('input-invalid');
        // }
        // console.log('value:', e.target?.type, e.target?.value);
    }

    const Sequence = () => {
        switch (type) {
            case 'email-1':
                return <>
                    <span>Indtast venligst din email</span>
                    <input
                        required
                        type="email"
                        id='login-input-email-1'
                        onBlur={(e) => {
                            localStorage.setItem('email', e.target?.value);
                            isValidInput(e);
                        }}
                        placeholder='example@email.com'
                    // value={inputValues['login-input-email-1']}
                    />
                </>;

            case 'number-1':
                return <>
                    <span>Indtast venligst dit telefon nummer</span>
                    <div className=' group-row login-number-group'>
                        <span>+45</span>
                        <input
                            required
                            type="tel"
                            id='login-input-number-1'
                            onBlur={(e) => {
                                localStorage.setItem('email', e.target?.value ? `${e.target?.value}@smatches.app` : '');
                                isValidInput(e);
                            }}
                            min={8}
                            max={8}
                            className='login-input-group-item'
                            placeholder='12 34 56 78'
                        />
                    </div>
                </>;

            case 'password':
                return <>
                    <span>Indtast venligst dit adgangskode</span>
                    <input
                        required
                        type="password"
                        id='login-input-password'
                        onBlur={(e) => {
                            localStorage.setItem('password', e.target?.value);
                            isValidInput(e);
                        }}
                        placeholder='password'
                    />
                </>;

            case 'onboarding-1':
                return <>
                    <div className='group-column login-onboarding-input'>
                        <span>Hvad er dit navn?</span>
                        <input
                            required
                            type="fname"
                            id='login-input-fname'
                            onBlur={(e) => {
                                localStorage.setItem('name', e.target?.value);
                                isValidInput(e);
                            }}
                            placeholder='fornavn'
                        />
                    </div>
                </>;

            case 'onboarding-2':
                return <>
                    <div className='group-column login-onboarding-input'>
                        <span>Hvor gammel er du?</span>
                        <input
                            required
                            type="number"
                            id='login-input-number'
                            onBlur={(e) => {
                                localStorage.setItem('age', e.target?.value);
                                isValidInput(e);
                            }}
                            min={18}
                        />
                    </div>
                </>;

            case 'onboarding-3':
                return <>
                    <div className='group-column login-onboarding-input'>
                        <span>Du har nu oprettet dig!</span>
                    </div>
                </>;
        }
    }

    const SequenceFieldset = () => {
        return <fieldset ref={fieldsetRef} className='group-column'>
            <Sequence />
        </fieldset>;
    }

    const goToHome = () => {
        console.log('going to home');
        if (location.href.includes('smatches-app.vercel.app')) location.href = 'https://smatches-app.vercel.app/home';
        if (location.href.includes('smatches.deltabox.studio')) location.href = 'https://smatches.deltabox.studio/home';
        if (location.href.includes('localhost:5173')) location.href = 'http://localhost:5173/home';
    }

    function signIn() {
        const mail = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!mail) {
            alert('email is invalid');
            return;
        }
        if (!password) {
            alert('password is invalid');
            return;
        }

        // read the docs: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
        signInWithEmailAndPassword(auth, mail, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;
                console.log(user); // for test purposes: logging the authenticated user
                goToHome();
            })
            .catch(error => {
                let code = error.code; // saving error code in variable
                console.log(code);
                if (!code) {
                    return;
                }
                code = code.replaceAll("-", " "); // some JS string magic to display error message. See the log above in the console
                code = code.replaceAll("auth/", "");
                console.error(code);

                if (code === 'invalid credential') changeType('onboarding-1');
                else alert(code);
            });
    }

    function handleSignUp() {
        const mail = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (!mail) {
            alert('email is invalid');
            return;
        }
        if (!password) {
            alert('password is invalid');
            return;
        }

        // read the docs: https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
        createUserWithEmailAndPassword(auth, mail, password)
            .then(userCredential => {
                // Created and signed in
                const user = userCredential.user;
                console.log(user);
                createUser(user.uid, mail);
                goToHome();
            })
            .catch(error => {
                let code = error.code; // saving error code in variable
                console.log(code);
                if (!code) {
                    return;
                }
                code = code.replaceAll("-", " "); // some JS string magic to display error message. See the log above in the console
                code = code.replaceAll("auth/", "");
                console.error(code);
                changeType('onboarding-1');
                alert(code);
            });
    }

    return type !== 'none' ? <div className='group-column login-sequence'>
        <SequenceFieldset />
        <div className='group-column login-buttons'>
            {validationMessage && validationMessage !== '1' ? <span>{validationMessage}</span> : <></>}
            <button
                disabled={!!validationMessage}
                onClick={() => {
                    if (type === 'email-1') changeType('password');
                    if (type === 'number-1') changeType('password');
                    if (type === 'password') {
                        signIn();
                    }
                    if (type === 'onboarding-1') changeType('onboarding-2');
                    if (type === 'onboarding-2') changeType('onboarding-3');
                    if (type === 'onboarding-3') {
                        handleSignUp();
                    }
                }}
            >{type === 'onboarding-3' ? 'Begynd!' : 'Fortsæt'}</button>
            <button onClick={() => {
                changeType('none');
                // setLastSequence(type);
            }}>Tilbage</button>
        </div>
    </div> : <></>;
}

export const LoginPage = () => {
    const [sequenceType, setSequenceType] = useState('none');
    const changeSequenceType = (type) => setSequenceType(type);

    async function createUser(uid, mail) {
        const name = localStorage.getItem('name');

        if (!name) {
            alert('name is invalid');
            return;
        }
        const url = `${import.meta.env.VITE_FIREBASE_DB_URL}/users/${uid}.json`;
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify({ name, mail })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("New user created: ", data);
        } else {
            console.log("Sorry, something went wrong");
        }
    }

    return (
        <section className="group-column login-section">
            {
                sequenceType === 'none' ? <>
                    <div className="group-column">
                        <img className="login-logo" src={logo} alt="logo" />
                        Smatches
                    </div>
                    <div className='group-column login-buttons'>
                        <span>Tilmeld dig for at fortsætte</span>
                        <button onClick={() => changeSequenceType('email-1')}>
                            Fortsæt med e-mail
                        </button>
                        <button onClick={() => changeSequenceType('number-1')} className='login-buttons-outline'>
                            Brug telefon nummer
                        </button>
                    </div>
                </> : <></>
            }
            <LoginSequence type={sequenceType} changeType={changeSequenceType} />
            <footer>
                <p>Vilkår og betingelser</p>
                <p>Privatlivspolitik</p>
            </footer>
        </section>
    );
}