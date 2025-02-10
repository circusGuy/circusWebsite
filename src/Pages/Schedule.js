import "../CSS/schedule.css";
import toc from "../Images/KoW Terms and Conditions page.pdf";
import { FaMapMarkerAlt } from "react-icons/fa";
import data from './events.json';



function EventCard(link, location, dateRange, address) {
  return (
    <div class="eventCard">
      <a
        href={link}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>{location}</h1>
        <p>{dateRange}</p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            color: "grey",
            fontSize: "15px",
            marginTop: "5px",
          }}
        >
          <FaMapMarkerAlt style={{ marginRight: "5px" }} />
          {address}
        </p>
      </a>
    </div>
  );
}

export default function Schedule() {
  return (
    <div class="page concs">
      <h1 class="titleText purp">
        Upcoming Events
        <div class="disclaimer">
          <em>
            All sales are final. In making a purchase and attending any of our
            shows, users are agreeing to our{" "}
            <a
              href={toc}
              class="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
          </em>
        </div>
      </h1>
      {data.map((event) => EventCard(event.link, event.loc, event.dates, event.address))}

      <a
        href="https://purchase-tickets-forthe-kingdom-of-wonders.square.site/"
        target="_self"
        class="tixBtn w-1/4 text-center"
      >
        GET TICKETS!!!
      </a>
    </div>
  );
}
