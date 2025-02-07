import "../CSS/schedule.css";
import toc from "../Images/KoW Terms and Conditions page.pdf";
import { FaMapMarkerAlt } from "react-icons/fa";

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

      {EventCard(
        "https://purchase-tickets-forthe-kingdom-of-wonders.square.site/shop/macclenny-fl-feb-19-21/XKI2UTFG447AT4PMXBTLIKV5",
        "Macclenny, FL",
        "February 18th - February 20th",
        "5567 Lauramore Rd, Macclenny, FL 32063"
      )}
      {EventCard(
        "https://purchase-tickets-forthe-kingdom-of-wonders.square.site/shop/222-223-homeland-ga/7S6X7M45M2MBSPEHNURZODSO",
        "Homeland, GA",
        "February 22nd - February 23rd",
        "100 Bowery Lane, Homeland, GA, 31537"
      )}
       {EventCard(
        "https://purchase-tickets-forthe-kingdom-of-wonders.square.site/shop/226-227-sylvester-ga/6UUT6E6I5GCPZPRZH7BHPYGE",
        "Baxley, GA",
        "February 26th - February 27th",
        "245 Industrial Drive, Baxley, GA, 31513"
      )}
      {EventCard(
        "https://purchase-tickets-forthe-kingdom-of-wonders.square.site/shop/ashburn-ga-feb-28-mar-1/7S6X7M45M2MBSPEHNURZODSO",
        "Ashburn, GA",
        "February 28th - March 1st",
        "705 Hudson Ave, Ashburn, GA 31714"
      )}
      {EventCard(
        "https://purchase-tickets-forthe-kingdom-of-wonders.square.site/shop/32-adel-ga/IKLKA64XPP3OB6H6PMDYL5BQ",
        "Adel, GA",
        "March 2nd",
        "2521 US-41, Adel, GA 31620"
      )}
      {EventCard(
        "https://purchase-tickets-forthe-kingdom-of-wonders.square.site/shop/38-39-barnesville-ga/IHZQFJXBBC5ZNWLFWOX2FPBC",
        "Barnesville, GA",
        "March 8th - 9th",
        "100 Louis Dr, Barnesville, GA 30204"
      )}
      {EventCard(
        "https://purchase-tickets-forthe-kingdom-of-wonders.square.site/shop/319-320-chester-sc/C2KJR2W7VERKIHW3ULB2QDFY",
        "Chester, SC",
        "March 19th - 20th",
        "2355 Great Falls Hwy, Chester, SC 29014"
      )}

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
