import React from "react";
import ReactDOM from "react-dom";
import EventItem from "./EventItem1.js";

import "./styles.css";

class App extends React.Component {
  eventscomp() {
    var events = [
      {
        id: 1,
        eventname: "Wedding",
        date: "10-10-2019",
        description: "Wedding at Taj",
        location: "Chennai"
      },
      {
        id: 2,
        eventname: "Birthday",
        date: "10-10-2019",
        description: "Birthday at Food Village",
        location: "Chennai"
      },
      {
        id: 3,
        eventname: "Shop Opening",
        date: "10-10-2019",
        description: "Jewellery Shop opening",
        location: "Chennai"
      },
      {
        id: 4,
        eventname: "Sangeeth",
        date: "10-10-2019",
        description: "Sangeeth at AVM hall",
        location: "Chennai"
      },
      {
        id: 5,
        eventname: "Hospitality",
        date: "10-10-2019",
        description: "Hospitality at Shoba merittas",
        location: "Chennai"
      }
    ];
    const eventscomp = events.map(function(eI) {
      return (
        <EventItem
          key={eI.id}
          en={eI.eventname}
          ed={eI.description}
          edt={eI.date}
          eL={eI.location}
        />
      );
    });
    return eventscomp;
  }

  componentDidMount() {
    this.eventscomp();
  }
  render() {
    return <div  className="App">{this.eventscomp()}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
