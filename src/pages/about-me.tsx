import HorizontalTrack from "../components/about_me_components/HorizontalTrack";
import VerticleTrack from "../components/about_me_components/VerticleTrack";
import HorizontalToVerticleAnimation from "../components/about_me_components/HorizontalToVerticleAnimation";
import { useEffect, useState } from "react";
import HomePageButton from "../components/about_me_components/HomePageButton";
import PopUpWindows from "../components/about_me_components/PopUpWindows";

export default function Home() {
  const [ImageIndex, setImageIndex] = useState(1)
  
  return (
    <div>
      <PopUpWindows />
      <HomePageButton />
      <VerticleTrack imageIndex={ImageIndex}/>
      <HorizontalTrack setImageIndex={setImageIndex}/>
      <HorizontalToVerticleAnimation />
    </div>
  );
}

