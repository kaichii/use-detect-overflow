import React from 'react';

import { useDetectOverflow } from 'use-detect-overflow';

const App = () => {
  const [ref, { overflowX, overflowY }] = useDetectOverflow();

  console.log(overflowX, overflowY);

  return (
    <div ref={ref} style={{ height: 200 }}>
      Consectetur exercitation magna occaecat mollit adipisicing minim do irure
      laboris nostrud. Eu adipisicing do do exercitation eiusmod cupidatat
      officia occaecat sit Lorem aute enim ipsum laborum. Qui commodo cupidatat
      et voluptate in sit ut exercitation commodo sint. Enim amet pariatur irure
      ad magna quis labore veniam veniam officia. Aliquip ut occaecat non Lorem.
      Laboris eu magna duis nostrud incididunt irure. Incididunt ad enim commodo
      culpa. Adipisicing tempor et irure dolore Lorem magna ut cupidatat veniam.
      Ut quis amet aliqua non velit eiusmod ullamco elit ex pariatur laborum.
      Ullamco non ullamco aliquip voluptate Lorem elit incididunt non nostrud
      aliquip. Mollit id commodo amet ut minim pariatur consequat ut eiusmod do
      enim ut. Nostrud consectetur aute cupidatat est consequat. Sint duis quis
      deserunt cupidatat dolore exercitation ullamco. Ad qui quis laboris in
      qui. Dolor dolor aliquip qui aute non ea aliquip anim enim magna. Id sint
      voluptate elit voluptate consequat. Dolore exercitation esse consequat
      nulla et mollit labore nostrud. Ipsum adipisicing voluptate incididunt
      nulla id eiusmod. Eu velit cillum in est quis aliquip nostrud ea mollit
      culpa. Cillum dolor sit exercitation nisi deserunt. Cillum amet nostrud
      esse quis aute anim ad labore in aute. Adipisicing do sunt qui pariatur ex
      enim commodo elit consequat amet mollit cillum culpa. Nostrud amet Lorem
      non elit occaecat cillum quis. Exercitation reprehenderit culpa sint
      laborum do elit. Dolore laborum nulla exercitation laborum.
    </div>
  );
};
export default App;
