import { VueHello } from '../components/VueWrapper';
import { useCounterStore } from '../stores/counter.store';

export default function VueInReact() {
  const { count, increment } = useCounterStore();

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-2xl text-center my-3">Vue ian React</h1>

      <button className="p-5 bg-orange-100 text-orange-900" onClick={increment}>
        {count}
      </button>

      <VueHello text="Props dari react" handleClick={increment} />
      {/* <SvelteCounter /> */}
    </div>
  );
}
