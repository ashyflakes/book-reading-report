
import MainSection from '../Main/MainSection/MainSection.tsx';
import BooksTitleContent from './BooksTitleContent/BooksTitleContent.tsx';
import BooksSlider from './BooksSlider/BooksSlider.tsx';

export default function Books() {
    return (
        <MainSection sectionId="books">
            <div className="books__body">

                <BooksTitleContent />
                <BooksSlider />


            </div>
        </MainSection>
    );
}