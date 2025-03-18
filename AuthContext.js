import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Giả lập xác thực (bạn có thể thay bằng API thực tế)
    if (email === "tuanlongp70@gmail.com" && password === "123456") {
      setUser({ name: "Tuan Long", email });
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
