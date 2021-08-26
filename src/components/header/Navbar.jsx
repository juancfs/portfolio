import React from "react";
import Logo from "../Logo";
import github from "../assets/icons/github-icon.svg";
import linkedin from "../assets/icons/linkedin-icon.svg";
import content from "../assets/content";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="flex flex-row justify-between items-center py-2 px-3">
        <Logo
        language={this.props.language}
        logoColor="text-blue-crayola"/>
        <ul
          className={`${(this.props.menuOpen === false) ? "menuAppear" : "menuHide"} bg-white fixed top-24 bottom-0 z-20 text-gray-600 text-lg text-center px-16 py-6 transition-all duration-500 overflow-y-auto
                md:static md:bg-transparent md:top-0 md:text-white md:px-0`}>
          {content[this.props.language]["header"]["sections"].map((section) => {
            return (
              <li
                key={section.id}
                className="mt-4 md:inline-block md:mt-0 md:mr-4 lg:mr-12 lg:text-xl 2xl:text-2xl"
              >
                <a
                  href={"#" + section.id}
                  className="hover:border-b-4 hover:border-white transition-all"
                >
                  {section.name}
                </a>
              </li>
            );
          })}
          <li className="mt-4 md:text-white md:inline-block md:mt-0 md:mr-1">
            <select name="language" id="language" className="p-1 text-black lg:text-xl 2xl:text-2xl" defaultValue={this.props.language} onChange={this.props.onLanguageChange}>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </li>
          <li className="inline-block flex flex-row justify-around mt-6 md:hidden">
            {[
              {
                id: "Github",
                href: "https://github.com/juancfs",
                imgSrc: github,
              },
              {
                id: "Linkedin",
                href: "https://www.linkedin.com/in/jcfs",
                imgSrc: linkedin,
              },
            ].map((link) => {
              return (
                <a key={link.id} href={link.href} className="mx-3">
                  <img
                    src={link.imgSrc}
                    alt={`${link.id} icon`}
                    className="w-7"
                  />
                </a>
              );
            })}
          </li>
        </ul>
        <button onClick={this.props.onMenuToggle} className={`z-20 md:hidden ${(this.props.menuOpen) ? `open-btn fixed right-4` : undefined}`}>
          {[1, 2, 3].map((line) => (
            <span
              key={line}
              className="bg-white block h-1 w-7 mt-1.5 transition-transform duration-300"
            ></span>
          ))}
        </button>
      </nav>
    );
  }
}
