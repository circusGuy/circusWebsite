import "../CSS/concessions.css";
import apple from "../Images/concessions/apple.png";
import waffle from "../Images/concessions/waffle.png";
import hotDog from "../Images/concessions/hotDog.png";
import nachos from "../Images/concessions/nachos.png";
import popcorn from "../Images/concessions/popcorn.png";
import cc from "../Images/concessions/cc.png";

export default function Concessions() {
  return (
    <div className="page p-4 concs">
      <h1 class="titleText purp">Concessions</h1>

      <div className="foodGallery">
        <img src={apple} alt="Candy Apple" />
        <img src={waffle} alt="Waffle" />
        <img src={nachos} alt="Nachos" />
        <img src={hotDog} alt="Hot Dog" />
        <img src={popcorn} alt="Popcorn" />
        <img src={cc} alt="Cotton Candy" />
      </div>
      <p class="foodDesc">
        <h1 class="titleFood">Food/Drink</h1>A variety of snacks and drinks are
        available for purchase before and during the show. Options include:
        Candy Apples, Waffles, Nachos, Hot Dogs, Popcorn, Cotton Candy,
        Sno-kones, Soda, Water, and more! <br></br>
        <br></br>
        <em> Cash and Credit accepted on site.</em>
      </p>
      <div className="foodGallery">
          <img src={apple} alt="Candy Apple" />
          <img src={waffle} alt="Waffle" />
          <img src={nachos} alt="Nachos" />
          <img src={hotDog} alt="Hot Dog" />
          <img src={popcorn} alt="Popcorn" />
          <img src={cc} alt="Cotton Candy" />
        </div>
      <p class="foodDesc">
        <h1 class="titleFood">Merchandise</h1>A variety of toys and keepsakes
        are available for purchase before and during the show.<br></br>
        <br></br>
        <em> Cash and Credit accepted on site.</em>
      </p>

      <a href="/schedule" target="_self" class="tixBtn w-1/4 text-center">
        SEE THE SCHEDULE!!!
      </a>
    </div>
  );
}
