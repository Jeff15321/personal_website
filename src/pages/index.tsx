import Terminal from "../components/Terminal"; // Adjusted import path to match the correct casing
import BentoPage from "../components/BentoPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <BentoPage/>
    </main>
  );
}
