import React, { Suspense } from "react";
import "./scss/main/main.css";
import "./scss/backlog/backlog.css";
import "./scss/account/account.css";
import "./scss/clients/client.css";
import "./scss/project-info/information.css";
import "./scss/other/other.css";
import "./scss/chat/chat.css";
import "./scss/login/login.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./dashboard/login";
import { routes } from "./pages/routes";
import { SignUp } from "./dashboard/signUp";
import {ForgotPassword} from "./dashboard/forgotPassword";
function App() {
  const CustomComponent = (data) => {
    const Comp = React.lazy(() => import(`${data.path}`));
    return <Comp />;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            <Route path="/" element={<Dashboard />}>

              {routes.map((route) => {
                return (
                  <>
                    <Route
                    
                      path={route.link}
                      element={CustomComponent(route)}
                    ></Route>
                    {route.subpaths?.length > 0 &&
                      route.subpaths.map((_route, index) => {
                        return (
                          <Route
                           
                            path={route.link + "/" + _route.link}
                            element={CustomComponent(_route)}
                          />
                        );
                      })}
                  </>
                );
              })}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
