import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const {state} = useLocation();
  // JS操作による画面遷移
  const navigate = useNavigate();

  // 前のページ(Page1)に戻る
  const onClickBack = () => {
    navigate(-1);
  };

  console.log(state);
  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};