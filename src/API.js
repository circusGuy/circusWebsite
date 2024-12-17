/*
API key: PYUXRI5IDPDXBAJKYY
Client secret: VNT5L5T47B667YWGWREPP4BLN5UWHS47HE7IHCBA2J2FTOUKDM
Private token: NEMSZJPVJRTZ2W7LCY2F
Public token: R5JZMBXB5WSTIZ64PXGC

organization id: 2404201774443;

!!! IMPORTANT REQUEST URLS !!!
GET 'https://www.eventbriteapi.com/v3/users/me/organizations/' gets organization id
GET `https://www.eventbriteapi.com/v3/users/me/?token=${token}` verifies subscription exists
GET `https://www.eventbriteapi.com/v3/organizations/${id}/events/?time_filter=all` lists all events (all is all events current_future is all future events)
GET `https://www.eventbriteapi.com/v3/events/{event_id}/?expand=ticket_availability` ticket availability

*/
import axios from "axios";
import app from "./firebaseConfig";
import { getDatabase, ref, set, get, push, remove } from "firebase/database";


const REFRESH_EXPIRATION_TIME = 3600000;

async function removeAll() {
  const db = getDatabase(app);
  const dbref = ref(db, "events");
  await remove(dbref);
}

async function updateEvents() {
  const id = "2404201774443";
  const url = `https://www.eventbriteapi.com/v3/organizations/${id}/events/?time_filter=current_future`;
  const token = "NEMSZJPVJRTZ2W7LCY2F";

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    removeAll();

    let res = response.data;
    let events = res.events;
    const db = getDatabase(app);

    events.forEach((m) => {
      const saveData = async () => {
        console.log(m);
        const newEvent = push(ref(db, "events"));
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
    localStorage.setItem("lastRefresh", Date.now());
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getEvents() {
  try {
    const db = getDatabase(app);
    const dbRef = ref(db, "events");



    if(localStorage.getItem("lastRefresh") === null){
      alert(localStorage.getItem("lastRefresh"))
      await updateEvents();
    }
    else {
      let time = new Date();
      if(time - localStorage.getItem("lastRefresh") > REFRESH_EXPIRATION_TIME){
        await updateEvents();
      }
    }


    get(dbRef)
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
export default getEvents;