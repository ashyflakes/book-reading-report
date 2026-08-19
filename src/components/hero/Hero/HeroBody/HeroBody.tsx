
import HeroTitleContent from './HeroTitleContent/HeroTitleContent.tsx';
import HeroButtons from './HeroButtons/HeroButtons.tsx';
import HeroImage from './HeroImage/HeroImage.tsx';

export default function HeroBody() {
    return (
        <div className="hero__body">
            <div className="hero__content">
                <HeroTitleContent />
                <HeroButtons />
            </div>

            <HeroImage />
        </div>
    );
}