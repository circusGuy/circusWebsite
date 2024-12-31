import "../CSS/concessions.css";
import PageHeader from "../Components/pageHeader";
import img1 from "../Images/gallery/hey.jpg";
import img2 from '../Images/gallery/hi.jpg';

function foodCard(item, picture, price) {
  return (
    <div className="foodCard">
      <img src={picture} alt={item} className='concession' />
      <h3>{item}</h3>
      <h3>{price}</h3>
    </div>
  );
}

export default function Concessions() {
  return (
    <div className="page p-4">     
      <PageHeader title="Concessions" />
      <h1 class='subHeader'>Food/Drink</h1>
      <div className="foodItems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {foodCard("Taco", img1, "$12.00")}
        {foodCard("Burger", img1, "$15.00")}
        {foodCard("Pizza", img1, "$10.00")}
        {foodCard("Salad", img1, "$8.00")}
      </div>
      <h1 class='subHeader'>Merchandise</h1>
      <div className="foodItems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {foodCard("Taco", img2, "$12.00")}
        {foodCard("Burger", img2, "$15.00")}
        {foodCard("Pizza", img2, "$10.00")}
        {foodCard("Salad", img2, "$8.00")}
      </div>
    </div>
  );
}
