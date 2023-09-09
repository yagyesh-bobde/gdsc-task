import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Faqs from "./Components/Faqs/Faqs";
import Footer from "./Components/Footer/Footer";
import Info from './Components/GetToKnowUs/Info'
import aos from "aos";
import "aos/dist/aos.css";
import "./App.css";


function App() {
    useEffect(() => {
        aos.init({
            duration: 1828.3268, // birthday digits (everybody?) :)...
            // initClassName: "sb-initial-anim",
            // once: true,
            // mirror: true,
            // offset: 50,
            // debounceDelay: 100,
            // throttleDelay: 100,
        });
    }, []);

    return (
        <>
            <Header />
            <Main />
            <Info />
            <Faqs />
            <Footer />
        </>
    );
}

export default App;
