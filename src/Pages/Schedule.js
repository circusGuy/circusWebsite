import getEvents from '../API';

export default function Schedule() { 
  getEvents();

  return (
      <div>
          <div id="events"></div>
      </div>
  );
}