import { createContext, useContext, useState } from "react";

const API = "https://fsa-jwt-practice.herokuapp.com";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [location, setLocation] = useState("GATE");

  // TODO: signup - done
  async function signup(username) {
    setError(null);

    try {
      const response = await fetch(`${API}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password: "super-secret-999" }),
      });

      const data = await response.json();

      if (!data.success) throw new Error(data.message);

      setToken(data.token);
      sessionStorage.setItem("token", data.token);
      setLocation("TABLET");


    } catch (e) {
      setError(err.message);
    }

    
  }

  // TODO: authenticate - done
async function authenticate() {
  setError(null);

  if(!token){
    setError("No token available.");
    throw new Error("No token available.");
  }

  try {
    const response = await fetch(`{API}/authenticate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    const data = await response.json();

    if (!data.success) throw new Error(data.message);

    setLocation("TUNNEL");


  } catch (e) {
    setError(e.message);

  }

 }


  const value = { location };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
