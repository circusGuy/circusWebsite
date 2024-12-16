import getEvents from '../API';

import app from '../firebaseConfig';
import { getDatabase, ref, remove} from 'firebase/database';

async function removeAll(){
  const db = getDatabase(app);
  const dbref = ref(db, "events/events2");
  await remove(dbref);
}

export default function Schedule() {

  return (
      <div>
          {/* <button onClick={getEvents}>Click me</button> */}
          <div id="events"></div>
          <button onClick={()=>{removeAll()}}>Remove</button>
      </div>
  );
}

