import "../CSS/gallery.css";
import img1 from "../Images/gallery/hey.jpg";
import img2 from "../Images/gallery/hi.jpg";
import PageHeader from '../Components/pageHeader';

export default function Photos() {
  return (
    <div class="page photos">
        <PageHeader title='Gallery'/>
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
