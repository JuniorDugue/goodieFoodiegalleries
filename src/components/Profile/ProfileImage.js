import styled, { css } from "styled-components";

export const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  background: no-repeat center/150% url(/img/13.jpeg);
  border-radius: 100px;
  margin: 40px;
  ${({ mini }) =>
    mini &&
    css`
      width: 50px;
      height: 50px;
      margin: 5px;
    `}
`;
