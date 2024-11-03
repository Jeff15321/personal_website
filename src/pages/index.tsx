import Terminal from "../components/terminal"; // Adjusted import path to match casing

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Terminal Emulator</h1>
      <Terminal />
    </main>
  );
}
