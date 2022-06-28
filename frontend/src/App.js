// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";


import AddCommentPage from "./pages/AddCommentPage/AddCommentPage";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import RelatedVideos from "./components/VideoPlayer/VideoPlayer";
import SearchBar from "./components/SearchBar/SearchBar";
import CommentList from "./components/CommentList/CommentList";
import CommentForm from "./components/CommentForm/CommentForm";
import Comment from "./components/Comment/Comment";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/Search" element={<SearchPage />}/>
        <Route path="/Video" element={<VideoPage />}/>

        
        <Route path="/Player" element={<VideoPlayer />}/>
        <Route path="/Related" element={<RelatedVideos />}/>
        <Route path="/Bar" element={<SearchBar />}/>
        <Route path="/List" element={<CommentList />}/>
        <Route path="/Form" element={<CommentForm />}/>
        <Route path="/Comment" element={<Comment/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
