import { BrowserRouter as Router, Routes, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { publicsRoutes } from './routes';
import DefaultLayout from './Layout/DefaultLayout';
import { Fragment, createContext, useState } from 'react';
import { src } from './config';

function App() {
   return (
      <BrowserRouter>
         <div
            className="App"
            // style={{
            //    backgroundImage: `url(${src})`,
            //    backgroundRepeat: 'no-repeat',
            //    backgroundSize: 'cover',
            // }}
         >
            <Routes>
               {publicsRoutes.map((route, index) => {
                  const Page = route.component;
                  let Layout = DefaultLayout;
                  if (route.Layout) {
                     Layout = route.Layout;
                  } else if (route.Layout === null) {
                     Layout = Fragment;
                  }
                  return (
                     <Route
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     ></Route>
                  );
               })}
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
