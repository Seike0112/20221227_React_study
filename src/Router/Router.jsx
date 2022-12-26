import { Routes, Route } from "react-router-dom";

// ホームコンポーネント
import {Home} from "../Components/Home/Home";
import { Page404 } from "../Components/Other/Page404";

// ページごとのRouteコンポーネント
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route exact path="/page1">
        {page1Routes.map((route) => (
          <Route 
            key={route.path}
            index={true}
            path={route.path} 
            element={route.children} 
          />
        ))}
      </Route>
      <Route exact path="/page2">
        {page2Routes.map((route) => (
          <Route 
            key={route.path}
            index={true}
            path={route.path} 
            element={route.children} 
          />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};  