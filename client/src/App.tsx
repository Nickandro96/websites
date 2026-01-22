import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Methodology from "./pages/Methodology";
import References from "./pages/References";
import Resources from "./pages/Resources";
import Quality from "./pages/services/Quality";
import Regulatory from "./pages/services/Regulatory";
import Rabc from "./pages/services/Rabc";
import Rse from "./pages/services/Rse";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/a-propos"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/methodologie"} component={Methodology} />
      <Route path={"/references"} component={References} />
      <Route path={"/ressources"} component={Resources} />
      
      {/* Service Details */}
      <Route path={"/services/qualite"} component={Quality} />
      <Route path={"/services/reglementaire"} component={Regulatory} />
      <Route path={"/services/rabc"} component={Rabc} />
      <Route path={"/services/rse"} component={Rse} />

      {/* Legal */}
      <Route path={"/mentions-legales"} component={Legal} />
      <Route path={"/confidentialite"} component={Privacy} />

      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <WouterRouter hook={useHashLocation}>
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
