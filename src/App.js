import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Blog from './Pages/Blog/Blog';
import Review from './Pages/Review/Review';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Home/Footer';
import PartDetail from './Pages/PartDetail/PartDetail';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/part/:partId' element={<RequireAuth><PartDetail></PartDetail></RequireAuth>}></Route>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="review" element={<Review />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;