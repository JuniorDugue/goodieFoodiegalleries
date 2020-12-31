import React from "react";
import { Image } from "../../App";
import { Posts } from "../Posts";
import styled, { createGlobalStyle } from "styled-components";
import { PostGrid, InfoGrid } from "./PostGrid";
import { MiniUserGrid } from "../Profile/UserGrid";
import { ProfileImage } from "../Profile/ProfileImage";

const OverFlowHidden = createGlobalStyle`
  body{
    overflow: hidden;
  }
`;

const ModalStyle = styled.div`
  position: absolute;
  background: #fff;
  top: ${({ top }) => top}px;
  left: 25%;
  right: 25%;
  width: 600px;
  border: 2px solid #444;
`;

export function Modal({ match, history }) {
  let image = Posts[parseInt(match.params.id, 10) - 1];

  if (!image) return null;

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: "5000px",
        background: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <ModalStyle top={window.scrollY + window.innerHeight / 2 - 250}>
        <OverFlowHidden />
        <PostGrid>
          <Image inModal index={image.id} />
          <InfoGrid>
            <MiniUserGrid>
              <ProfileImage mini />
              <h2>jR</h2>
            </MiniUserGrid>
            <div>
              <h1>{image.title}</h1>
            </div>
            <div> 45 Likes </div>
          </InfoGrid>
        </PostGrid>
      </ModalStyle>
    </div>
  );
}
