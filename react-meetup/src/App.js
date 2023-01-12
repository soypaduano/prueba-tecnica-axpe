import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { Routes, Route, useNavigate } from "react-router-dom"
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {

  const navigate = useNavigate();
  let goToUrl = (url) => navigate(`${url}`);

  return (

      <div data-test="app">
        <MainNavigation goToUrl={goToUrl} />
        <Routes>
          <Route path="/" element={<Layout> <AllMeetupsPage /> </Layout>} />
          <Route path="/add" element={<Layout> <NewMeetupsPage /> </Layout>} />
          <Route path='/favorites' element={<Layout> <FavoritesPage /> </Layout>} />
      </Routes>
      </div>
  );
}

export default App;
