import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Wrapper from "./components/Wrapper/Wrapper";
import cards from "./cards.json";
import Card from "./components/Card/Card";
import './App.css';

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

gameOver = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score}, function() {
      console.log(this.state.highscore)
    });
  }
  this.state.cards.forEach(card => {
    card.count= 0;
  });
  alert(`Game Over :( \n score: ${this.state.score}`);
  this.setState({score: 0});
  return true;
}

clickCount = id => {
  this.state.cards.find((o, i) => {
    if(o.id===id){
      if (cards[i].count === 0) {
        cards[i].count = cards[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log(this.state.score);
        });
        this.state.cards.sort(() => Math.random()-0.5)
        return true;
      } else{
        this.gameOver();
      }
    }
  })
}


render() {
  return (
    <Wrapper>
    <Navbar score={this.state.score} highscore={this.state.highscore} />
    <Header backgroundImage="https://i.imgur.com/bGXAvEf.jpg">
        <h1>Clicky Game</h1>
        <h3>Test for designers, don't click the same pantone two times</h3>
      </Header>
    <Container>
      {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Container>
      
    <Footer />
    </Wrapper>
  );
}
}


  


export default App;
