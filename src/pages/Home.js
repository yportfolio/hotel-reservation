import React, { Component } from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import { Button } from "@material-ui/core";

//Use react composition to render props in component. https://reactjs.org/docs/composition-vs-inheritance.html
export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero hero="defaultHero">
          <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms start at $200."
          >
            <Link to="/rooms" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Rooms
              </Button>
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </React.Fragment>
    );
  }
}

export default Home;
