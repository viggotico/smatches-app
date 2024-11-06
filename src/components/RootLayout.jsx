import { Link, Outlet, useNavigate } from "react-router-dom";
import "../css/RootLayout.css";

import TuneIcon from '@mui/icons-material/Tune';
import ExploreIcon from '@mui/icons-material/Explore';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import logo from "../assets/logo.png"

export const RootLayout = ({ }) => {
    const path = location.pathname;
    const navivate = useNavigate();

    return <main>
        <nav className="group-row navTop">
            <Link to='/home'><img className="icons" src={logo} alt="logo" /></Link>
            <Link to='/settings'><div className="group-row"><TuneIcon className="icons" /></div></Link>
        </nav>
        <div className="outlet">
            <Outlet />
        </div>
        <nav className="group-row navBottom">
            <div
                className={`group-column navBottomItem${path === '/' ? ' navBottomItemActive' : ''}`}
                onClick={() => navivate('/')}
            >
                <ExploreIcon className="navBottomItemIcons" />
                Opdag
            </div>
            <div
                className={`group-column navBottomItem${path === '/smatches' ? ' navBottomItemActive' : ''}`}
                onClick={() => navivate('smatches')}
            >
                <LocalFireDepartmentIcon className="navBottomItemIcons" />
                Smatches
            </div>
            <div
                className={`group-column navBottomItem${path === '/likes' ? ' navBottomItemActive' : ''}`}
                onClick={() => navivate('likes')}
            >
                <FavoriteIcon className="navBottomItemIcons" />
                Likes
            </div>
            <div
                className={`group-column navBottomItem${path === '/profil' ? ' navBottomItemActive' : ''}`}
                onClick={() => navivate('profil')}
            >
                <PersonIcon className="navBottomItemIcons" />
                Profil
            </div>
        </nav>
    </main>;
}