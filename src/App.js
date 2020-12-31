import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { GlobalStyle } from "./components/globalStyle";
import UserGrid from "./components/Profile/UserGrid";
import { Modal } from "./components/Modal/Modal";
import { Posts } from "./components/Posts";

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (nextProps.history.action !== "POP" && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    let isModal = !!(location.state && location.state.modal && this.previousLocation !== location); // not initial render

    return (
      <div>
        <GlobalStyle />
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/img/:id" component={ImageView} />
        </Switch>
        {isModal ? <Route path="/img/:id" component={Modal} /> : null}
      </div>
    );
  }
}

export const Image = styled.div`
  width: 305px;
  height: 305px;
  background: no-repeat center/150% url(/img/${({ index }) => index}.jpeg);
  ${({ inModal }) =>
    !inModal &&
    css`
      :hover {
        opacity: 0.7;
      }
    `}
`;

function Home() {
  return (
    <div>
      <Link to="/gallery">Visit the Gallery</Link>
      <h2>Featured Images</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
      </ul>
    </div>
  );
}

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 2rem;
  /* margin: auto;
  margin-top: 80px; */
`;

function Gallery() {
  return (
    <div>
      <UserGrid />
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

function ImageView({ match }) {
  let image = Posts[parseInt(match.params.id, 10) - 1];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image index={image.id} />
    </div>
  );
}

function ModalGallery() {
  return (
    <Router>
      <Route component={ModalSwitch} />
    </Router>
  );
}

export default ModalGallery;
