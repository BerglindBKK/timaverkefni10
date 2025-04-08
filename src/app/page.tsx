"use client";

import { useState } from "react";

type CounterProps = {
  count: number;
  onClickPlus: () => void;
  onClickMinus: () => void;
};

const Counter = ({ count, onClickPlus, onClickMinus }: CounterProps) => {
  return (
    <div className={'p-4 w-min justify-items-center'}>
      <p className={` text-4xl font-bold px-8 ${count > 35 || count < -35 ? 'text-red-600' : 'text-black'}`}>{count}</p>
      <div className="flex">
        <button type="button" onClick={onClickPlus} className={'bg-green-700 text-white font-bold text-lg px-2 rounded-md m-1'}>
          +
        </button>

        <button type="button" onClick={onClickMinus} className={'bg-red-700 text-white font-bold text-lg px-2.5 rounded-md m-1'}>
          -
        </button>
      </div>
      <div className="bg-purple-500 text-white text-2xl">
        {count > 35 || count < -35 ? (
          <div className="bg-purple-500 text-white text-2xl">
            BOOM
          </div>
        ) : null}
      </div>
    </div>
  );
};

const CounterParent = () => {
  //triggere state breytingu til að talan breytist/ render
  const [state, setState] = useState(0);

  const onClickPlus = () => {
    setState((s) => s + 5);
  };

  const onClickMinus = () => {
    setState((s) => s - 5);
  };

  return (
    <div>
      <Counter count={state} onClickPlus={onClickPlus} onClickMinus={onClickMinus} />
    </div>
  );
};

export default CounterParent;