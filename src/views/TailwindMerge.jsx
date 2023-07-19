import { useState } from 'react';
import { clsx } from 'clsx';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

const TwMerge = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={twMerge(
      'rounded-full bg-red-100 text-red-900 hover:bg-red-500',
      className
    )}
    {...rest}
  >
    {children}
  </button>
);

const Clsx = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={clsx(
      'rounded-full rounded-md bg-red-100 text-red-900 hover:bg-red-500',
      className
    )}
    {...rest}
  >
    {children}
  </button>
);

const Classnames = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={cn(
      'rounded-full rounded-md bg-red-100 text-red-900 hover:bg-red-500',
      className
    )}
    {...rest}
  >
    {children}
  </button>
);

export default function TailwindMerge() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-2xl text-center my-3">
        Difference between tailwind-merge, clsx, and classnames
      </h1>

      <TwMerge
        className={twMerge(
          'rounded-lg p-10 bg-green-200 text-white hover:bg-green-500',
          count > 3 && 'text-2xl text-black'
        )}
        onClick={() => setCount((count) => count + 1)}
      >
        TwMerge: {count}
      </TwMerge>

      <Clsx
        className={clsx(
          'rounded-lg p-10 bg-green-200 text-white hover:bg-green-500',
          count > 3 && 'text-2xl text-black'
        )}
        onClick={() => setCount((count) => count + 1)}
      >
        Clsx: {count}
      </Clsx>

      <Classnames
        className={cn(
          'rounded-lg p-10 bg-green-200 text-white hover:bg-green-500',
          count > 3 && 'text-2xl text-black'
        )}
        onClick={() => setCount((count) => count + 1)}
      >
        Classnames: {count}
      </Classnames>
    </div>
  );
}
