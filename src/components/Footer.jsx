import React from "react";
import Logo from "./Logo";
import content from "./assets/content";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-gray-800 p-5 grid grid-cols-1 place-items-center md:grid-cols-3">
        <Logo language={this.props.language} logoColor="text-gray-800" />
        <a
          href="#home"
          className="p-1 border-4 border-white rounded-full my-7 transition-all duration-300 md:my-0 md:mx-7 hover:transform hover:scale-110"
        >
          <img
            src={content[this.props.language]["footer"]["chevronIcon"]["imgSrc"]}
            alt={content[this.props.language]["footer"]["chevronIcon"]["imgAlt"]}
            className="w-7"
          />
        </a>
        <ul>
          {content[this.props.language]["footer"]["socialIcons"].map((link) => {
            return (
              <li key={link.id} className="mx-3 inline-block">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={link.imgSrc}
                    alt={link.imgAlt}
                    className="w-10 transition-all duration-300 md:w-12 2xl:w-16 hover:transform hover:scale-110"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    );
  }
}
