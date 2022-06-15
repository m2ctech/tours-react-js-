import React from "react";
import data from "./data";
import Tours from "./Tours";
const url = "https://course-api.netlify.app/api/react-tours-project";

//css
import classes from "./App.module.css";

function App() {
  const [tours, setTours] = React.useState(data);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };

  return (
    <main className={classes.mainsection}>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
