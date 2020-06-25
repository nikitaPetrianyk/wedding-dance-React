import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './App.scss';
import AuthContext from "./AuthContext"
import Header from "./components/Header-components/Header/Header"
import Promo from './components/Promo-components/Promo/Promo';
import ServicesComponent from "./components/Services-components/Services/Services"
import Offer from "./components/Offer-components/Offer/Offer";
import Coaches from "./components/Coaches-components/Coaches/Coaches"
import Footer from "./components/Footer/Footer";
import Profile from './components/Profile/Profile';
import { getAuthToken, checkIsAuthorized } from "./ContextApi";


const App = () => {
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [isAuthorized, setAuthorized] = useState(false);
  const [headerSectionData, setHeaderSectionData] = useState({});
  const [promoSectionData, setPromoSectionData] = useState({});
  const [serviceSectionData, setServiceSectionData] = useState({});
  const [offerSectionData, setOfferSectionData] = useState({});
  const [coachesSectionData, setCoachesSectionData] = useState({});

  useEffect(() => {
    fetch(`https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section`).then(response => {
      return response.json()
    })
      .then(data => {
        setHeaderSectionData(getAppropriateSectionData(data.content, 'navigation'));
        setPromoSectionData(getAppropriateSectionData(data.content, 'info'));
        setServiceSectionData(getAppropriateSectionData(data.content, 'service'));
        setOfferSectionData(getAppropriateSectionData(data.content, 'offer'));
        setCoachesSectionData(getAppropriateSectionData(data.content, 'coach'));
        setDataLoaded(true);
      })
  }, []);

  const getAppropriateSectionData = (sectionsContent, type) => {
    const sectionContent = sectionsContent.find(item => item.type === type);
    return sectionContent;
  }

  const handleChangeAuthStatus = () => {
    setAuthorized(!isAuthorized);
  }

  if (!isDataLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <Switch>
        <AuthContext.Provider value={{
          isAuthorized: isAuthorized,
          changeAuthStatus: handleChangeAuthStatus,
          checkIsAuthorized: checkIsAuthorized,
          getAuthToken: getAuthToken,
        }}>
          <div className="App">
            <div className="container">
              {checkIsAuthorized() && (
                <NavLink to="/profile">Go to user profile</NavLink>)}
              <Route exact path='/profile' component={Profile} />
              <Header sectionData={headerSectionData} />
              <Promo sectionData={promoSectionData} />
              <ServicesComponent sectionData={serviceSectionData} />
              <Offer sectionData={offerSectionData} />
              <Coaches sectionData={coachesSectionData} />
            </div>
            <Footer sectionData={headerSectionData} />
          </div>
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
