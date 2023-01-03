import { memo } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { SecondaryButton } from "../atom/button/SecondaryButton";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  console.log("Users");

  return {
    id: val,
    name: `test-${val}`,
    image:
      "https://images.unsplash.com/photo-1671523435843-e3cd426c24e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    email: "12345@test.com",
    phone: "000-9999-8888",
    company: {
      name: "株式会社○○",
    },
    website: "https://google.com",
  };
});

export const Users = memo(() => {
  const [ userInfo, setUserInfo ] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px
`;