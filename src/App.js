import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { css, ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./components/globalStyle";
import { Modal } from "./components/Modal/Modal";
import { Gallery } from "./components/Gallery/Gallery";

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
          <Route path="/img/:id" component={Modal} />
        </Switch>
        {isModal ? <Route path="/img/:id" component={Modal} /> : null}
      </div>
    );
  }
}

const HomeContainer = styled.div`
  font-size: 2rem;
`;

export const Image = styled.div`
  width: 305px;
  height: 305px;
  @media (max-width: 990px){
    width: 100%;
  }
  background: no-repeat center/150% url(/img/${({ index }) => index}.jpeg);
  ${({ inModal }) =>
    !inModal &&
    css`
      :hover {
        opacity: 0.7;
      }
    `}
`;

function Home(props) {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <HomeContainer>
        <button onClick={() => themeToggler()}>switch themes</button>
        <Link to="/gallery">Check out the Gallery</Link>
        <h2>Featured Images</h2>
        <ul>
          <li>
            <Link to="/img/2">Burger with wedges</Link>
          </li>
          <li>
            <Link to="/img/4">Yummy Chicken</Link>
          </li>
        </ul>
      </HomeContainer>
    </ThemeProvider>
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
