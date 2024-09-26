
const CardContainer = (props) => {
    return(
        <div style={{border: '2px solid', padding: '20px'}}>
            {props.children}
        </div>
    )
}

export default CardContainer;