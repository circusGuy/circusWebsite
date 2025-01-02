import homePic from "../Images/homePic.png";
import "../CSS/home.css";

export default function Home() {
  return (
    <div class="page">
      <div class="subPage mb-5">
        <img src={homePic} alt="Kingdom Of Wonders Circus" class="homePic" />
      </div>
      <div class="subPage purp pad">
        <h1 class="homeTitle">A Place Where Dreams Come True</h1>
        <p class="homeDesc mb-7">
          The Queen is holding court and YOU are invited to come and enjoy the
          entertainment! Wonder at the talent in her kingdom including
          acrobatics, juggling, and comedy presented by her subjects. There may
          be a little trouble along the way with a pesky neighborhood dragon but
          with the help of a valiant knight and a brave audience, the generous
          and kind Queen shall rule again!
        </p>
        <a href="https://purchase-tickets-forthe-kingdom-of-wonders.square.site/" target="_self" class="tixBtn" >
          GET TICKETS!!!
        </a>
      </div>
    </div>
  );
}
