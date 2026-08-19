
import NavLogoIcon from './NavLogoIcon/NavLogoIcon.tsx';

export default function NavLogo() {
    return (
        <a href="#hero" className="nav__logo">
            <NavLogoIcon />

            <div className="nav__branding">
                <span className="nav__title"> Веб-отчет </span>
                <p className="nav__name">А. Черкащенко</p>
            </div>
        </a>
    );
};