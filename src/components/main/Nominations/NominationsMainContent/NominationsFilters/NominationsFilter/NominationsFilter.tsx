type NominationsFilterProps = {
    name: string;
};

export default function NominationsFilter({ name }: NominationsFilterProps) {
    return (
        <button type="button" className="nominations__filter">
            {name}
        </button>
    );
}