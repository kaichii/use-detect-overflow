import { useDetectOverflow } from './';
import { renderHook } from '@testing-library/react-hooks';

// // mock timer using jest
jest.useFakeTimers();

describe('useMyHook', () => {
  it('updates every second', () => {
    renderHook(() => useDetectOverflow());
  });
});
