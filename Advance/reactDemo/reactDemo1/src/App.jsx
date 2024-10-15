//foundation from component (import from child.jsx)
import Child from "./components/child"





const App =() => {
  let children = ["smeep", "lars", "warlock"]
  children = children.sort();
  let newArray = children.map((kid, index) =>{
    return <Child key = {new Date().getTime}fname={kid}/>
  })
  return(
    <section>
      <h1>My kids are:</h1>
      {newArray}
      {/* <Child fname = "larry"/>
      <Child fname = "curly"/>
      <Child fname = "moe"/> */}
    </section>
  )
}



export default App




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite & weackt</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


