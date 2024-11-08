import Terminal from "../components/Terminal"; // Adjusted import path to match the correct casing

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="index-terminal-container">
        <Terminal height={100} width={100}/>    
      </div>
    </main>
  );
}
