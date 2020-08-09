//import * as React from 'react'
import React, {useEffect, useState} from 'react'
import useAsyncMemo from "./useAsyncMemo";

async function fetchData(): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Date.now())
    }, 1000)
  })
}

export default function Hello() {
  const [version, setVersion] = useState(0);

  const remoteData = useAsyncMemo(fetchData, [version]);

  return <div>
    <h1>Hello React</h1>
    <div>
      <button onClick={() => setVersion(n => n + 1)}>{remoteData}</button>
    </div>
  </div>
};
