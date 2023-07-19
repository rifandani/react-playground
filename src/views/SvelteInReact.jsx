import { SvelteHello } from '../components/SvelteWrapper';
import { SvelteCounter } from '../components/SvelteWrapper';
import { useCounterStore } from '../stores/counter.store';

export default function SvelteInReact() {
  const { count, increment } = useCounterStore();

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-2xl text-center my-3">Svelte in React</h1>

      <button className="p-5 bg-orange-100 text-orange-900" onClick={increment}>
        {count}
      </button>

      <SvelteHello text="Props dari react" handleClick={increment} />
      <SvelteCounter />
    </div>
  );
}
