import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      </div>

  );
}
function WrappesApp(){
  return(
    <HashRouter>
      <App />
    </HashRouter>
  )
}
export default WrappesApp;
