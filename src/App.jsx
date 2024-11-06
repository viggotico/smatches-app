import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { OpdagPage } from "./pages/OpdagPage";
import { RootLayout } from "./components/RootLayout";
import { LikesPage } from "./pages/LikesPage";
import { SmatchesPage } from "./pages/SmatchesPage";
import { ProfilPage } from "./pages/ProfilPage";
import {ChatPage} from "./pages/ChatPage";
import { SettingsPage } from './pages/SettingsPage';

export const App = () => {
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
        
        {/* andre */}
        
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/settings" element={<SettingsPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
};
