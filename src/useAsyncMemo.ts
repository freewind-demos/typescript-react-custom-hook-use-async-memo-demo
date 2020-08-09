import {DependencyList, useEffect, useState} from "react";

export default function useAsyncMemo<T>(fn: () => Promise<T>, dependencies: DependencyList): T | undefined {
  const [value, setValue] = useState<T>()
  useEffect(() => {
    (async () => {
      const result = await fn()
      setValue(result);
    })();
  }, dependencies)
  return value;
};
