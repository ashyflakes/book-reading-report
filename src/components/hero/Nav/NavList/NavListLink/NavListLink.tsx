type NavListLinkProps = {
    href: string;
    textContent: string;
    onClick?: () => void;
};

export default function NavListLink({ href, textContent, onClick }: NavListLinkProps) {
    return (
        <li>
            <a href={href} className="nav__links" onClick={onClick}>
                {textContent}
            </a>
        </li>
    );
}