import "../CSS/gallery.css";
import img1 from "../Images/gallery/g1.jpg";
import img2 from "../Images/gallery/g2.jpg";
import img3 from "../Images/gallery/g3.jpg";
import img4 from "../Images/gallery/g4.jpg";
import img5 from "../Images/gallery/g5.jpg";
import img6 from "../Images/gallery/g6.jpg";
import img7 from "../Images/gallery/g7.jpg";
import img8 from "../Images/gallery/g8.jpg";

import PageHeader from "../Components/pageHeader";

export default function Photos() {
  return (
    <div class="page concs">
      <PageHeader title="Gallery" />
      <div class="gallery mb-10">
        <img src={img1} alt="circus"></img>
        <img src={img2} alt="circus"></img>
        <img src={img3} alt="circus"></img>
        <img src={img4} alt="circus"></img>
        <img src={img5} alt="circus"></img>
        <img src={img6} alt="circus"></img>
        <img src={img7} alt="circus"></img>
        <img src={img8} alt="circus"></img>
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
