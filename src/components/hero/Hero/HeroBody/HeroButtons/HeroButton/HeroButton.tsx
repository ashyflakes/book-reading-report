
import HeroButtonsIcon from './HeroButtonsIcon/HeroButtonsIcon.tsx';


type HeroButtonProps = {
    href: string;
    buttonClassName: string;
    textClassName: string;
    iconClassName: string;
    textContent: string;
}

export default function HeroButton({ href, buttonClassName, textClassName, iconClassName, textContent }: HeroButtonProps) {
    return (
        <a href={href} className={buttonClassName}>
            <span className={textClassName}> {textContent} </span>
            <HeroButtonsIcon iconClass={iconClassName} />
        </a>
    );
}