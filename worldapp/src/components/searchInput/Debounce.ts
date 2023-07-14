import { useRef } from "react";

export function useDebounce(search: Function, delay: number) {
  let { current: timeout } = useRef<NodeJS.Timeout | null>(null);

  function debounced(...params: any) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      search(...params);
    }, delay);
  }

  return debounced;
}
