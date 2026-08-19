
import NominationsFilters from './NominationsFilters/NominationsFilters.tsx';
import NominationsBooks from './NominationsBooks/NominationsBooks.tsx';

export default function NominationsMainContent() {
    return (
        <div className="nominations__main-content">

            <NominationsFilters />
            <NominationsBooks />

        </div>
    );
}