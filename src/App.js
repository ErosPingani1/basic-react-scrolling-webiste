import React from 'react';
import './App.css';
import arrowUp from './assets/img/arrow-up.png';
import hamburgerMenu from './assets/img/hamburger.png'
import osmar from './assets/img/logo-provvisorio.png'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.chiSiamo = React.createRef(); 
    this.lavorazioni = React.createRef(); 
    this.contatti = React.createRef();
    this.navMenu = React.createRef();
    this.scrollTopButton = React.createRef();
  }

  //APPLICATION METHODS 

  /**
   * Method executed once the app component has finished loading
   */
  componentDidMount() {
    this.checkScrollButton();
    this.checkNavigationMenu();
    window.addEventListener('scroll', this.onPageScroll);
  }

  /**
   * Method that manages the behavior of certain components on page scroll
   */
  onPageScroll = () => {
    this.checkNavigationMenu();
    this.checkScrollButton();
  }

  /**
   * Method that checks wether the scroll button has to be displayed
   */
  checkScrollButton() {
    this.scrollTopButton.current.classList.toggle('hidden', window.scrollY < 300);
  }

  /**
   * Method that checks wether the scroll button has to be sticky on top of the page
   */
  checkNavigationMenu() {
    this.navMenu.current.classList.toggle('sticky', window.scrollY > 300);
  }

  /**
   * Method that opens the navigation menu at onClick event on hamburger menu icon
   */
  openNavigationMenu() {
    this.navMenu.current.classList.toggle('opened');
  }

  /**
   * Method that closes the navigation menu when different events are triggered (scrollToTop, scrollToSection, on page click)
   */
  closeNavigationMenu() {
    this.navMenu.current.classList.remove('opened');
  }

  /**
 * Function fired on link click event that scrolls the page to a specific div
 * defined by the ref passed as argument applying a smooth animation
 * @param {*} ref - reference of the element that has to be displayed
 */
  scrollToSection(ref) {
    this.closeNavigationMenu();
    ref.current.scrollIntoView({behavior: 'smooth'});
  }

  /**
   * Method used by scroll to top button to move the entire content to the top of the website
   */
  scrollToTop() {
    this.closeNavigationMenu();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  //APPLICATION RENDER 
  
  render() {
    return (
      <div className="App">
        <header>
          <div className="navigation-menu" ref={this.navMenu}>
            <img className="osmar-logo" src={osmar} alt="osmar-logo" onClick={() => this.scrollToTop()}/>
            <div className="hamburger-servizi" onClick={() => this.openNavigationMenu()}>
              <img className="hamburger" src={hamburgerMenu} alt="hamburger-menu"/>
            </div>
            <div className="link-servizi">
              <div className="link-chi-siamo" onClick={() => this.scrollToSection(this.chiSiamo)}>Chi siamo</div>
              <div className="link-lavorazioni" onClick={() => this.scrollToSection(this.lavorazioni)}>Lavorazioni</div>
              <div className="link-contatti" onClick={() => this.scrollToSection(this.contatti)}>Contatti</div>
              <div className="language-selector">IT</div>
            </div>
          </div>
          <div className="App-header" onClick={() => this.closeNavigationMenu()}/>
        </header>
        <div className="App-body" onClick={() => this.closeNavigationMenu()}>
          <div className="scroll-top-button" onClick={() => this.scrollToTop()} ref={this.scrollTopButton}>
            <img className="arrow-icon" src={arrowUp} alt="arrow-up"/>
          </div>
          <div className="chi-siamo" ref={this.chiSiamo}/>
          <div className="lavorazioni" ref={this.lavorazioni}/>
          <div className="contatti" ref={this.contatti}/>
        </div>
      </div>
    );
  }

}

export default App;
