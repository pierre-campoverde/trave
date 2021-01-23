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
import UserProfile from "./Pages/UserProfile";
import "rheostat/initialize";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import UniversityProfile from "./Pages/UniversityProfile";
import { getUserStatus } from "./Store/Slices/UserAuthFuntions/authFunctions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserStatus());
  }, []);

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LogInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/programs/:programId" component={ProgramPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/programs" component={SearchPage} />
          <Route path="/myuser/:userId" component={UserProfile} />
          <Route path="/university" component={UniversityProfile} />
        </Switch>
        <Toaster position="bottom-left" />
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
