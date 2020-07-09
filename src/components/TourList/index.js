import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/tour";
import { tourData } from "../tourData";
export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((t) => t.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  render() {
    const { tours } = this.state;
    // console.log(this.state.tours);
    return (
      <section className="tourlist">
        {tours.map((t) => {
          return <Tour key={t.id} tour={t} removeTour={this.removeTour}></Tour>;
        })}
      </section>
    );
  }
}
