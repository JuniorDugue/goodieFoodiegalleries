import React from "react";
import { Link } from "react-router-dom";
import UserGrid from "../Profile/UserGrid";
import styled from "styled-components";
import { Posts } from "../Posts";
import { Image } from "../../App";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 2rem;
  /* margin: auto;
  margin-top: 80px; */
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
`;

const TabLink = styled.div`
  text-decoration: none;
  color: #000;
  width: 50px;
`;

export function Gallery() {
  return (
    <div>
      <UserGrid />
      <LinkGrid>
        <TabLink>square placeholder</TabLink>
        <TabLink>cascade placeholder</TabLink>
      </LinkGrid>
      <PhotoGrid>
        {Posts.map((i) => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // this is the trick!
              state: { modal: true },
            }}
          >
            <Image index={i.id} />
          </Link>
        ))}
      </PhotoGrid>
    </div>
  );
}
