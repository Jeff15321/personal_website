import AboutMe from "../components/about_me_components/AboutMe";
import { useState } from "react";

export default function Home() {
  const [ImageIndex, setImageIndex] = useState(1)
  
  return (
    <AboutMe />
  );
}

