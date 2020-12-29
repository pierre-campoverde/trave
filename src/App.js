import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LogInPage from "./Pages/LogInPage";
import Navbar from "./Components/Organisms/Navbar";
import Footer from "./Components/Organisms/Footer";

import SignUpPage from "./Pages/SignUpPage";
import SearchPage from "./Pages/SearchPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProgramPage from "./Pages/ProgramPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/programs/:programId" component={ProgramPage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
