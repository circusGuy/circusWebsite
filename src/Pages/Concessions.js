import "../CSS/concessions.css";
import apple from "../Images/concessions/apple.png";
import waffle from "../Images/concessions/waffle.png";
import hotDog from "../Images/concessions/hotDog.png";
import nachos from "../Images/concessions/nachos.png";
import popcorn from "../Images/concessions/popcorn.png";
import cc from "../Images/concessions/cc.png";
import sno from "../Images/concessions/snoKone.png";
import soda from "../Images/concessions/soda.png";

function foodCard(item, picture, price) {
  return (
    <div className="foodCard">
      <img
        src={picture}
        alt={item}
        className="concession mb-1"
        height="200px"
      />
      <h3>{item}</h3>
      <h3>{price}</h3>
    </div>
  );
}

export default function Concessions() {
  return (
    <div className="page p-4 concs">
      <h1 class="title">Concessions</h1>
      <div class="rowFood">
        <h1 class="subHeader">Food/Drink</h1>
        <div className="foodItems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foodCard("Candy Apple", apple, "$12.00")}
          {foodCard("Waffle", waffle, "$15.00")}
          {foodCard("Nachos", nachos, "$10.00")}
          {foodCard("Hot Dog", hotDog, "$8.00")}
          {foodCard("Popcorn", popcorn, "$8.00")}
          {foodCard("Cotton Candy", cc, "$8.00")}
          {foodCard("Sno-Kone", sno, "$8.00")}
          {foodCard("Soda/Water", soda, "$3.00/$2.00")}
        </div>
      </div>
      <div class="rowFood">
        <h1 class="subHeader">Merchandise</h1>
        <div className="foodItems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {foodCard("Taco", soda, "$12.00")}
          {foodCard("Burger", soda, "$15.00")}
          {foodCard("Pizza", soda, "$10.00")}
          {foodCard("Salad", soda, "$8.00")}
        </div>
      </div>
      {/* <a href="https://purchase-tickets-forthe-kingdom-of-wonders.square.site/" target="_self" class="tixBtn w-1/4 text-center" > */}
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_self"
        class="tixBtn w-1/4 text-center"
      >
          GET TICKETS!!!
        </a>
    </div>
  );
}
