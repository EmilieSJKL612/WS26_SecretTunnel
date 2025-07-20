import { createContext, useContext, useState } from "react";

const API = "https://fsa-jwt-practice.herokuapp.com";

const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [location, setLocation] = useState("GATE");
  const [error, setError] = useState(null);

  // TODO: signup - done
  async function signup(username) {



    setError(null);
    console.log("Calling signup with:", username); 
    
    // op1: try-catch (?) ; op2: fetch (just following DQ's example), but needs further implementation on preventing/catching errors (see OB WS note and LN)...

    try {
      const response = await fetch(`${API}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password: "super-secret-999" }),
      });

      const data = await response.json();
      console.log("Signup response:", data);

      if (!data.success) throw new Error(data.message);

      setToken(data.token);
      // sessionStorage.setItem("token", data.token);

      setLocation("TABLET");

    } catch (err) {
      console.error("Signup failed:", err);
    }
    
  }

  // TODO: authenticate - done
async function authenticate() {
  setError(null);

  if(!token){
    throw new Error("No token found. Please sign up first.");
  }

  try {
    const response = await fetch(`{API}/authenticate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  
    const data = await response.json();
    console.log("Authentication response:", data);


    if (!data.success) throw new Error(data.message);

    setLocation("TUNNEL");


  } catch (err) {
    console.error("Authentication failed", err);

  }

 }


  const value = { location, signup, authenticate };


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
