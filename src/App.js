import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
   
const Applayout=()=>{
    return(
     <div>
        <Header/>
        <Body/>
     </div>
    );
  }
     const AppRouter=  createBrowserRouter(
      [
        {
          path:"/",
          element:<Applayout/>,
          errorElement:<Error/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
    
    ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);







// Functional Component for Heading
// const HeadingComponent = function Heading() {
//   return <h1>This is Heading</h1>;
// };

//  Functional Component for Footer
// const FooterComponent = function Footer() {
//   return (
//     <div>
//       <HeadingComponent/>
//       <h2>This is Footer</h2>
//     </div>
//   );
// };

//1.jsx element-->ReactcreateElement-->ReactElement-->jsobject-->HTMlElement(render)
// const jsxheading=(<h1 id="header" className="footer">Hello Good morning</h1>)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
