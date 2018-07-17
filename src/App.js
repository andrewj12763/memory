import React from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import JumboTron from "./components/JumboTron";
import Footer from "./components/Footer";
import characters from "./pictures.json";
import "./App.css";

class App extends React.Component {

  state = {
  characters,
  clickedCharacters: [],
  score:0,
  highScore:0,
  navMessage: "Click an image to begin!"

 };

  randomCharacter = () => {
    let characters = this.state.characters;
    let randomCharacters = [];
    let random = Math.floor(Math.random() * Math.floor(characters.length));
    for (let i = 0; i < characters.length; i++) {
      randomCharacters.push(characters[random]);
      characters.splice(random, 1)
    }
    return randomCharacters;
  }

  scoreChecker = id => {
    let character = this.state.clickedCharacters;
    if (character.length !== 0 && character.indexOf(id) !== -1) {
        this.setState({clickedCharacters:[],
                       score:0,
                       navMessage:"Incorrect guess!"});
    } else {

      character.push(id);
      this.setState({score: this.state.score+=1,
                     navMessage:"Correct!",
                     clickedCharacters: character});

      if (this.state.score >= this.state.highScore) {
        this.setState({highScore:this.state.score});
      } 
    }
  } 

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tempStore = array[i];
      array[i] = array[j];
      array[j] = tempStore;
    }
    return array;
  }

  render() {
   
    const shuffledCharacters = this.shuffleArray(this.state.characters);
    return (
      <Wrapper>
        < NavBar 
            score={this.state.score}
            highScore={this.state.highScore}
            navMessage={this.state.navMessage}
          />
        < JumboTron />
        
        <div className="card-container">
          {shuffledCharacters.map((character)  => (
            <PictureCard
              score={this.state.score}
              highScore={this.state.highScore}
              clickedCharacters={this.state.clickedCharacters}
              scoreChecker={this.scoreChecker}
              deleteCharacter={this.deleteCharacter}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              occupation={character.occupation}
              location={character.location}
            />
          ))}
        </div>
        <Footer/>
      </Wrapper>
    );
  }
}
export default App;
