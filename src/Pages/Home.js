import homePic from "../Images/homePic2.png";
import homePic2 from "../Images/homePic3.png";

import "../CSS/home.css";

export default function Home() {
  return (
    <div class="page">
      <div class="subPage3">
      <h1 class="titleText purp">Welcome to the Kingdom of Wonders Circus</h1>

        <img src={homePic} alt="Kingdom Of Wonders Circus" class="homePic" />
        <img src={homePic2} alt="Kingdom Of Wonders Circus" class="homePic2" />
        <div class="pad">
          <p class="homeDesc">
          <h1 class="titleText">A Place Where Dreams Come True</h1>
            The Queen is holding court and YOU are invited to come and enjoy the
            entertainment! Wonder at the talent in her kingdom including
            acrobatics, juggling, and comedy presented by her subjects. There
            may be a little trouble along the way with the pesky neighborhood
            witch and her pet dragon, but with the help of a valiant knight and a brave audience,
            the generous and kind Queen shall rule again!
          </p>
        </div>
        <a href="/schedule" target="_self" class="tixBtn">
            SEE THE SCHEDULE!!!
          </a>
      </div>
    </div>
  );
}