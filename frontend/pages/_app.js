// frontend/pages/_app.js

import '../styles/globals.css'; // Ensure you import Tailwind CSS
import ChatPopup from '../components/ChatPopup';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ChatPopup />  {/* Chat popup will always be visible */}
        </>
    );
}

export default MyApp;
