import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./HomePage/Home";

import NewsBlog from "./NewsAndUpdates/NewsBlog";
import Layout from "./Layout";

import OurCauses from "./OurCauses/OurCauses";
import CaseStudies from "./CaseStudies/CaseStudies";

import Payment from "./Payment/Payment";

const App = () => {
  const router = createBrowserRouter([
    {
       path:"/payment",
        element:<Payment/>,
    },
    {

      path: "/",
      element: <Layout/>,

      children:[
        {
          path: "/",
      element: <Home/>,
        },
        {
          path: "/news",
      element: <NewsBlog/>,
        },
        {
          path: "/causes",
      element: <OurCauses/>,
        },
        {
          path: "/casestudies",
      element: <CaseStudies/>,
        },
        
      ]
    },
    
  ],
  {
    basename:'/Charity-App'
  }
);
  return <RouterProvider router={router} />;
  
};

export default App;
