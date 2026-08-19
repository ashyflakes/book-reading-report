import { useState, useRef, useEffect } from 'react';

// слайдер

import Swiper from 'swiper';
import { Autoplay, EffectCoverflow, Keyboard, Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/swiper.css';

const SLIDE_SPEED = 450;
const AUTOPLAY_DELAY = 6000;

// компоненты

import BookCard from './BooksCard/BooksCard.tsx';
import BooksInspectModal from '../BooksInspectModal/BooksInspectModal.tsx';

// изображения

import twelveChairs from '/src/assets/images/book_images/twelve-chairs/twelve-chairs-compressed.webp';
import twelveChairsFallback from '/src/assets/images/book_images/twelve-chairs/twelve-chairs-original.png';

import captainsDaughter from '/src/assets/images/book_images/captains-daughter/captains-daughter-compressed.webp';
import captainsDaughterFallback from '/src/assets/images/book_images/captains-daughter/captains-daughter-original.png';

import dandelionWine from '/src/assets/images/book_images/dandelion-wine/dandelion-wine-compressed.webp';
import dandelionWineFallback from '/src/assets/images/book_images/dandelion-wine/dandelion-wine-original.png';

import revisor from '/src/assets/images/book_images/revisor/revisor-compressed.webp';
import revisorFallback from '/src/assets/images/book_images/revisor/revisor-original.png';

import mistAndromeda from '/src/assets/images/book_images/mist-of-the-andromeda/mist-of-the-andromeda-compressed.webp';
import mistAndromedFallback from '/src/assets/images/book_images/mist-of-the-andromeda/mist-of-the-andromeda-original.png';

import threeMushketers from '/src/assets/images/book_images/three-mushketers/three-mushketers-compressed.webp';
import threeMushketersFallback from '/src/assets/images/book_images/three-mushketers/three-mushketers-original.png';

import romeoAndJulietta from '/src/assets/images/book_images/romeo-and-julietta/romeo-and-julietta-compressed.webp';
import romeoAndJuliettaFallback from '/src/assets/images/book_images/romeo-and-julietta/romeo-and-julietta-original.png';

import marsChronics from '/src/assets/images/book_images/mars-chronics/mars-chronics-compressed.webp';
import marsChronicsFallback from '/src/assets/images/book_images/mars-chronics/mars-chronics-original.png';


export default function BooksSlider() {

    // слайдер (логика слайдера)

    const sliderRef = useRef<HTMLDivElement>(null);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (!sliderRef.current) {
            return;
        }

        const swiper = new Swiper(sliderRef.current, {
            modules: [Autoplay, EffectCoverflow, Keyboard, Mousewheel, Pagination],

            loop: true,
            slidesPerView: 4,
            spaceBetween: 75,
            centeredSlides: true,

            speed: SLIDE_SPEED,

            autoplay: {
                delay: AUTOPLAY_DELAY,
                disableOnInteraction: false,
            },

            effect: 'coverflow',

            coverflowEffect: {
                depth: 75,
                rotate: 0,
                slideShadows: false,
            },

            keyboard: {
                enabled: true,
            },

            mousewheel: {
                invert: true,
                enabled: true,
                releaseOnEdges: true,
                sensitivity: 0.5,
                thresholdDelta: 30,
                thresholdTime: 100,
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        return () => {
            swiper.destroy(true, true);
        };
    }, []);

    // разметка слайдера (укороченная компонентами)

    return (
        <>
            <div className="books__slider-wrapper">
                <div className="books__slider swiper" ref={sliderRef}>
                    <div className="books__slider-track swiper-wrapper">
                        <BookCard
                            imageWebp={twelveChairs}
                            image={twelveChairsFallback}
                            title="12 стульев"
                            author="И. Ильф, Е. Петров"
                            link="https://www.labirint.ru/books/1011381/"
                            onImageClick={setSelectedImage}
                        />

                        <BookCard
                            imageWebp={captainsDaughter}
                            image={captainsDaughterFallback}
                            title="Капитанская дочка"
                            author="А. Пушкин"
                            link="https://www.labirint.ru/books/622151/"
                            onImageClick={setSelectedImage}
                        />

                        <BookCard
                            imageWebp={dandelionWine}
                            image={dandelionWineFallback}
                            title="Вино из одуванчиков"
                            author="Р. Брэдбери"
                            link="https://www.labirint.ru/books/720281/"
                            onImageClick={setSelectedImage}
                        />

                        <BookCard
                            imageWebp={revisor}
                            image={revisorFallback}
                            title="Ревизор"
                            author="Н. Гоголь"
                            link="https://www.labirint.ru/books/720281/"
                            onImageClick={setSelectedImage}
                        />

                        <BookCard
                            imageWebp={mistAndromeda}
                            image={mistAndromedFallback}
                            title="Туманность Андромеды"
                            author="И. Ефремов"
                            link="https://www.labirint.ru/books/583625/"
                            onImageClick={setSelectedImage}
                        />

                        <BookCard
                            imageWebp={threeMushketers}
                            image={threeMushketersFallback}
                            title="Три мушкетера"
                            author="А. Дюма"
                            link="https://www.labirint.ru/books/491968/"
                            onImageClick={setSelectedImage}
                        />

                        <BookCard
                            imageWebp={romeoAndJulietta}
                            image={romeoAndJuliettaFallback}
                            title="Ромео и Джульетта"
                            author="У. Шекспир"
                            link="https://www.labirint.ru/books/810907/"
                            onImageClick={setSelectedImage}
                        />

                        <BookCard
                            imageWebp={marsChronics}
                            image={marsChronicsFallback}
                            title="Марсианские Хроники"
                            author="Р. Брэдбери"
                            link="https://www.labirint.ru/books/742111/"
                            onImageClick={setSelectedImage}
                        />
                    </div>

                    <div className="slider__pagination swiper-pagination"></div>
                </div>
            </div>

            <BooksInspectModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        </>
    );
}