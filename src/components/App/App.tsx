
import 'modern-normalize/modern-normalize.css';
import '../../styles/App/Fonts.css';
import '../../styles/App/Variables.css';
import '../../styles/Noscript/Noscript.css'
import '../../styles/App/App.css';
import '../../styles/Hero/Nav/Nav.css';
import '../../styles/Hero/Hero.css';
import '../../styles/Main/Main/Main.css';
import '../../styles/Main/Books/Books.css';
import '../../styles/Main/Books/InspectModal/Inspect.css';
import '../../styles/Main/Nominations/Nominations.css';
import '../../styles/Footer/Footer.css';

// компоненты

import Noscript from '../Noscript/Noscript.tsx';
import Hero from '../hero/Hero/Hero.tsx';
import Main from '../main/Main/Main.tsx';
import Footer from '../Footer/Footer.tsx';

export default function App() {

    return (
        <>
            <Noscript />
            <Hero />
            <Main />
            <Footer />
        </>
    );
};


