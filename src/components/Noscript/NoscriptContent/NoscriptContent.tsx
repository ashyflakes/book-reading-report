
export default function NoscriptContent() {
    return (
        <div className="noscript__content">
            <h1 className="noscript__title">Ого, похоже, у вас выключен JavaScript!</h1>

            <p className="noscript__description">
                Чтобы сайт корректно работал, прошу вас, включите его в настройках вашего браузера.
            </p>

            <p className="noscript__hint">(Не забудьте перезагрузить страницу после этого!)</p>
        </div>
    );
}