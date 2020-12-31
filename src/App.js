import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { GlobalStyle } from "./components/globalStyle";
import UserGrid from "./components/Profile/UserGrid";

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

const Image = styled.div`
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

const IMAGES = [
  { id: 1, title: "Burger with fries" },
  { id: 2, title: "Burger with wedges" },
  { id: 3, title: "Heart attack Burger" },
  { id: 4, title: "Yummy Chicken" },
  { id: 5, title: "Guac with Toast" },
  { id: 6, title: "Spaghetti" },
  { id: 7, title: "Steak" },
  { id: 8, title: "Chicken and Rice" },
  { id: 9, title: "Salad" },
  { id: 10, title: "Salmon" },
  { id: 11, title: "More Steak" },
  { id: 12, title: "and even MORE STEAK!" },
];

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
        {IMAGES.map((i) => (
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
  let image = IMAGES[parseInt(match.params.id, 10) - 1];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image index={image.id} />
    </div>
  );
}

function Modal({ match, history }) {
  let image = IMAGES[parseInt(match.params.id, 10) - 1];

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
        background: "rgba(0, 0, 0, 0.15)",
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444",
        }}
      >
        <h1>{image.title}</h1>
        <Image inModal index={image.id} />
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
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
