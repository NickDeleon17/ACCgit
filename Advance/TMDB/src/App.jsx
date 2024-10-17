import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./assets/Components/NavBar.jsx";
import Results from "./assets/Components/Results.jsx"
import Error from "./assets/Components/Error.jsx"
import './index.css'


function App() {
    return (
        <Router>
            <div className="App">
               <NavBar className="NavBar"/>
               <Routes>
               <Route path="/" element={<Landing />} />
               <Route path="/results" element={<Results />} />
               <Route path="/oppsies" element={<Error />} />
               </Routes>
            </div>
        </Router>
    )

function Landing (){
        return(
            <div className="landing-page">
                <h1 style={{color: '#646cff', fontSize: '43px'}}> 🎥 Welcome to the LAB 4 Movie Database! 🎥</h1>

            </div>



        )
    }
}

export default App
