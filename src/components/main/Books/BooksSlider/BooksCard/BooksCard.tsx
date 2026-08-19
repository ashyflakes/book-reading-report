import CardLinkIcon from './CardLinkIcon/CardLinkIcon.tsx';

import bookIcon from '/src/assets/images/book_images/global/icon.svg';
import authorIcon from '/src/assets/images/book_images/global/author.svg';

type BookCardProps = {
    imageWebp: string;
    image: string;
    title: string;
    author: string;
    link: string;
    onImageClick: (image: string) => void;
};

export default function BookCard({ imageWebp, image, title, author, link, onImageClick }: BookCardProps) {
    return (
        <div className="books__grid-box swiper-slide">
            <picture>
                <source srcSet={imageWebp} type="image/webp" />

                <img
                    src={image}
                    alt={`${title}.png`}
                    className="grid-box__image"
                    aria-label={`${title} (можно приблизить)`}
                    loading="lazy"
                    onClick={() => onImageClick(image)}
                />
            </picture>

            <h2 className="grid-box__title">
                <img
                    src={bookIcon}
                    alt="книга"
                    className="book__icon"
                    loading="lazy"
                />
                <span className="title__content">{title}</span>
            </h2>

            <p className="grid-box__author">
                <img
                    src={authorIcon}
                    alt="автор"
                    className="author__icon"
                    loading="lazy"
                />
                <span className="author__content">{author}</span>
            </p>

            <a href={link} className="grid-box__links" target="_blank" rel="noopener noreferrer">
                Перейти
                <CardLinkIcon />
            </a>
        </div>
    );
}
