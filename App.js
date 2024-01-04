import React from "react";
import ReactDOM from "react-dom/client";
 const Header=()=>{
    return(
    <div className="Header">
      <div className="logo">
        <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?w=740&t=st=1704371907~exp=1704372507~hmac=f2980cfab616481868e0f3b157063b28afbea0606b10f5aa2342e04d304c7b44"/>

      </div>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            <li>cart</li>
        </ul>

      </div>
    </div>
    )
 }
  const Applayout=()=>{
    return(
     <div>
        <Header/>
        {/* <Body/> */}
     </div>
    );
  }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);







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
