import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./conponents/Header";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";

function App() {
  return (
    <div className="root-wrap">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/Movies" element={ <Movies /> } />
          <Route path="/Tv" element={ <Tv /> } />
          <Route path="/movie/:title" element={ <MovieDetail /> } />
          <Route path="/*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// element안에 Home 컴포넌트를 불러온다. (함수호출)

export default App;
