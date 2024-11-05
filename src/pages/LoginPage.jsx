import logo from '../assets/logo.png';
import '../css/LoginPage.css';

export const LoginPage = () => {
    return (
        <section className="group-column login-section">
            <div className="group-column">
                <img className="login-logo" src={logo} alt="logo" />
                Smatches
            </div>
            <div className='group-column login-buttons'>
                <span>Tilmeld dig for at fortsætte</span>
                <button>Fortsæt med e-mail</button>
                <button className='login-buttons-outline'>Brug telefon nummer</button>
            </div>
            <footer>
                <p>Vilkår og betingelser</p>
                <p>Privatlivspolitik</p>
            </footer>
        </section>
    );
}