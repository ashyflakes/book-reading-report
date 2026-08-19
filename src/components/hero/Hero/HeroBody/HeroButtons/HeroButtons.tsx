
import HeroButton from './HeroButton/HeroButton.tsx';

export default function HeroButtons() {
    return (
        <div className="hero-title__buttons">
            <HeroButton
                href="#books"
                buttonClassName="hero__book-CTA"
                textContent="Посмотреть книги"
                textClassName="book-CTA__text"
                iconClassName="book-CTA__icon"
            />
            <HeroButton
                href="#nominations"
                buttonClassName="hero__nomination-CTA"
                textClassName="nomination-CTA__text"
                textContent="Номинации"
                iconClassName="nomination-CTA__icon"
            />
        </div>
    );
}