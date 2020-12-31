import React from "react";
import styled from "styled-components";
import { ProfileImage } from "./ProfileImage";

const UserGridStyled = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
  grid-template-areas:
    "photo name"
    "photo label"
    "photo description";
`;

const Photo = styled.div`
  grid-area: photo;
`;

const Name = styled.div`
  grid-area: name;
  font-size: 1.6em;
`;

const Label = styled.div`
  grid-area: label;
  font-size: 1.6em;
`;

const Description = styled.div`
  grid-area: description;
  max-width: 400px;
  font-size: 1.6em;
`;

export default function () {
  return (
    <UserGridStyled>
      <Photo>
        <ProfileImage />
      </Photo>
      <Name>gFg | goodie Foodie galleries</Name>
      <Label>
        <strong>1mil</strong> Followers
      </Label>
      <Description>Pour-over hexagon shaman vaporware truffaut humblebrag asymmetrical hammock man braid cronut cray polaroid hot chicken etsy. Everyday carry seitan cray art party raclette direct trade sustainable irony. Brooklyn chambray vinyl, DIY forage chillwave truffaut ugh venmo you probably haven't heard of them banjo lomo vape raclette thundercats. Try-hard selfies raclette taiyaki migas authentic unicorn health goth mustache swag af knausgaard tumblr lyft.</Description>
    </UserGridStyled>
  );
}
