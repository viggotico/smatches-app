import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { OpdagPage } from "./pages/OpdagPage";
import { RootLayout } from "./components/RootLayout";
import { LikesPage } from "./pages/LikesPage";
import { SmatchesPage } from "./pages/SmatchesPage";
import { ProfilPage } from "./pages/ProfilPage";
import { SignUpPage } from "./pages/SignUpPage";
import { SettingsPage } from './pages/SettingsPage';

export const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<OpdagPage />} />
        <Route path="/smatches" element={<SmatchesPage />} />
        <Route path="/likes" element={<LikesPage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        
        {/* andre */}
        
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/settings" element={<SettingsPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
};
