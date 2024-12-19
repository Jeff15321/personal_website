import HorizontalTrack from "../components/about_me_components/HorizontalTrack";
import VerticleTrack from "../components/about_me_components/VerticleTrack";
import HorizontalToVerticleAnimation from "../components/about_me_components/HorizontalToVerticleAnimation";
import { useEffect, useState } from "react";

export default function Home() {
  const [ImageIndex, setImageIndex] = useState(1)
  useEffect(() => {
    const verticleTrack = document.getElementById("verticle-image-track");
    if (verticleTrack) {
        verticleTrack.style.opacity = "0";
    }

    const horizontalTrack = document.getElementById("horizontal-image-track");
    if (horizontalTrack) {
        // horizontalTrack.style.display = "none";
    }

    // const horizontalToVerticleAnimation = document.getElementById("horizontal-to-verticle-image-track-animation");
    // if (horizontalToVerticleAnimation) {
    //     horizontalToVerticleAnimation.style.opacity = "0";
    // }
  }, []);
  
  return (
    <div>
      <VerticleTrack imageIndex={ImageIndex}/>
      <HorizontalTrack setImageIndex={setImageIndex}/>
      <HorizontalToVerticleAnimation />
    </div>
  );
}

