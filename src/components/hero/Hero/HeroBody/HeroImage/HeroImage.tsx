
import heroImage from '../../../../../assets/images/global/books.svg';

export default function HeroImage() {
    return (
        <div className="hero__image-wrapper">
            <img
                src={heroImage}
                alt="незагруженная картинка безымянной книги"
                className="hero__image"
                loading="lazy"
            />
        </div>
    );
}