import "./App.css";
import React, { useState } from "react";
import CatImage from "./components/CatImage";
import Lottie from "lottie-react";
import CatLottie from "../assets/cat_1.json";

// API
// CREATE A FUNCTION CALLED fetchData and link to button

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [catImage, setCatImage] = useState(null);
  const [catImageText, setCatImageText] = useState(null);
  const [whatCatSays, setWhatCatSays] = useState("");
  const [enterSite, setEnterSite] = useState(false);
  const [catFact, setCatFact] = useState("");

  // async await: NEW WAY

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://cataas.com/cat?json=true");
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Oops, Something went wrong!");
      }

      setCatImage(data.url);
    } catch (error) {
      alert(error);
    }

    console.log(data.url);

    // create a state called createImage
    // SAVE CAT IMAGE TO STATE
    // SHOW IMAGE IN HTML

    setIsLoading(false);
    // setCatImage(data.url);

    // setTimeout(() => {
    //     setIsLoading(false);

    // }, 2000);
  };

  const fetchCatText = () => {
    // ADD THE STAATE TO THE STRING INSTEAD OF HADCODE
    fetch(
      "https://cataas.com/cat/says/ $ {whatCatSays}?fontSize=200&filter=mono&fontColor=blue"
    )
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Oops, Something went wrong!");
        }
        setCatImageText(response.url);
      })
      // TODAY
      .catch((error) => {
        alert(error);
      });
  };
  // wrap the first return in an if statement
  // INSIDE IF CHECK IF ENTERSITE IS FALSE
  // THEN UPDATE HANDLER TO CHANGE STate ENTERSITE TRUE
  // connect the handler to button
//   THIS FUNCTION ENTERS(ENTER BUTTON ) SWITCHES THE UI USER INTERFACE(THINGS WE SEE VISUALLY)
  const enterHandler = () => {
    setEnterSite(true); 
  };

  const fetchCatFacts = async () => {
    

    try {
        const response = await fetch("https://catfact.ninja/fact?max_length=140");
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error("Oops, Something went wrong!");
        }
  
        setCatFact(data.fact);
      } catch (error) {
        alert(error);
      }
  };
  if (enterSite == false) {
    return (
      <div>
        <h2>Welcome to my Cat app!</h2>
        <Lottie className="h-[100px] w-[100px]"animationData={CatLottie} loop={true} />
        <button className="bg-[yellow]" onClick={fetchCatFacts}>I like cat facts!</button> 
        <h3>Random cat fact:</h3>
        <p>{catFact}</p>
        <button onClick={enterHandler}>Enter</button>
        <button onClick={fetchCatFacts}>CatFacts</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Cat App</h1>
      <p>press the button to get a cat!</p>

      <button onClick={fetchData}>
        {isLoading === true ? "Loading..." : "Meow"}
      </button>

      <CatImage imageOfCat={catImage} />

      {catImage && <img src={catImage} alt="default text" />}

      <button onClick={fetchCatText}>Cat Says</button>

      <input
        type="text"
        value={whatCatSays}
        onChange={(e) => setWhatCatSays(e.target.value)}
      />
      {catImageText && <img src={catImageText} alt="default text" />}

      {/* <div style={{width:200,height:1, backgroundColor: "white"}}></div> */}
    </div>
  );
}
