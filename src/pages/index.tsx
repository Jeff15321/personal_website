import Terminal from "../components/Terminal"; // Adjusted import path to match the correct casing

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div style={{position: "relative", width: "100%", height: "90vh"}}>
        <Terminal height={50} width={70}/>
      </div>
    </main>
  );
}
