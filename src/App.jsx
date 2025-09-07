  import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
  import Home from "./pages/Home";
  import NotFound from "./pages/NotFound";

  function App() {
    return (
      <>
        <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </>
    );
  }

  export default App;

