import PhotoPopUp from "../components/PhotoPopUp";
import Terminal from "../components/Terminal"; // Adjusted import path to match the correct casing
import Image from "../images/cat1.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div style={{position: "relative", width: "100%", height: "90vh"}}>
        <Terminal height={50} width={70}/>
        <PhotoPopUp height={500} width={500} photo_path={Image.src} bottom_align={10} left_align={60} />
      </div>

    </main>
  );
}
