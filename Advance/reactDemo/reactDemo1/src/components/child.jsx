//foundation of component
const Child =(props) => {
    console.log(props);
    let {fname} = props;
    return  <h1>{fname}</h1>
}

//export to app.
export default Child;
