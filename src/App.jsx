import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Car, User, HelpCircle, Info } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
import MyRides from "./pages/MyRides.jsx";
import Profile from "./pages/Profile.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "My Rides",
    to: "/my-rides",
    icon: <Car className="h-4 w-4" />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
  },
  {
    title: "About Us",
    to: "/about-us",
    icon: <Info className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="my-rides" element={<MyRides isDriver={false} />} />
              <Route path="profile" element={<Profile />} />
              <Route path="about-us" element={<AboutUs />} />
              {/* Add route for Help page */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;