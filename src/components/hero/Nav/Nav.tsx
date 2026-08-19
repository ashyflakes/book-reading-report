import { useEffect, useState } from 'react';

import NavLogo from './NavLogo/NavLogo';
import NavBurger from './NavBurger/NavBurger';
import NavList from './NavList/NavList';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(isOpen => !isOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (!isMenuOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    return (
        <nav id="nav">
            <NavLogo />

            <NavBurger isOpen={isMenuOpen} onToggle={toggleMenu} />

            <NavList isOpen={isMenuOpen} onClose={closeMenu} />
        </nav>
    );
}
