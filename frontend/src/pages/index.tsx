import AboutMe from "../components/about_me_components/AboutMe";
import PopUpWindows from "../components/about_me_components/PopUpWindows";
import BentoPage from "../components/BentoPage";
import Announcement from "../components/Announcement";
import MobileChecker from "../components/MobileChecker";
export default function Home() {
  return (
    <>
      <MobileChecker/>
      <Announcement/>
      <AboutMe/>
      <BentoPage projectName="Time_Table_Sweetie"/>
    </>
  );
}
