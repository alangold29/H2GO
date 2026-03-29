import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/Home";
import Booking from "@/pages/Booking";
import Login from "@/pages/Login";
import AdminDashboard from "@/pages/AdminDashboard";
import StaffDashboard from "@/pages/StaffDashboard";
import ClientDashboard from "@/pages/ClientDashboard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/booking" component={BookingLayout} />
      <Route path="/login" component={LoginLayout} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/staff" component={StaffDashboard} />
      <Route path="/client" component={ClientDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function BookingLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header solid />
      <Booking />
      <Footer />
    </div>
  );
}

function LoginLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header solid />
      <Login />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
