import React from "react";
import Skill from "./Skill";

export default class SkillBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="mt-8">
          <img
            className="block w-16 mx-auto md:w-28 2xl:w-36"
            src={this.props.imgSrc}
            alt={this.props.imgAlt}
          />
          <h3 className="text-lg font-medium md:text-xl 2xl:text-2xl">
            {this.props.title}
          </h3>
        </div>
        <div className="flex flex-row flex-wrap justify-around mt-14">
          {this.props.skills.map((skill) => {
            return (
              <Skill
              key={skill.name}
              title={skill.name}
              imgSrc={skill.imgSrc}
              imgAlt={skill.imgAlt}
              level={skill.level}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
