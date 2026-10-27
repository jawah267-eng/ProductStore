import React, { useCallback, useMemo } from 'react'
import { callbackify } from 'util';

export const CompMemo = React.memo(({name}) => {
    const count=0;
    const tryMemo = useMemo(()=>count+2 ,[name])
    const getData= useCallback((name )=>{});
  return (
    <div>
      {name}
    </div>
  )
})


