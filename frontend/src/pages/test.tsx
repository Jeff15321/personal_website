import React, { useEffect, useState } from "react";

import PopUpWindows from "../components/about_me_components/PopUpWindows";
import HomePageButton from "../components/about_me_components/HomePageButton";
import VerticleTrack from "../components/about_me_components/VerticleTrack";
import HorizontalTrack from "../components/about_me_components/HorizontalTrack";
import HorizontalToVerticleAnimation from "../components/about_me_components/HorizontalToVerticleAnimation";
import AboutMe from "../components/about_me_components/AboutMe";

export default function Test() {
    const [ImageIndex, setImageIndex] = useState(1);
    return (
        <>
         <AboutMe/>
        </>
    )};