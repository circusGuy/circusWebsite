import homePic from "../Images/homePic2.png";
import "../CSS/home.css";

export default function Home() {
  return (
    <div class="page">
      <h1 class="titleText purp">Welcome to the Kingdom of Wonders</h1>

      <div class="subPage">
        <img src={homePic} alt="Kingdom Of Wonders Circus" class="homePic" />
      </div>
      <div class="subPage purp pad">
        <h1 class="titleText">A Place Where Dreams Come True</h1>
        <p class="homeDesc">
          The Queen is holding court and YOU are invited to come and enjoy the
          entertainment! Wonder at the talent in her kingdom including
          acrobatics, juggling, and comedy presented by her subjects. There may
          be a little trouble along the way with a pesky neighborhood dragon but
          with the help of a valiant knight and a brave audience, the generous
          and kind Queen shall rule again!
        </p>
        <a href="/schedule" target="_self" class="tixBtn">
          SEE THE SCHEDULE!!!
        </a>
      </div>
    </div>
  );
}
