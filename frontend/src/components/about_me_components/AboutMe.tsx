import HorizontalTrack from "./HorizontalTrack";
import VerticleTrack from "./VerticleTrack";
import HorizontalToVerticleAnimation from "./HorizontalToVerticleAnimation";
import { useEffect, useState } from "react";
import HomePageButton from "./HomePageButton";
import PopUpWindows from "./PopUpWindows";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => {
  const [ImageIndex, setImageIndex] = useState(1);
  
  return (
    <div>
      <PopUpWindows />
      <HomePageButton />
      <VerticleTrack imageIndex={ImageIndex}/>
      <HorizontalTrack setImageIndex={setImageIndex}/>
      <HorizontalToVerticleAnimation imageIndex={ImageIndex}/>
    </div>
  );
}

export default AboutMe;

