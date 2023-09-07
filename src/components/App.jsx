import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUserThunk } from "redux/operations/authThunk";

const Home = lazy(() => import('pages/home/Home'));
const Contacts = lazy(() => import('pages/contacts/Contacts'));
const Signup = lazy(() => import('pages/registration/Registration'))
const Login = lazy(() => import('pages/login/Login'))
const NotFound = lazy(() => import('pages/NotFound/NotFound'))

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch])
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}