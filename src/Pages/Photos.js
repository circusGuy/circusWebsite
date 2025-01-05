import "../CSS/gallery.css";
import img1 from "../Images/gallery/hey.jpg";
import img2 from "../Images/gallery/hi.jpg";
import PageHeader from '../Components/pageHeader';

export default function Photos() {
  return (
    <div class="page concs">
        <PageHeader title='Gallery'/>
        <div class='photos mb-10'>
        <img src={img1} alt="circus"></img>
        <img src={img2} alt="circus"></img>
        <img src={img1} alt="circus"></img>
        <img src={img2} alt="circus"></img>
        <img src={img1} alt="circus"></img>
        <img src={img2} alt="circus"></img>
        <img src={img1} alt="circus"></img>
        <img src={img2} alt="circus"></img>
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
