import "../CSS/concessions.css";
import cc from "../Images/concessions/cc.png";
import hotDog from "../Images/concessions/hotDog.png";
import nachos from "../Images/concessions/nachos.png";
import soda from "../Images/concessions/soda.png";
import apple from "../Images/concessions/apple.png";
import waffle from "../Images/concessions/waffle.png";

export default function Concessions() {
  return (
    <div className="page p-4 concs">
      <h1 class="titleText purp">Concessions</h1>
      <div class='subPage3'>
      <div class="foodDesc">
        <h1 class="titleText">Food/Drink</h1>
        <div class="desc">
          A variety of snacks and drinks are available for purchase before and
          during the show. Options include: Candy Apples, Waffles, Nachos, Hot
          Dogs, Popcorn, Cotton Candy, Sno-kones, Soda, Water, and more!{" "}
          <br></br>
          <br></br>
        </div>
      </div>

      <div class="stock-ticker">
        <ul>
          <li>
            <img src={cc} alt="Placeholder" />
          </li>
          <li>
            <img src={hotDog} alt="Placeholder" />
          </li>
          <li>
            <img src={nachos} alt="Placeholder" />
          </li>
          <li>
            <img src={soda} alt="Placeholder" />
          </li>
          <li>
            <img src={apple} alt="Placeholder" />
          </li>
          <li>
            <img src={waffle} alt="Placeholder" />
          </li>
        </ul>

        <ul aria-hidden="true">
          <li>
            <img src={cc} alt="Placeholder" />
          </li>
          <li>
            <img src={hotDog} alt="Placeholder" />
          </li>
          <li>
            <img src={nachos} alt="Placeholder" />
          </li>
          <li>
            <img src={soda} alt="Placeholder" />
          </li>
          <li>
            <img src={apple} alt="Placeholder" />
          </li>
          <li>
            <img src={waffle} alt="Placeholder" />
          </li>
        </ul>
      </div>
      <div class="foodDesc">
        <h1 class="titleText">Merchandise</h1>
        <div class="desc">
          A variety of toys and keepsakes are available for purchase before and
          during the show.
          <br></br>
          <br></br>
        </div>
      </div>
      <div class="stock-ticker">
        <ul>
          <li>
            <img src={cc} alt="Placeholder" />
          </li>
          <li>
            <img src={hotDog} alt="Placeholder" />
          </li>
          <li>
            <img src={nachos} alt="Placeholder" />
          </li>
          <li>
            <img src={soda} alt="Placeholder" />
          </li>
          <li>
            <img src={apple} alt="Placeholder" />
          </li>
          <li>
            <img src={waffle} alt="Placeholder" />
          </li>
        </ul>

        <ul aria-hidden="true">
          <li>
            <img src={cc} alt="Placeholder" />
          </li>
          <li>
            <img src={hotDog} alt="Placeholder" />
          </li>
          <li>
            <img src={nachos} alt="Placeholder" />
          </li>
          <li>
            <img src={soda} alt="Placeholder" />
          </li>
          <li>
            <img src={apple} alt="Placeholder" />
          </li>
          <li>
            <img src={waffle} alt="Placeholder" />
          </li>
        </ul>
      </div>
      <div class="disclaimer">
        <em> Cash and Credit are accepted on site.</em>
      </div>

      <a href="/schedule" target="_self" class="tixBtn w-1/4 text-center">
        SEE THE SCHEDULE!!!
      </a>
    </div>
    </div>
  );
}
