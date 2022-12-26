import { BrowserRouter, Link } from "react-router-dom";

// Routerコンポーネントの切り出し
import { Router } from "./Router/Router";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>
  );
};

export default App;
