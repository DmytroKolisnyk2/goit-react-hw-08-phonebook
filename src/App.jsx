import "./styles/App.scss";

import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./pages/routes-path.json";

import LoaderModal from "./components/LoaderModal/LoaderModal";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/auth/auth-operations";

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

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getCurrentUser()), [dispatch]);
  return (
    <>
      <Header />
      <Suspense fallback={<LoaderModal />}>
        <Routes>
          <Route path={path.home} element={<Home />} />
          <Route
            path={path.contacts}
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path={path.login}
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={path.register}
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
