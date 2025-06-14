import { Home } from "@/components/Home";
import { Header } from "@/components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <Home />
      </div>
    </div>
  );
}

export default App;
