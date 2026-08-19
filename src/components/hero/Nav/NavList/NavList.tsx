
import NavListLink from './NavListLink/NavListLink.tsx';

type NavListProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function NavList({ isOpen, onClose }: NavListProps) {
    return (
        <ul className={`nav__list${isOpen ? ' --opened' : ''}`}>
            <NavListLink href="#books" textContent="Книги" onClick={onClose} />

            <NavListLink href="#nominations" textContent="Номинации" onClick={onClose} />
        </ul>
    );
}
