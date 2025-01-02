// import getEvents from "../API";
// import { useState } from "react";
import { Divider, Stack } from "@mui/material";
import "../CSS/schedule.css";
import PageHeader from "../Components/pageHeader";

// function eventCard(date, times, location) {
//   return (
//     <div>
//       <div>
//         <div class='locHeader'><h1>{event.city}, {event.state}</h1></div>
//         <Stack direction="row" class="row" >
//           <Stack class="dateBox">
//             <div>{month}</div>
//             <div>{day}</div>
//           </Stack>
//           <Stack direction="column" spacing={2} className='mt-3'>
//             <div>
//               <strong>Location:</strong> {event.location}
//             </div>
//             <div>
//               <strong>Ticket Price:</strong> $20.00 - $25.00
//             </div>
//           </Stack>
//           <Stack spacing={4} direction='row' className='checkoutGroup'><a href={`/checkout?id=${event.id}`} class="checkoutBtn">
//             {time}
//           </a><a href={`/checkout?id=${event.id}`} class="checkoutBtn">
//             {time}
//           </a></Stack>
//         </Stack>
//       </div>

//     </div>
//   );
// }

export default function Schedule() {
  // const [eventList, setEventList] = useState([]);

  // (async () => {
  //   const events = await getEvents();
  //   setEventList(events);
  // })();

  // const eList = eventList.map((e) => {
  //   return eventCard(e);
  // });
  return (
    <div class="page concs">
      <PageHeader title="Upcoming Events" />

      <div class="subPage mb-20">
        <Stack direction="row" spacing={40}>
          <div class='eventBox'>
            <div class="dateBox">
              <div>February</div>
              <div>6th-7th</div>
            </div>
            Washington, DC
          </div>

          <div class="dateBox">
            <div>February</div>
            <div>7th</div>
          </div>
          <div class="dateBox">
            <div>February</div>
            <div>8th</div>
          </div>
        </Stack>
      </div>

      <a
        href="https://purchase-tickets-forthe-kingdom-of-wonders.square.site/"
        target="_self"
        class="tixBtn w-1/4 text-center"
      >
        GET TICKETS!!!
      </a>

      <div class="disclaimer mt-8">
        <em class="text-white">
          All Sales are Final. In Making a Purchase, Users are agreeing to our{" "}
          <a href="youtube.com" class="link">
            Terms and Conditions
          </a>
        </em>
      </div>
    </div>
  );
}
