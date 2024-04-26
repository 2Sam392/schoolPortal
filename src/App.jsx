import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";
import Enrolments from "./pages/Enrolments";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Graduation from "./pages/Graduation";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signup" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CoursePage />} />
        <Route path="/enrolments" element={<Enrolments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:studentId/edit-profile" element={<EditProfile />} />
        <Route path="/graduation" element={<Graduation />} />
      </Routes>
    </>
  );
}

export default App;
