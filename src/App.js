import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body"
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantsMenu";
import { Provider } from "react-redux";
import userStore from "./utils/userStore";
import Cart from "./Components/Cart";


const Applayout = () => {
  return (
    <Provider store={userStore}>
    <div>
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};
 const Grocery = lazy(()=>import("./Components/Grocery"))

const AppRouter = createBrowserRouter([
  {
   element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart/>,
          },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
        },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
