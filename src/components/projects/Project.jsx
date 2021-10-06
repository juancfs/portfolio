import React from "react";
import content from "../assets/content";

export default class Project extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={this.props.imgSrc} alt={this.props.imgAlt} className="my-auto col-span-1" />
        <div className="col-span-1">
          <h3 className="font-medium text-xl mt-8 md:mt-0 lg:text-2xl 2xl:text-3xl">
            {this.props.title}
          </h3>
          <p className="my-4 text-lg lg:text-xl 2xl:text-2xl">
            <span className="font-medium">{content[this.props.language]["projects"]["madeWithTitle"]}</span>
            {` ${this.props.madeWith}`}
          </p>
          <p className="text-lg lg:text-xl 2xl:text-2xl">
            <span className="font-medium">{content[this.props.language]["projects"]["descriptionTitle"]}</span>
            {` ${this.props.description}`}
          </p>
          <div className="mb-8 max-md:flex max-md:flex-row max-md:flex-wrap max-md:justify-around">
            {/* Live site button */}
            <a
              href={this.props.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-midnight mt-8 p-4 text-white font-medium text-lg transition-all duration-300 lg:text-xl 2xl:text-2xl hover:transform hover:scale-110"
            >
              <img
                src={content[this.props.language]["projects"]["rocketIcon"]["imgSrc"]}
                alt={content[this.props.language]["projects"]["rocketIcon"]["imgAlt"]}
                className="inline-block w-6"
              />
              &nbsp;{content[this.props.language]["projects"]["liveSiteTitle"]}
            </a>
            {/* View code button */}
            <a
              href={this.props.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 mt-8 p-4 text-white font-medium text-lg transition-all duration-300 md:ml-4 lg:text-xl 2xl:text-2xl hover:transform hover:scale-110"
            >
              <img
                src={content[this.props.language]["projects"]["codeIcon"]["imgSrc"]}
                alt={content[this.props.language]["projects"]["codeIcon"]["imgAlt"]}
                className="inline-block w-6"
              />
              &nbsp;{content[this.props.language]["projects"]["codeTitle"]}
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
