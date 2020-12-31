import React from "react";
import { Image } from "../../App";
import { Posts } from "../Posts";
import styled, {createGlobalStyle} from "styled-components";

const OverFlowHidden = createGlobalStyle`
  body{
    overflow: hidden;
  }
`

const ModalStyle = styled.div`
  position: absolute;
  background: #fff;
  top: ${({ top }) => top}px;
  left: 10%;
  right: 10%;
  padding: 15px;
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
      <OverFlowHidden/>
        <h1>{image.title}</h1>
        <Image inModal index={image.id} />
        <button type="button" onClick={back}>
          Close
        </button>
      </ModalStyle>
    </div>
  );
}
