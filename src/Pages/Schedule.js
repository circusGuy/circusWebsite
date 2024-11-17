import getEvents from '../API';

export default function Schedule() {
  return (
      <div>
          <button onClick={getEvents}>Click me</button>
          <div id="events"></div>
      </div>
  );
}

