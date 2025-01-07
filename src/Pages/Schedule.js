import "../CSS/schedule.css";
import PageHeader from "../Components/pageHeader";
import toc from "../Images/KoW Terms and Conditions page.pdf";

export default function Schedule() {
  return (
    <div class="page concs">W
      <PageHeader title="Upcoming Events" />

        <div class='eventCard'>
          <h1>Macclenny, Florida</h1>
          <p>February 19th - February 21st</p>
        </div>
        <div class='eventCard'>
          <h1>Ashburn, Georgia</h1>
          <p>February 28th - March 1st</p>
        </div>
       

      {/* <a
        href="https://purchase-tickets-forthe-kingdom-of-wonders.square.site/ "
        target="_self"
        class="tixBtn w-1/4 text-center"
      > */}
         <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_self"
        class="tixBtn w-1/4 text-center mt-5"
      >
        GET TICKETS!!!
      </a>

      <div class="disclaimer mt-8">
        <em class="text-white">
          All Sales are Final. In Making a Purchase, Users are agreeing to our{" "}
          <a href={toc} class="link" target="_blank" rel="noopener noreferrer">
            Terms and Conditions
          </a>
        </em>
      </div>
    </div>
  );
}
