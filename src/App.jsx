import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import AboutPage from "./pages/AboutPage/AboutPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import HomePage from "./pages/HomePage/HomePage";
import JoinPage from "./pages/JoinPage/JoinPage";
import PopularPage from "./pages/PopularPage/PopularPage";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <HomePage />
        <AboutPage />
        <PopularPage />
        <ExplorePage />
        <JoinPage />
        <Footer />
      </div>
      <ScrollUp />
    </>
  );
}

export default App;
