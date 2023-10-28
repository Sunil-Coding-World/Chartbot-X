import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import HomePage from "./pages/HomePage"
import Chatbot from '../src/components/home/Chartbot'



 import "./style/app.scss";
 import "./style/Header.scss";
 import "./style/Home.scss";
 import "./style/Courses.scss";
 import "./style/CourseDetail.scss";
 import "./style/Footer.scss";
 import "./style/Contact.scss";
 import "./style/About.scss";
import "./style/Login.scss"
import "./style/Signup.scss"
 import "./style/EnrollSuccess.scss";
 import "./style/Profile.scss";
 import "./style/UserDashboard.scss";
 import "./style/Chatboat.scss";
// import Protected from './components/auth/Protected';
//routing 


  
 const router = createBrowserRouter(
  [ 
   { 
     path: "/", 
     element: <><HomePage/></> , 
   }, 
   { 
     path: "/chatbot", 
     element:<><Chatbot /></> , 
   }, 
  //  { 
  //    path: "/course-detail/:id", 
  //    element:<><CourseDetailPage /></> , 
  //  }, 
  //  { 
  //    path: "/success", 
  //    element: <><EnrollSuccessPage /></> , 
  //  }, 
  //  { 
  //    path: "/unenroll", 
  //    element:<>< UnenrollSuccessPage/></> , 
  //  }, 
  //  { 
  //    path: "/contact", 
  //    element:<><ContactPage /></> , 
  //  }, 
  //  { 
  //   path: "/about", 
  //   element: <AboutPage />, 
  // },
  // { 
  //   path: "/login", 
  //   element: <Login/>, 
  // }, 
  // { 
  //   path: "/signup", 
  //   element: <Signup/>, 
  // }, 
  // { 
  //   path: "/profile", 
  //   element: <><Profile/></>, 
  // }, 
  // { 
  //   path: "/dash", 
  //   element: <><UserDashboardPage/></>, 
  // }, 
 ]) 
  
 const App = () => { 
   return ( 
       <RouterProvider router={router} /> 
   ) 
 } 
  
 export default App