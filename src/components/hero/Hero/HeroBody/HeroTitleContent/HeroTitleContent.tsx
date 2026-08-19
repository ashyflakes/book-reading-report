
import HeroTitle from './HeroTitle/HeroTitle.tsx';
import HeroDescription from './HeroDescription/HeroDescription.tsx';

export default function HeroTitleContent() {
    return (
        <div className="hero__title-content">
            <HeroTitle />
            <HeroDescription />
        </div>
    );
}