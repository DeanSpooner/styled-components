import { useState } from "react";
import "./App.css";
import { Button, ButtonContainer } from "./components/Button.js";
import { Photo, PhotoContainer, PhotoText } from "./components/Photo.js";

function App() {
  const [titleColor, setTitleColor] = useState("white");
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "cyan",
    "magenta",
    "pink",
    "purple",
    "brown",
  ];

  const handleColorClick = () => {
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    setTitleColor(selectedColor);
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
        <Photo src="https://picsum.photos/200/300" alt="Lorem ipsum" />
      </PhotoContainer>
    </div>
  );
}

export default App;
