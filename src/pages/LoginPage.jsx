import logo from '../assets/logo.png';
import '../css/LoginPage.css';

export const LoginPage = () => {
    return (
        <section className="group-column login-section">
            <div className="group-column">
                <img className="login-logo" src={logo} alt="logo" />
                Smatches
            </div>
            <span>Tilmeld dig for at fortsætte</span>
            <div className='group-column login-buttons'>
                <button>Fortsæt e-mail</button>
                <button>Brug telefon nummer</button>
            </div>
        </section>
    );
}