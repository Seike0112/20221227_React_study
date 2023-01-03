import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;

  // 親コンポーネントからpropsで値を受け取り表示される
  return (
    <SButton onClick={onClick}>{children}</SButton>
  );
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;