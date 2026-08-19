
import FooterYoutubeIcon from './FooterContactsIcons/FooterYoutubeIcon.tsx';
import FooterTelegramIcon from './FooterContactsIcons/FooterTelegramIcon.tsx';
import FooterGithubIcon from './FooterContactsIcons/FooterGithubIcon.tsx';
import FooterContactLink from './FooterContactLink/FooterContactLink.tsx';

export default function FooterContacts() {
    return (
        <section className="footer__contacts">
            <address>
                <div className="contacts__contents">
                    <h2 className="contacts__title">Контакты</h2>
                    <ul className="contacts__list">
                        <li>
                            <FooterContactLink
                                href="https://youtube.com/@ashyflakes"
                                name="Youtube"
                                icon={<FooterYoutubeIcon />}
                            />
                        </li>
                        <li>
                            <FooterContactLink
                                href="https://telegram.com/"
                                name="Telegram"
                                icon={<FooterTelegramIcon />}
                            />
                        </li>
                        <li>
                            <FooterContactLink
                                href="https://github.com/ashyflakes?tab=repositories"
                                name="GitHub"
                                icon={<FooterGithubIcon />}
                            />
                        </li>
                    </ul>
                </div>
            </address>
        </section>
    );
}