import './App.css';
// import Transition from './Transition';
// import React, { useEffect, useReducer } from 'react'
// import Calculate from './Calculate';
// export const NumberContext = React.createContext()
// import { useState, useEffect, useRef } from 'react'



// const initialValue = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialValue;
//     default:
//       return state
//   }
// }



// function App() {
//   // const [count, dispatch] = useReducer(reducer, initialValue)

//   // useEffect(() => {

//   // }, [count])
//   // return (
//   //   <div className="App">
//   //     <NumberContext.Provider value={{ count: count, dispatch: dispatch }}>
//   //       <Calculate />
//   //     </NumberContext.Provider>
//   //   </div>
//   // );
//   // const [name, setName] = useState('')
//   // // const [renderCount, setRenderCount] = useState(0)
//   // const renderCount = useRef(0)
//   // // { current: 0 }
//   // const inputRef = useRef()

//   // useEffect(() => {
//   //   // setRenderCount((prev) => prev + 1)
//   //   renderCount.current = renderCount.current + 1
//   // })
//   // const focusInput = () => {
//   //   inputRef.current.focus()
//   //   inputRef.current.value = "Reso"
//   // }
//   return (

//     <div className='App'>
//       {/* <input
//         ref={inputRef}
//         type='text'
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <div>Benim adım {name}</div>
//       <div>{renderCount.current} defa render oldu</div>
//       <button onClick={focusInput}>Focus</button> */}
//       {/* <Transition /> */}
//       {/* CUSTOM HOOK */}

//     </div>
//   )
// }

import React from 'react'
// import Sayac from './Sayac';
import Personalinfo from './Personalinfo';
// import TitleOne from './TitleOne';

// function App() {
//   return (
//     <div>
//       <TitleOne />
//     </div>
//   )
// }

// export default App;
function App() {
  return (
    <div>
      {/* <Sayac /> */}
      <Personalinfo />

    </div>
  )
}

export default App;