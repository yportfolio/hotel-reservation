import React from "react";
import { Typography } from "@material-ui/core";

import Room from "./Room";

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <Typography variant="h2" component="h2" gutterBottom>
          Unfortunately, no room match your search.
        </Typography>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />;
        })}
      </div>
    </section>
  );
}
