import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ShopAllPage from "./pages/ShopAllPage";
import BrandsPage from "./pages/BrandsPage";
import OffersFreeGiftPage from "./pages/OffersFreeGiftPage";
import OffersBundlePage from "./pages/OffersBundlePage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">

      <Header />

      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/shop-all">
          <ShopAllPage />
        </Route>

        <Route path="/brands">
          <BrandsPage />
        </Route>

        <Route path="/offers-free-gift">
          <OffersFreeGiftPage />
        </Route>

        <Route path="/offers-bundle">
          <OffersBundlePage />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

      </Switch>

      <Footer />

    </div>
  );
}

export default App;
