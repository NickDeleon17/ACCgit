
import Dice from './dice';
import {getDiceFace, getDiceFace2 } from './helper';

const App = () => {
    const diceFace = getDiceFace();
    const diceFace2 = getDiceFace2();
    const total = diceFace+diceFace2;

    return (
        <div className="app">
            <h1>Clickty Clack!</h1>
            <div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
            <Dice face={diceFace} /> 
            <Dice face={diceFace2} />
            </div>

            <section style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <h2>{total}</h2>
            </section>

            <section style={{display: 'flex', justifyContent: 'center'}}>
            <button className="roll" id='roll' style={{border: '2px solid', margin: '10px'}}
                    onClick={() => window.location.reload()}>Show me the money!</button>
            </section> 
        </div>
    );
}; 

export default App;