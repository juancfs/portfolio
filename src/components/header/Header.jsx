import React from "react";
import Navbar from "./Navbar";
import content from "../assets/content";

export default class Header extends React.Component {
  state = {
    menuOpen: false,
    firstGreeting: "",
    secondGreeting: "",
    isFirstGreeting: true,
  };

  toggleMenu = () => {
    if (this.state.menuOpen === false) {
      this.setState({ menuOpen: true });
    } else {
      this.setState({ menuOpen: false });
    }
  };

  typer = (message) => {
    return new Promise((resolve, reject) => {
      let index = 0;
      let typer = setInterval(() => {
        if (index < message.length) {
          if (this.state.isFirstGreeting) {
            this.setState({
              firstGreeting: this.state.firstGreeting + message[index],
            });
          } else {
            this.setState({
              secondGreeting: this.state.secondGreeting + message[index],
            });
          }
          index++;
        } else {
          this.setState({ isFirstGreeting: false });
          resolve("Message written");
          clearInterval(typer);
        }
      }, 120);
    });
  };

  componentDidMount() {
    let firstGreeting =
      content[this.props.language]["header"]["greeting"]["first"];
    let secondGreeting =
      content[this.props.language]["header"]["greeting"]["second"];
    window.onload = () => {
      this.typer(firstGreeting).then(() =>
        setTimeout(() => this.typer(secondGreeting), 400)
      );
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.menuOpen && (
          <div className="bg-gray-800 fixed h-screen w-screen opacity-40 z-10"></div>
        )}
        <div
          id="home"
          className="h-screen bg-md-coding-background bg-cover bg-no-repeat md:bg-xl-coding-background xl:bg-2xl-coding-background"
        >
          <header className="h-full bg-blue-crayola bg-center bg-opacity-40 text-white">
            <Navbar
              language={this.props.language}
              menuOpen={this.state.menuOpen}
              onMenuToggle={this.toggleMenu}
              onLanguageChange={this.props.onLanguageChange}
            />
            <div className="h-full flex flex-col justify-center items-center">
              <h1 className="font-ubuntu-mono font-bold text-3xl text-center mt-gt sm:text-4xl md:text-5xl 2xl:text-6xl">
                <span
                  className={`greeting-1 pr-2 ${
                    this.state.isFirstGreeting ? "blinking" : ""
                  }`}
                >
                  {this.state.firstGreeting}
                </span>
                <br />
                <span
                  className={`greeting-2 pr-2 ${
                    this.state.isFirstGreeting === false ? "blinking" : ""
                  }`}
                >
                  {this.state.secondGreeting}
                </span>
              </h1>
              <a href="#about" className="inline-block animate-bounce mt-ar">
                <img
                  src={
                    content[this.props.language]["header"]["downArrow"][
                      "imgSrc"
                    ]
                  }
                  alt={
                    content[this.props.language]["header"]["downArrow"][
                      "imgAlt"
                    ]
                  }
                  className="w-11 md:w-16 2xl:w-20"
                ></img>
              </a>
            </div>
          </header>
        </div>
      </React.Fragment>
    );
  }
}
