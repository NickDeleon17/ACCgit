import { useEffect, useState } from "react";

function ChangeColor() {
    const [color, setColor] = useState('')
    useEffect(() => {
        if (color){
            document.body.style.backgroundColor = color
        }
    }, [color])

    return (
        <div>
            <p onClick={() => setColor('red')} style={{color: 'white', fontSize: '28px'}}>Click for Red</p>
            <p onClick={() => setColor('yellow')} style={{color: 'white', fontSize: '28px'}}>Click for Yellow</p>
            <p onClick={() => setColor('green')} style={{color: 'white', fontSize: '28px'}}>Click for Green</p>

        </div>
    )
}

export default ChangeColor