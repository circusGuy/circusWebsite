import "../CSS/gallery.css";
import img1 from "../Images/gallery/hey.jpg";
import img2 from "../Images/gallery/hi.jpg";

export default function Photos() {
  return (
    <div class="page photos">
        <h1 class="title">Gallery</h1>
        <img src={img1} alt="circus"></img>
        <img src={img2} alt="circus"></img>
        <img src={img1} alt="circus"></img>
        <img src={img2} alt="circus"></img>
        <img src={img1} alt="circus"></img>
        <img src={img2} alt="circus"></img>
        <img src={img1} alt="circus"></img>
        <img src={img2} alt="circus"></img>
    </div>
  );
}
