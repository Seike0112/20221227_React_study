import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;

  // 親コンポーネントからpropsで値を受け取り表示される
  return (
    <SButton>{children}</SButton>
  );
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;