import { useState } from "react";

function Slider({ label, min, max, step, value, setValue }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 font-semibold">{label}: {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full cursor-pointer accent-blue-500"
      />
    </div>
  );
}

export default Slider;
