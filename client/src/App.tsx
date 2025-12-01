import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import PolstarHome from "./pages/PolstarHome";
import AgentSolaria from "./pages/AgentSolaria";
import AgentFinsight from "./pages/AgentFinsight";
import AgentLinda from "./pages/AgentLinda";
import AgentSamybear from "./pages/AgentSamybear";
import SamyBearHome from "./pages/SamyBearHome";
import ElevenLabsWidget from "./components/ElevenLabsWidget";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={SamyBearHome} />
      <Route path={"/polstar"} component={PolstarHome} />
      <Route path={"/samybear"} component={SamyBearHome} />
      <Route path={"/agents/solaria"} component={AgentSolaria} />
      <Route path={"/agents/finsight"} component={AgentFinsight} />
      <Route path={"/agents/linda"} component={AgentLinda} />
      <Route path={"/agents/samybear"} component={AgentSamybear} />
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
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <ElevenLabsWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
