import "../CSS/schedule.css";
import toc from "../Images/KoW Terms and Conditions page.pdf";

function EventCard(link, location, dateRange) {
  return (
    <div class="eventCard">
      <a href={link}>
        <h1>{location}</h1>
        <p>{dateRange}</p>
      </a>
    </div>
  );
}

export default function Schedule() {
  return (
    <div class="page concs">
      <h1 class="titleText purp">Upcoming Events</h1>
      {EventCard(
        "https://purchase-tickets-forthe-kingdom-of-wonders.square.site/shop/macclenny-fl-feb-19-21/XKI2UTFG447AT4PMXBTLIKV5?page=1&limit=30&sort_by=category_order&sort_order=asc",
        "Macclenny, Florida",
        "February 19th - February 21st"
      )}
      {EventCard(
        "https://purchase-tickets-forthe-kingdom-of-wonders.square.site/shop/ashburn-ga-feb-28-mar-1/7S6X7M45M2MBSPEHNURZODSO?page=1&limit=30&sort_by=category_order&sort_order=asc",
        "Ashburn, Georgia",
        "February 28th - March 1st"
      )}

      <a href="https://purchase-tickets-forthe-kingdom-of-wonders.square.site/" target="_self" class="tixBtn w-1/4 text-center">
        GET TICKETS!!!
      </a>
      <div class="purp disclaimer">
        <em>
          All Sales are Final. In Making a Purchase and attending any of our
          shows, Users are agreeing to our{" "}
          <a href={toc} class="link" target="_blank" rel="noopener noreferrer">
            Terms and Conditions
          </a>
        </em>
      </div>
    </div>
  );
}
