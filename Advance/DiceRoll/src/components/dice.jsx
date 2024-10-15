
const Dice = ({ face }) => {
    return (
        <div className="dice">
            <i className={`fas fa-dice-${face}`}></i>
        </div>
        
    );
};


export default Dice;
