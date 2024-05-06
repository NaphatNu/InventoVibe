import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./page/home";
import Edit from "./page/Edit";
import History from "./page/History";
import Permission from "./page/Permission";
import Navigation from "./components/Navigation";
import SignUp from "./page/Signup";
import Login from "./page/Login";



export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={< Login />}/>
      <Route path="home" element={< Home />}/>
      <Route path="signup" element={< SignUp />}/>
      <Route path="history" element={< History />}/>
      <Route path="edit" element={< Edit />}/>
      <Route path="permission" element={< Permission />}/>
    </Routes>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
