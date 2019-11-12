import React, { Component } from 'react';
import Header from './Header';
import Hero from './Hero';
import BrandBar from './BrandBar';
import HowTo from './HowTo';
import Benefits from './Benefits';
import Footer from './Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
  }
  
  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { windowWidth } = this.state;

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 50,
      footerHeight: 150,
      showHeaderPhone: windowWidth < 500,
      approvalButtonWidth: windowWidth < 500 ? "90vw" : "350px",
      approvalButtonHeight: 60,
      showHeroPhone: windowWidth > 500,
      isMobile: windowWidth < 500,
      width: "100vw",
    };

    return (
      <div className="App"
        style={{
          backgroundColor: styles.white(),
          minHeight: "100vh",
        }}
      >
        <Header styles={styles} />
        <Hero styles={styles} />
        <BrandBar styles={styles} />
        <HowTo styles={styles} />
        <Benefits styles={styles} />
        {windowWidth > 500 ? <Footer styles={styles} /> : (null)}
      </div>
    );
  }
}

export default App;
