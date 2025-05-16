// App.jsx
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Layout/Footer/footer";
import Header from "./Layout/Header/header";
import Home from "./pages/Home/home";
import Aboute from "./pages/About/about";
import Admin from "./pages/Admin/admin";
import News from "./pages/News/News";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Shop from "./pages/Shop/Shop";
import NewsDatail from "./pages/NewsDatail/NewsDatail";
import CardDetails from "./pages/CardDetails/CardDetails";
import Basket from "./pages/Backet/basket";
import ServiceDetails from "./pages/ServicesDetails/Services";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const routes = [
        { id: 1, link: "/", el: <Home /> },
        { id: 2, link: "/about", el: <Aboute /> },
        { id: 3, link: "/admin", el: <Admin /> },
        { id: 4, link: "/news", el: <News /> },
        { id: 5, link: "/shop", el: <Shop/> },
        { id: 6, link: "/newsDetail/:id", el: <NewsDatail/> },
        { id: 7, link: "/productDetail/:shopId", el: <CardDetails/> },
        { id: 8, link: "/basket", el:<Basket/>},
        { id: 9, link: "/ServiceDetails/:shopId", el:<ServiceDetails/>},
        

            
         
    ];

    return (
        <div className="App">
            <Header />
            <Routes>
                {routes.map((el) => (
                    <Route path={el.link} element={el.el} key={el.id} />
                ))}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
