import './App.css';
import React, {useState} from "react";

// A component is a function that returns UI (JSX)
// we want to create components that occupy all three places (Header, Main, Footer)
// To add properties to "props" object, we need to add them to where the components are being
// So in this case, its the App function
// Keys can help you keep your data in sync as your application state changes over time


// component
// function Header(props) {
//     return (
//         <header>
//             <h1>{props.name} Kitchen</h1>
//         </header>
//     );
// }

// component
// function Main(props) {
//     return (
//         <section>
//             <p>We Serve the most {props.adjective} food around</p>
//             {/*You can also just used direct links to pictures from web*/}
//             {/*<img src={"https://github.com/gmpuryear.png"} height = {200}/>*/}
//             <img src = {restaurant} height={200} alt="napkin and silverware at restaurant  table"/>
//             <ul style = {{textAlign: "left"}}>
//                 {props.dishes.map((dish) => (
//                     <li key={dish.id}>{dish.title}</li>
//                 ))}
//             </ul>
//         </section>
//     )
// }

// // component
// function Footer(props) {
//     return (
//         <footer>
//             <p>Copyright {props.year}</p>
//         </footer>
//     )
// }

// *Not using dishes array anymore because we want to attach a key to each dish and make each its own object
//         with properties id and title.
// const dishes = ["Macaroni and Cheese", "Salmon", "Steak", "grilled chicken"];

// returning dish objects with id and title as properties
// const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))
// console.log(dishObjects);

// secret component that where only people who are authorized can see
// function SecretComponent() {
//     return <h1>Secret information for authorized users only</h1>
// }

// Can see without being logged in
// function RegularComponent() {
//     return <h1>Everyone can see this component.</h1>
// }
// The ',,' is skipping over the first 2 array elements and sets "mostImportant" to headlamp
//         this is called "destructuring" where we give elements variable names
// const [,, mostImportantItem] = ["boots", "tent", "headlamp"];
// console.log(mostImportantItem);

// this composes these components together to make a larger application
function App() {
    // "emotion" is the state variable, "setEmotion" is a function that updates the state and we pass in what we want the
            // the first state to be.
    const [emotion, setEmotion] = useState("happy");

    return (
        <>
            <h1>Current emotion is {emotion}.</h1>
            <button onClick={() => setEmotion("happy")}>
                Happy
            </button>
            <button onClick={() => setEmotion("frustrated")}>
                Frustrate
            </button>
            <button onClick={() => setEmotion("enthusiastic")}>
                Enthuse
            </button>
        </>
    )
        ;
}

/* if this is true, render secretComponent*/

/*{authorized ? <SecretComponent /> : <RegularComponent />}*/


// Notice that this is "className" and not "class"
// instead of using the <div> wrappers, you could also just use <> </>
// <div className="App">
//     <Header name = "Matt"/>
//     {/*Because were passing in the variable "dishes", we use curly braces*/}
//     <Main adjective = "amazing" dishes = {dishObjects}/>
//     <Footer year = {new Date().getFullYear()}/>
// </div>


export default App;
