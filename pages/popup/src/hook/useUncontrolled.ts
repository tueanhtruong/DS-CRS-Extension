/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

type UseUncontrolledInput<T> = {
  /** Initial value for uncontrolled state */
  defaultValue?: T;

  /** Final value for uncontrolled state when value and defaultValue are not provided */
  finalValue?: T;

  /** Controlled state onChange handler */
  onChange?: (value: T, ...payload: any[]) => void;

  /** Value for controlled state */
  value?: T;
};

export function useUncontrolled<T>({
  value,
  defaultValue,
  finalValue,
  onChange = () => null,
}: UseUncontrolledInput<T>): [T, (value: T, ...payload: any[]) => void, boolean] {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue !== undefined ? defaultValue : finalValue,
  );

  const handleUncontrolledChange = (val: T, ...payload: any[]) => {
    setUncontrolledValue(val);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    onChange(val, ...payload);
  };

  const handleControlledChange = (val: T, ...payload: any[]) => {
    if (val === undefined) {
      setUncontrolledValue(val);
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    onChange(val, ...payload);
  };

  if (value !== undefined) {
    return [value as T, handleControlledChange, true];
  }

  return [uncontrolledValue as T, handleUncontrolledChange, false];
}
