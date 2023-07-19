import { useLayoutEffect, useRef } from 'react';
import Hello from './Hello.svelte';
import Counter from './Counter.svelte';

function SvelteWrapper(Component) {
  return (props) => {
    const svelteRef = useRef();

    useLayoutEffect(() => {
      // because react strict mode
      while (svelteRef.current?.firstChild) {
        svelteRef.current.firstChild.remove();
      }

      new Component({
        target: svelteRef.current,
        props,
      });
    }, []);

    return <div ref={svelteRef}></div>;
  };
}

export const SvelteHello = SvelteWrapper(Hello);
export const SvelteCounter = SvelteWrapper(Counter);
