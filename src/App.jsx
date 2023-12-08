import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Sub3 from "./page/Sub3";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import KakaoLogin from "./components/KakoLogin";
import Search from "./page/Search";
import Rank from "./page/Rank";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="Rank" element={<Rank/>}/>
        <Route path="login" element={<KakaoLogin />} />
        <Route path="comunicate" element={<comunicate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
