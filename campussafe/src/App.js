import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import MapComponent from './components/MapComponent';
import ContactComponent from './components/ContactComponent';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';
import ProfileComponent from './components/ProfileComponent';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        {/* Wrap other routes with a layout that includes the header and footer */}
        <Route
          path="/map"
          element={
            <>
              <Header />
              <MapComponent />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactComponent />
              <Footer />
            </>
          }
        />
        <Route
          path="/information"
          element={
            <>
              <Header />
              <InfoComponent />
              <Footer />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <Header />
              <SettingsComponent />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <ProfileComponent />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
