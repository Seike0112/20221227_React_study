import {Link, useNavigate} from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(100).keys()];
  // JS操作による画面遷移
  const navigate = useNavigate();

  // DetailAページに遷移する為の関数
  const onClickDetailA = () => {
    navigate("/page1/detailA");
  };

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={"/page1/detailA"} state={{arr}}>DetailA</Link>
      <br />
      <Link to={{pathname: "/page1/detailB"}}>DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};