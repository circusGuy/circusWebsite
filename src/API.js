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

// 3600000
const REFRESH_EXPIRATION_TIME = 5000;
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
  const url = `https://www.eventbriteapi.com/v3/organizations/${process.env.REACT_APP_ORG_ID}/events/?time_filter=current_future`;

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
          name: m.name.text,
          url: m.url,
          id: m.id,
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
    // Reset on time
    get(timeRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const timeSnap = snapshot.val();
          const timestamp = Object.values(timeSnap)[0].lastRefresh;
          let time = new Date();
          if (time - timestamp >= REFRESH_EXPIRATION_TIME) {
            updateEvents();
            set(Object.values(timeSnap)[0], {
              lastRefresh: Date.now(),
            });
          }
        } else {
          updateEvents();
        }
      })
      .catch((error) => {
        console.error(error);
      });

    get(dbref)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const events = snapshot.val();
          const eventsDis = Object.values(events).map((m) => {
            return `<li><ul><li>Name:${m.name}</li><li>url: ${m.url}</li><li><a href="/checkout?id=${m.id}">Buy Tickets</a></li></li></ul></li>`;
          });
          document.querySelector("#events").innerHTML = `<ul>${eventsDis}</ul>`;
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}