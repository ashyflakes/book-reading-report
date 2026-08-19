
import FooterInfoCopyright from './FooterInfoIcons/FooterInfoCopyright.tsx';

export default function FooterInfo() {
    return (
        <section className="footer__info">
            <div className="info__contents">
                <h2 className="info__title">Информация</h2>
                <div className="info__information">
                    <p>2026</p>
                    <p>А. Черкащенко</p>
                    <p>
                        Все права защищены
                        <FooterInfoCopyright />
                    </p>
                </div>
            </div>
        </section>
    );
}