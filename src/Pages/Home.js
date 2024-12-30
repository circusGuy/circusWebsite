import homePic from "../Images/homePic.png";
import "../CSS/home.css";

export default function Home() {
  return (
    <div class="page">
      <div class="subPage purp mb-5">
        <img src={homePic} alt="Kingdom Of Wonders Circus" class="homePic" />
      </div>
      <div class="subPage purp pad">
        <h1 class='homeTitle'>A Place Where Dreams Come True</h1>
        <p class='homeDesc mb-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          tincidunt odio. Sed a sapien aliquam, lobortis arcu ac, cursus risus.
          Fusce eros tortor, euismod ac dui a, imperdiet malesuada lorem. Nunc
          eget scelerisque diam, vel mattis orci. Duis sit amet ex ac ante
          facilisis luctus. Nunc et viverra libero. Aliquam a lacus ligula.
          Morbi fermentum dignissim ante, at sodales ex pharetra tempor. Mauris
          et vehicula nisi. Vivamus cursus est orci. Integer pellentesque urna
          id turpis sollicitudin, feugiat varius nibh egestas. Suspendisse
          gravida mauris vitae efficitur luctus. Nullam orci turpis, tempus
          scelerisque tempor aliquet, varius non enim. Nam eros justo, pulvinar.
        </p>
        <a href='/schedule' class='tixBtn'>GET TICKETS!!!</a>
      </div>
    </div>
  );
}
