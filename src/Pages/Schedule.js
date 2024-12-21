import getEvents from "../API";
import { useState } from "react";
import "../CSS/schedule.css";
import { Stack } from "@mui/material";


function eventCard(event) {
  const [date, timeWithZone] = event.date.split("T");
  let time = timeWithZone.replace("Z", "");

  const [hours, minutes] = time.split(":");
  const period = +hours >= 12 ? "PM" : "AM";
  const hours12 = +hours % 12 || 12;
  time = `${hours12}:${minutes} ${period}`;

  const dateStr = new Date(date);

  const options = { month: "short", day: "numeric" };
  const formattedDate = dateStr.toLocaleDateString("en-US", options);

  const [month, day] = formattedDate.split(" ");

  return (
    <div>
      <div>
       
        <div class='locHeader'><h1>{event.city}, {event.state}</h1></div>
        <Stack direction="row" class="row" >
          <Stack class="dateBox">
            <div>{month}</div>
            <div>{day}</div>
          </Stack>
          <Stack direction="column" spacing={2} className='mt-3'>
            <div>
              <strong>Location:</strong> {event.location}
            </div>
            <div>
              <strong>Ticket Price:</strong> $20.00 - $25.00
            </div>
          </Stack>
          <Stack spacing={4} direction='row' className='checkoutGroup'><a href={`/checkout?id=${event.id}`} class="checkoutBtn">
            {time}
          </a><a href={`/checkout?id=${event.id}`} class="checkoutBtn">
            {time}
          </a></Stack>
        </Stack>
      </div>
      
    </div>
  );
}

export default function Schedule() {
 

  const [eventList, setEventList] = useState([]);

  (async () => {
    const events = await getEvents();
    setEventList(events);
  })();

  const eList = eventList.map((e) => {
    return eventCard(e);
  });
  return (
    <div class="page">
      <div class="subPage">{eList}</div>
    </div>
  );
}
