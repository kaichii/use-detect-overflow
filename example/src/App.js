import React from 'react'

import { useMyHook } from 'use-detect-overflow'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
