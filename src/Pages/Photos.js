import "../CSS/gallery.css";

const importAllImages = (r) => r.keys().map(r);
const images = importAllImages(
  require.context("../Images/gallery", false, /\.(jpg|jpeg|png)$/)
);

export default function Photos() {
  return (
    <div class="page concs">
      <h1 class='title'>Gallery</h1>
      <div class="gallery mb-10">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`gallery-item-${index}`} />
        ))}
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
