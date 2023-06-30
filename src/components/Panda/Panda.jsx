// Props is an object 
// The props object can have many properties
// In this case, props has two properties: disposition and name
function Panda(props) {
    return (
         // `Hello ${name}`
         // A fragment is an element with no name. It's not actually rendered to the DOM
        <>
            <h3>Hello! I'm a {props.disposition ?? 'happy'} panda! My name is {props.name ?? 'George'}.</h3>
            <img src={props.imageUrl} alt="panda" />
        </>
    )
};

// Nullish coalescing operator: ??
// If a thing is null or undefined, it will give 
// a default value

// thingThatMayBeNull ?? defaultValue

// ^^ if thingThatMayBeNull is null or undefined, then
// don't panic, just return/display the defaultValue

export default Panda;