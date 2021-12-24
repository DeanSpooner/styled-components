import { useState } from "react";
import "./App.css";
import { Button, ButtonContainer } from "./components/Button.js";
import { Photo, PhotoContainer, PhotoText } from "./components/Photo.js";
import { Letter, LetterContainer } from "./components/Letter.js";
import { alphabet } from "./data/alphabet.js";
import { LoadingSpinner } from "./components/LoadingSpinner.js";

function App() {
  const [titleColor, setTitleColor] = useState("white");

  const handleColorClick = () => {
    setTitleColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  return (
    <div className="App">
      <ButtonContainer>
        <Button onClick={handleColorClick}>
          Click me to make the title a different colour!
        </Button>
        <Button primary onClick={() => setTitleColor("white")}>
          Click me to make the title white!
        </Button>
      </ButtonContainer>
      <PhotoContainer>
        <PhotoText color={titleColor}>
          This is a randomly-generated image:
        </PhotoText>
        <Photo
          src="https://picsum.photos/200/300"
          alt="Lorem ipsum"
          border={titleColor}
        />
      </PhotoContainer>
      <LoadingSpinner />
      <LetterContainer>
        {alphabet.map((letter) => (
          <Letter key={letter}>{letter}</Letter>
        ))}
      </LetterContainer>
    </div>
  );
}

export default App;
