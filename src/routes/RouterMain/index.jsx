import { Route, Routes } from "react-router-dom";
import { UserPage, NotFoundPage, RegisterPage, LoginPage} from "../../pages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RouterMain = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const userLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/user" element={<UserPage user={user} userLogout={userLogout} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};