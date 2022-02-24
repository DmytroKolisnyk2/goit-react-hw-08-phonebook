import "./styles/App.scss";

import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./pages/routes-path.json";

import { connect } from "react-redux";
import { getError, getLoading } from "./redux/contacts/contacts-selectors";

import LoaderModal from "./components/LoaderModal/LoaderModal";
import Header from "./components/Header/Header";

const Home = lazy(() => import("./pages/Home/Home" /* webpackChunkName: 'Home' */));
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage/ContactsPage" /* webpackChunkName: 'Contacts' */)
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage/LoginPage" /* webpackChunkName: 'LoginPage' */)
);
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage/RegisterPage" /* webpackChunkName: 'RegisterPage' */)
);
const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound" /* webpackChunkName: 'NotFound' */)
);

class App extends Component {
    render() {
    const { error, loading } = this.props;

    return (
      <>
        <Header></Header>
        <Suspense fallback={<LoaderModal />}>
          <Routes>
            <Route path={path.home} element={<Home />} />
            <Route path={path.contacts} element={<ContactsPage />} />
            <Route path={path.login} element={<LoginPage />} />
            <Route path={path.register} element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {loading && <LoaderModal />}
          {error && <h2 className="error">{error}</h2>}
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  error: getError(state),
});

export default connect(mapStateToProps, null)(App);
