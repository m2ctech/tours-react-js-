import React from "react";
import Tour from "./Tour";

//css
import classes from "./Tours.module.css";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className={classes.tourssection}>
      <div className={classes.title}>
        <h2>Our Tours</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
