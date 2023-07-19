import SvelteInReact from './views/SvelteInReact';
import TailwindMerge from './views/TailwindMerge';
import VueInReact from './views/VueInReact';

function App() {
  return (
    <main className="flex flex-col space-y-5">
      <TailwindMerge />

      <hr className="w-full" />

      <SvelteInReact />
      <VueInReact />
    </main>
  );
}

export default App;
