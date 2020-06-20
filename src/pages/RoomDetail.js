import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../helpers/context";

import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";

import Typography from "@material-ui/core/Typography";
import { Button, Container } from "@material-ui/core";
import StyledHero from "../styledComponents/StyledHero";

//Change the page content according to the URL.
class RoomDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <Typography variant="h3" component="h2">
            No such room...
          </Typography>

          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              back to rooms
            </Button>
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    console.log(extras);

    //Destructuring all images from images with
    //rest operator to get rid of off main image in second row of images.
    const [mainImg, ...remainImgs] = images;
    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                back to rooms
              </Button>
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {remainImgs.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <Container>
            <Typography variant="h5" component="h2" gutterBottom>
              Details
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              {description}
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom>
              Info
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Price: ${price}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Size: {size} SQFT
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Max capacity :
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              {pets ? "Pets allowed" : " No pets allowed"}
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              {breakfast && "Free breakfast included"}
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom>
              Extras:
            </Typography>
            <ul className="extras">
              {extras.map((extra, index) => {
                return <li key={index}>{extra}</li>;
              })}
            </ul>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default RoomDetail;
