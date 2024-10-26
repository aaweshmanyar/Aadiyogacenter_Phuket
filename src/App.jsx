import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import ProtectedRoute from './components/protectedroute/ProtectedRoute'
import Home from "./Pages/Home";
import AboutUs from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Branch from "./components/Branch/Branch";
import ScrollTop from './components/ScrollTop/ScrollTop'
import Schedule from "./Pages/Schedule";
import YogaClasses from "./Pages/Yogaclass";
import Normalcls from "./Pages/Normalcls";
// import Privatecls from "./Pages/Privatecls";
import Pilates from './components/Services/Pilates';
import Kidsyoga from "./components/Services/Kidsyoga";
import YogaTherapy from "./components/Services/YogaTherapy";
import Soundhealing from "./components/Services/Soundhealing";
import Trainingcourses from "./components/Services/Trainingcourses";
import Services from "./components/Services/Services";
import Product from "./components/Product/Product";
// import ScheduleForm from "./components/AddSchedule/ScheduleForm";
import AuthForm from "./Pages/signup_signinform/AuthForm";
import SigninForm from "./Pages/signup_signinform/SignInform";
import PlansandPackage from "./components/plans & promotion/PlansandPackage";

const App = () => {
  Aos.init({
    duration: 1400,
    offset: 100,
    once: true,
  });
  return (
    <AuthProvider>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/yogaclass" element={<YogaClasses />} />
          {/* <Route path="/privateclass" element={<Privatecls />} /> */}
          <Route path="/pilates" element={<Pilates />} />
          <Route path="/kidsyoga" element={<Kidsyoga />} />
          <Route path="/yogatherapy" element={<YogaTherapy />} />
          <Route path="/soundhealing" element={<Soundhealing />} />
          <Route path="/trainingcourse" element={<Trainingcourses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/packageplans" element={<PlansandPackage />} />
          {/* Conditionally render Normalcls route based on authentication */}
          {/* <Route path="/normalclass" element={<ProtectedRoute element={<Normalcls />} />} /> */}
          <Route 
            path="/normalclass" 
            element={
              <ProtectedRoute>
                <Normalcls />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
