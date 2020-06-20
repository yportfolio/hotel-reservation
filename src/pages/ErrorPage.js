import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export class ErrorPage extends Component {
  render() {
    return (
      <Hero hero="defaultHero">
        <Banner title="404" subtitle="Page not found.">
          <Link to="/" className={"btn-primary"}>
            Return home
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default ErrorPage;
