import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import DrainServices from "./pages/DrainServices";
import WaterHeaterServices from "./pages/WaterHeaterServices";
import GeneralRepairs from "./pages/GeneralRepairs";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/drain-cleaning-sewer-moncton" element={<DrainServices />} />
            <Route path="/water-heater-repair-installation-moncton" element={<WaterHeaterServices />} />
            <Route path="/plumbing-repairs-fixtures-moncton" element={<GeneralRepairs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-plumber-moncton" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
