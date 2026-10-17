"use client";

import { useId } from "react";

/** Numeric input with a visible label and unit; accepts Spanish decimal commas. */
export function NumberField({
  label,
  value,
  onChange,
  unit,
  min = 0,
  max,
  step = 1,
  hint,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  hint?: string;
}) {
  const id = useId();
  const hintId = `${id}-hint`;
  return (
    <div>
      <label htmlFor={id} className="block font-semibold">
        {label}
      </label>
      {hint ? (
        <p id={hintId} className="text-small text-muted">
          {hint}
        </p>
      ) : null}
      <div className="mt-2 flex h-12 items-center rounded-md border-[1.5px] border-line-strong bg-surface focus-within:border-accent">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={Number.isFinite(value) ? value : ""}
          aria-describedby={hint ? hintId : undefined}
          onChange={(e) => {
            const parsed = Number.parseFloat(e.target.value.replace(",", "."));
            onChange(Number.isFinite(parsed) ? parsed : 0);
          }}
          className="tabular h-full min-w-0 flex-1 rounded-md bg-transparent px-4 font-mono text-[1.125rem] outline-none"
        />
        {unit ? <span className="pr-4 font-mono text-muted">{unit}</span> : null}
      </div>
    </div>
  );
}

/** Range slider with label and current value shown in monospace. */
export function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  format,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  format: (value: number) => string;
}) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        <output htmlFor={id} className="tabular font-mono text-[1.125rem]">
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={format(value)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider mt-3 h-11 w-full cursor-pointer"
        style={{ "--fill": `${pct}%` } as React.CSSProperties}
      />
    </div>
  );
}
