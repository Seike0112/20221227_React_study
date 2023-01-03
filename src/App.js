import axios from "axios";

import "./App.css";

const App = () => {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onClickUsers1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUsers1}>id=1のuser</button>
    </div>
  );
};

export default App;
