import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
//import ShopAllPage from "./pages/ShopAllPage";
import LoginPage from "./pages/LoginPage";
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

        {/* <Route path="/shop-all">
          <ShopAllPage />
        </Route> */}

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
