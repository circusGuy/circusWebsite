/*
!!! IMPORTANT REQUEST URLS !!!
GET 'https://www.eventbriteapi.com/v3/users/me/organizations/' gets organization id
GET `https://www.eventbriteapi.com/v3/users/me/?token=${token}` verifies subscription exists
GET `https://www.eventbriteapi.com/v3/organizations/${id}/events/?time_filter=all` lists all events (all is all events current_future is all future events)
GET `https://www.eventbriteapi.com/v3/events/{event_id}/?expand=ticket_availability` ticket availability
*/
import axios from "axios";
import app from "./firebaseConfig";
import { getDatabase, ref, set, get, push, remove } from "firebase/database";
//3600000
const REFRESH_EXPIRATION_TIME = 3600000;
const url = `https://www.eventbriteapi.com/v3/organizations/${process.env.REACT_APP_ORG_ID}/events/?time_filter=current_future&expand=venue`;

const db = getDatabase(app);
const dbref = ref(db, "events");
const timeRef = ref(db, "time");

async function dbReset() {
  await remove(dbref);
}
async function timeReset() {
  await remove(timeRef);
}

async function updateEvents() {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    });
    dbReset();
    timeReset();

    let res = response.data;
    let events = res.events;

    events.forEach((m) => {
      const saveData = async () => {
        console.log(m);
        const newEvent = push(dbref);
        set(newEvent, {
          url: m.url,
          id: m.id,
          city: m.venue.address.city,
          state: m.venue.address.region,
          location: m.venue.name,
          date: m.start.utc,
        })
          .then(() => {
            console.log("Data Save Successfully");
          })
          .catch((error) => {
            alert("error:", error.message);
          });
      };
      saveData();
    });
    let time = Date.now();

    const timestamp = push(timeRef);
    set(timestamp, {
      lastRefresh: time,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default async function getEvents() {
  try {
    const timeSnapshot = await get(timeRef);

    if (timeSnapshot.exists()) {
      const timeSnap = timeSnapshot.val();
      const timestamp = Object.values(timeSnap)[0].lastRefresh;
      const time = new Date();

      if (time - timestamp >= REFRESH_EXPIRATION_TIME) {
        await updateEvents();
        await set(Object.values(timeSnap)[0], {
          lastRefresh: Date.now(),
        });
      }
    } else {
      await updateEvents();
    }

    const eventsSnapshot = await get(dbref);

    if (eventsSnapshot.exists()) {
      const events = eventsSnapshot.val();
      return Object.values(events);
    } else {
      return []; 
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
