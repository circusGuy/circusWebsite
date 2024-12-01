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
import app from './firebaseConfig';
import { getDatabase, ref, set, push } from 'firebase/database';


async function getEvents() {
  const id = "2404201774443";
  const url = `https://www.eventbriteapi.com/v3/organizations/${id}/events/?time_filter=all`;
  const token = "NEMSZJPVJRTZ2W7LCY2F";
  // const url = `https://www.eventbriteapi.com/v3/users/me/?token=${token}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let res = response.data;

  
    console.log(res);
    let events = res.events;
    
    let eventsDis = events.map(
      (m) =>{
        const saveData = async () => {
          const db = getDatabase(app);
          console.log(m)
          const newEvent = push(ref(db, "events/events2"));
          set(newEvent, {
            name: m.name.text,
            url: m.url,
            capacity: m.capacity,

          }).then( () => { 
            alert("Data Save Successfully") 
          }).catch((error) => {
            alert("error:", error.message);
          })
        }
        saveData();
        return `<li><ul><li>Name:${m.name.text}</li><li>url: ${m.url}</li><li>Capacity: ${m.capacity}</li><li><a href="/checkout">Buy Tickets</a></li></li></ul></li>`;
      }

    );
   document.querySelector("#events").innerHTML = `<ul>${eventsDis}</ul>`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
export default getEvents;





 

 


  

