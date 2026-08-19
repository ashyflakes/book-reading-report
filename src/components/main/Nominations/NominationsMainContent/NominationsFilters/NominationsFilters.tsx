
import NominationsFilter from './NominationsFilter/NominationsFilter.tsx';
import NominationFilterIcon from './NominationsFilter/NominationsFilterIcon/NominationFilterIcon.tsx';

export default function NominationsFilters() {
    return (
        <div className="nominations__filters">

            <button className="nominations__filter filter__modal-btn" id="filterModalBtn">
                <NominationFilterIcon />
                Фильтровать
            </button>

            <NominationsFilter name="Все" />
            <NominationsFilter name="Нельзя оторваться" />
            <NominationsFilter name="Не моя книга" />
            <NominationsFilter name="Лучшие цитаты" />
            <NominationsFilter name="Симпатичные герои" />
            <NominationsFilter name="Рекомендованные" />
        </div>
    );
}