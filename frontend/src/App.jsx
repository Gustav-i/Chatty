import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import { Loader } from "lucide-react"
import { Toaster } from "react-hot-toast"
import { useThemeStore } from "./store/useThemeStore"


export default function App() 
{
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()
  const { theme } = useThemeStore()

  useEffect(() =>
  {
    checkAuth()
  }, [checkAuth])

  useEffect(() =>
  {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  console.log(authUser)

  if (isCheckingAuth && !authUser)
  {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-100 text-base-content p-2">

      <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={authUser ? <Home /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/signup" 
            element={!authUser ? <SignUp /> : <Navigate to="/" />} 
          />
          <Route 
            path="/login" 
            element={!authUser ? <Login /> : <Navigate to="/" />} 
          />
          <Route 
            path="/settings" 
            element={<Settings />} 
          />
          <Route 
            path="/profile" 
            element={authUser ? <Profile /> : <Navigate to="/login" />} 
          />
        </Routes>
      <Toaster />
      
    </div>
  )
}
