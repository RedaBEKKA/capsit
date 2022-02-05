import React, { Suspense, useEffect } from 'react';
//import classes from './App.scss';
import PrivateLayout from './componenets/layouts/private-layout/PrivateLayout';
import { PublicLayout } from './componenets/layouts/public-layout/publicLayout'
import { Routes, Route } from "react-router-dom";
import withErrorHandler from './services/interceptor';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './store/action-creators'
import NotFound from './pages/error/NotFound.js'

const Login = React.lazy(() => import('./pages/auth/login/Login'));
const ForgotPassword = React.lazy(() => import('./pages/auth/forgotPassword/ForgotPassword'));
const NewPassword = React.lazy(() => import('./pages/auth/newPassword/NewPassword'));
// const Register = React.lazy(() => import('./pages/auth/signup/register/Register'));
const Home = React.lazy(() => import('./pages/home/Home'));
function App(props) {

  const isAuthenticated = useSelector(state => !!state.auth.token)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.authCheckState())
  }, [dispatch, isAuthenticated])

  
  const isAuth = false
  let routes = <PublicLayout>
    <Routes>
      <Route path="/" page={"login"} element={<Login />} />
       <Route path='/forgot_password' element={<ForgotPassword />} />
      <Route path='/new_password' element={<NewPassword />} />
       {/*<Route path='/register' element={<Register />} /> */}

    </Routes>
  </PublicLayout>
  if (isAuth) {
    routes = <PrivateLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </PrivateLayout>
  }

  return (
    <div className='app_container'>

      <Suspense fallback={<div>Chargement...</div>}>
        {isAuthenticated ?
          <PrivateLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/machines" element={<Home />} />
            </Routes>
          </PrivateLayout>
          :
          <PublicLayout>
            <Routes>
              <Route path="/" page={'login'} element={<Login />} />
              <Route path='/forgot_password' element={<ForgotPassword />} />
              <Route path='/new_password' element={<NewPassword />} />
             {/*<Route path='/register' element={<Register />} />  */}
              <Route path='*' element={<NotFound />} />


            </Routes>
          </PublicLayout>
        }
      </Suspense>
    </div>
  )

}

export default withErrorHandler(App);
