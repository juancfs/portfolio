import React from "react";

export default class Skill extends React.Component {
  render() {
    return (
      <div className="transition-all duration-300 hover:transform hover:scale-110">
        <img
          className="w-12 mx-auto md:w-20 2xl:w-28"
          src={this.props.imgSrc}
          alt={this.props.imgAlt}
        />
        <p className="text-lg md:text-xl 2xl:text-2xl">{this.props.title}</p>
        {(this.props.level !== undefined) && <p className="md:text-lg 2xl:text-2xl">
          {`(${this.props.level})`}
        </p>}
      </div>
    );
  }
}
