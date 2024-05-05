import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./page/home";
import Edit from "./page/Edit";
import History from "./page/History";
import Permission from "./page/Permission";
import Navigation from "./components/Navigation";


export default function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="history" element={< History />}/>
      <Route path="edit" element={< Edit />}/>
      <Route path="permission" element={< Permission />}/>
    </Routes>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
