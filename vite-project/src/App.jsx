<<<<<<< HEAD


import { usestate } from 'react'
import reactlogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './app.css'

// function app() {
//   const [count, setcount] = usestate(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={vitelogo} classname="logo" alt="vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactlogo} classname="logo react" alt="react logo" />
//         </a>
//       </div>
//       <h1>vite + react</h1>
//       <div classname="card">
//         <button onclick={() => setcount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           edit <code>src/app.jsx</code> and save to test hmr
//         </p>
//       </div>
//       <p classname="read-the-docs">
//         click on the vite and react logos to learn more
//       </p>
//     </>
//   )
// }

// export default app




=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> c0bbc7da6f3e82aba72b5858807583646575447d
