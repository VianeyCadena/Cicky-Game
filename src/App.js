import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Wrapper from "./components/Wrapper/Wrapper";
import cards from "./cards.json";
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
    if()
  })
}


render() {
  return (
    <Wrapper>
    <Navbar />
    
    <Container>
    <Header backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pupster</h1>
        <h2>They're the Good Boys and Girls</h2>
      </Header>
      </Container>
      
    <Footer />
    </Wrapper>
  );
}
}


  


export default App;
