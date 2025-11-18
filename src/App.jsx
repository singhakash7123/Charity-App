import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Home = lazy(()=>import("./HomePage/Home"))
const NewsBlog = lazy(()=>import("./NewsAndUpdates/NewsBlog"))
const Layout = lazy(()=>import("./Layout"))
const OurCauses = lazy(()=>import("./OurCauses/OurCauses"))
const CaseStudies = lazy(()=>import("./CaseStudies/CaseStudies"))
const Payment = lazy(()=>import("./Payment/Payment"))


const App = () => {
  const router = createBrowserRouter([
    {
       path:"/payment",
       
        element:(<Suspense fallback={<div className="text-center" >Loading...</div>}>
          <Payment/>
        </Suspense>),
    },
    {

      path: "/",
      element: (<Suspense fallback={<div className="text-center" >Loading...</div>}>
          <Layout/>
        </Suspense>) ,

      children:[
        {
          path: "/",
      element: (<Suspense fallback={<div className="text-center" >Loading...</div>}>
         <Home/>
        </Suspense>) ,
        },
        {
          path: "/news",
      element:(<Suspense fallback={<div className="text-center" >Loading...</div>}>
        <NewsBlog/>
        </Suspense>) ,
        },
        {
          path: "/causes",
      element:(<Suspense fallback={<div className="text-center" >Loading...</div>}>
        <OurCauses/>
        </Suspense>) ,
        },
        {
          path: "/casestudies",
      element:(<Suspense fallback={<div className="text-center" >Loading...</div>}>
        <CaseStudies/>
        </Suspense>) ,
        },
        
      ]
    },
    
  ],
  {
    basename:'/Charity-App/'
  }
);
  return <RouterProvider router={router} />;
  
};

export default App;
