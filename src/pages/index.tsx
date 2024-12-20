import AboutMe from "../components/about_me_components/AboutMe";
import PopUpWindows from "../components/about_me_components/PopUpWindows";
import BentoPage from "../components/BentoPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <BentoPage projectName="Time_Table_Sweetie"/>
      <AboutMe/>
    </main>
  );
}
