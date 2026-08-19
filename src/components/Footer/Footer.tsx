
import FooterInfo from './FooterInfo/FooterInfo.tsx';
import FooterContacts from './FooterContacts/FooterContacts.tsx';

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer__body">
                <div className="footer__contents">
                    <FooterInfo />
                    <FooterContacts />
                </div>
            </div>
        </footer>
    );
}