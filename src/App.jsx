import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "@firebase/auth";
import "./firebase-config";
import { auth } from "./firebase-config";

import { LoginPage } from "./pages/LoginPage";
import { OpdagPage } from "./pages/OpdagPage";
import { RootLayout } from "./components/RootLayout";
import { LikesPage } from "./pages/LikesPage";
import { SmatchesPage } from "./pages/SmatchesPage";
import { ProfilPage } from "./pages/ProfilPage";
import {ChatPage} from "./pages/ChatPage";
import { SettingsPage } from './pages/SettingsPage';

export const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  useEffect(() => {
    if (location.href.endsWith('.studio') ||
        location.href.endsWith('.studio/') ||
        location.href.endsWith(':5173') ||
        location.href.endsWith(':5173/')) {
          localStorage.removeItem("isAuth");
          localStorage.removeItem("name");
          localStorage.removeItem("age");
          localStorage.removeItem("email");
          localStorage.removeItem("password");
    }
    onAuthStateChanged(auth, user => {
      if (user) {
        if (isAuth) return;
        setIsAuth(true);
        localStorage.setItem("isAuth", true);
      } else {
        if (!isAuth) return;
        setIsAuth(false);
        localStorage.removeItem("isAuth");
      }
    });
  }, []);

  // vercel problem https://stackoverflow.com/questions/64815012/react-router-app-works-in-dev-but-not-after-vercel-deployment

  return <BrowserRouter>
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="/home" element={<OpdagPage />} />
        <Route path="/smatches" element={<SmatchesPage />} />
        <Route path="/likes" element={<LikesPage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/chat/:id" element={<ChatPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
};
