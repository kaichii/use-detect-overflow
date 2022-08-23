import React from 'react';

import { useDetectOverflow } from 'use-detect-overflow';

const App = () => {
  const [ref, { overflowX, overflowY }] = useDetectOverflow({ debounce: 200 });

  return (
    <div className='app'>
      <p className=''>
        OverflowX: <b>{String(overflowX)}</b> <br />
        OverflowY:
        <b>{String(overflowY)}</b>
      </p>

      <div className='container' ref={ref}>
        Lorem consectetur eu officia ut esse veniam exercitation Lorem do id
        dolore in. Ut ut adipisicing aliqua adipisicing. Sint dolore ipsum duis
        et. Ex fugiat non esse mollit irure ut velit eiusmod duis anim. Proident
        dolore ex fugiat magna consequat in nisi mollit voluptate laborum velit
        eiusmod ut. Ullamco velit reprehenderit ut proident dolore. Irure
        occaecat non laboris non ad non ex deserunt laboris aute eiusmod
        cupidatat nulla velit. Minim dolor cupidatat ea officia laborum ipsum
        consectetur anim id. Ipsum occaecat voluptate culpa cupidatat sunt
        incididunt eu cupidatat mollit labore occaecat non. Exercitation ea
        fugiat sint do dolor esse nisi officia. Excepteur nisi tempor commodo
      </div>
      <span>Resize me!</span>
    </div>
  );
};

export default App;
