import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Layout/Footer/footer";
import Header from "./Layout/Header/header";
import Home from "./pages/Home/home";
import Aboute from "./pages/About/about";
import Admin from "./pages/Admin/admin";
import News from "./pages/News/News";

function App() {
    let routes = [
        {
            id:1,
            link:"/",
            el:<Home/>
        },
        {
            id:2,
            link:"/about",
            el:<Aboute/>
        },
        {
            id:3,
            link:"/admin",
            el:<Admin/>
        },
        {
            id:4,
            link:"/news",
            el:<News/>
        },
    ]
    return (
       <div className="App">
         <Header/>
         <Routes>
            {
                routes.map((el) => (<Route path={el.link} element={el.el} key={el.id}/>))
            }
         </Routes>
         <Footer/>
       </div>
    )

}

export default App;
