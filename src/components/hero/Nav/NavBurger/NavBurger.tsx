interface NavBurgerProps {
    isOpen: boolean;
    onToggle: () => void;
}



import burgerImage from '/src/assets/images/global/burger.svg';

export default function NavBurger({ isOpen, onToggle }: NavBurgerProps) {
    return (
        <button
            className={`nav__burger${isOpen ? ' --opened' : ''}`}
            type="button"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
            onClick={onToggle}
        >
            <img src={burgerImage} alt="бургер меню" className="nav-burger__icon" loading="lazy" />
        </button>
    );
}