import { useState, useRef, useEffect } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';

type HTMLOrSVGElement = HTMLElement | SVGElement;

export type State = {
  element: HTMLOrSVGElement | null;
  resizeObserver: ResizeObserver | null;
};

export function useDetectOverflow() {
  const state = useRef<State>({ element: null, resizeObserver: null });
  const [overflowX] = useState(false);
  const [overflowY] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => void (mounted.current = false);
  });

  const ref = (node: HTMLOrSVGElement | null) => {
    if (!node || state.current.element === node) return;

    state.current.element = node;
  };

  const handleResize = (
    entries: ResizeObserverEntry[],
    observer: ResizeObserver
  ) => {
    console.log('resize', entries);
  };

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
    if (!mounted) return;

    addListeners();

    return () => removeListeners();
  }, [state.current.element]);

  return [ref, { overflowX, overflowY }] as const;
}
