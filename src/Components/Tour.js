import React from "react";

import classes from "./Tour.module.css";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <article className={classes.singletour}>
      <img src={image} alt={name} className={classes.pic} />
      <footer>
        <div className={classes.tourinfo}>
          <h4 className={classes.cityname}>{name}</h4>
          <h4 className={classes.tourprice}>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 250)}......`}
          <button
            onClick={() => setReadMore(!readMore)}
            className={classes.read}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className={classes.deletebtn} onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
