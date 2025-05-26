import Header from "./components/UI/Header.jsx";
import Footer from "./components/UI/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ConnectUs from "./pages/ConnectUs.jsx";
import ShowMoreUser from "./pages/ShowMoreUser.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="/connect-us" element={<ConnectUs />}></Route>
        <Route path="/more-User/:username?" element={<ShowMoreUser />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
