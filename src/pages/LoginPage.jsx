import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import '../css/LoginPage.css';
import { useNavigate } from 'react-router-dom';

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
                        onBlur={isValidInput}
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
                                onChange={isValidInput}
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
                        onChange={isValidInput}
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
                            onChange={isValidInput}
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
                            onChange={isValidInput}
                            min={18}
                            placeholder='22'
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

    // useEffect(() => {
    //     setLastSequence(type);
    // }, []);

    return type !== 'none' ? <div className='group-column login-sequence'>
        <SequenceFieldset />
        <div className='group-column login-buttons'>
            {validationMessage && validationMessage !== '1' ? <span>{validationMessage}</span> : <></>}
            <button
                disabled={!!validationMessage}
                onClick={() => {
                    if (type === 'email-1') changeType('password');
                    if (type === 'number-1') changeType('password');
                    if (type === 'password') changeType('onboarding-1');
                    if (type === 'onboarding-1') changeType('onboarding-2');
                    if (type === 'onboarding-2') changeType('onboarding-3');
                    if (type === 'onboarding-3') navigate('/home');
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