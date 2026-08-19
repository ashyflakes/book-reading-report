
import NoscriptIcon from './NoscriptIcon/NoscriptIcon.tsx';
import NoscriptContent from './NoscriptContent/NoscriptContent.tsx';

export default function Noscript() {
    return (
        <noscript>
            <div className="noscript">
                <NoscriptIcon />
                <NoscriptContent />
            </div>
        </noscript>
    );
}