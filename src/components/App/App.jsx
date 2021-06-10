import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import Edit from '../EditProfile/Edit';
import RegisterPage from '../RegisterPage/RegisterPage';
import SearchToys from '../SearchToys/SearchToys';
import ShareToys from '../ShareToys/ShareToys';
import UserPage from '../UserPage/UserPage';
import ToyList from '../ToyList/ToyList';
import Video from '../Welcome_Page/Video';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/landing" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route exact path="/about" >
            <AboutPage />
          </Route>

          <Route exact path="/landing">
            <Video />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            {/* // logged in shows UserPage else shows LoginPage */}
          <ProtectedRoute exact path="/user">
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute  exact path="/share_toys">
            <ShareToys />
          </ProtectedRoute>

          <ProtectedRoute exact path="/search_toys">
            <SearchToys />
          </ProtectedRoute>
          <ProtectedRoute exact path="/edit">
            <Edit />
          </ProtectedRoute>

         
          

          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute exact path="/login" authRedirect="/user">
            {/* // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login */}
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/user"
          >
            <RegisterPage />
          </ProtectedRoute>

          <Route exact path="/landing">
            <Video />
          </Route>

            
            {/* // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            // authRedirect="/user" */}
          

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
