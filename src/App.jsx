import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <PageContent>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/product/:id">
              <ProductDetailPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/team">
              <TeamPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            {/* Add more routes here */}
          </Switch>
        </PageContent>
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
