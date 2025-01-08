import "../CSS/schedule.css";
import toc from "../Images/KoW Terms and Conditions page.pdf";

export default function Schedule() {
  return (
    <div class="page concs">
      <h1 class="titleText purp">Upcoming Events</h1>
      <div class="eventCard">
        <h1>Macclenny, Florida</h1>
        <p>February 19th - February 21st</p>
      </div>
      <div class="eventCard">
        <h1>Ashburn, Georgia</h1>
        <p>February 28th - March 1st</p>
      </div>
      <a href="/schedule" target="_self" class="tixBtn w-1/4 text-center">
        GET TICKETS!!!
      </a>
      <div class="disclaimer mt-8">
        <em class="text-white">
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
