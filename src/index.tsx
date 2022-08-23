import { useState, useRef, useEffect, useMemo } from 'react';
import { ResizeObserver, ResizeObserverEntry } from '@juggle/resize-observer';
import createDebounce from 'debounce';

type HTMLOrSVGElement = HTMLElement | SVGElement;

export type State = {
  element: HTMLOrSVGElement | null;
  resizeObserver: ResizeObserver | null;
};

export type Options = {
  debounce: number;
};

export function useDetectOverflow({ debounce }: Options = { debounce: 17 }) {
  const state = useRef<State>({ element: null, resizeObserver: null });
  const [overflowX, setOverflowX] = useState(false);
  const [overflowY, setOverflowY] = useState(false);

  const resizeDebounce = debounce || null;

  const ref = (node: HTMLOrSVGElement | null) => {
    if (!node || state.current.element === node) return;

    state.current.element = node;
  };

  const handleResize = useMemo(() => {
    const callback = (entries: ResizeObserverEntry[]) => {
      const node = entries[0];

      const isXOverflowing = node.target.scrollWidth > node.target.clientWidth;
      const isYOverflowing =
        node.target.scrollHeight > node.target.clientHeight;
      setOverflowX(isXOverflowing);
      setOverflowY(isYOverflowing);
    };

    return resizeDebounce ? createDebounce(callback, resizeDebounce) : callback;
  }, [debounce]);

  function removeListeners() {
    if (state.current.resizeObserver) {
      state.current.resizeObserver.disconnect();
      state.current.resizeObserver = null;
    }
  }

  function addListeners() {
    if (!state.current.element) return;
    state.current.resizeObserver = new ResizeObserver(handleResize);
    state.current.resizeObserver.observe(state.current.element);
  }

  useEffect(() => {
    addListeners();

    return () => removeListeners();
  }, [state.current.element]);

  return [ref, { overflowX, overflowY }] as const;
}
