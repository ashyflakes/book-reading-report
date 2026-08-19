
import MainSection from '../Main/MainSection/MainSection.tsx';
import NominationsTitleContent from './NominationsTitleContent/NominationsTitleContent.tsx';
import NominationsMainContent from './NominationsMainContent/NominationsMainContent.tsx';

export default function Nominations() {
    return (
        <MainSection sectionId="nominations">
            <div className="nominations__contents">
                <NominationsTitleContent />
                <NominationsMainContent />
            </div>
        </MainSection>
    );
}