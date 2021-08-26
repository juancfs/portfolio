import React from "react";
import SkillsBlock from "./SkillsBlock";
import content from "../assets/content";

export default class Skills extends React.Component {
  render() {
    return (
      <section id="skills" className="bg-eggshell p-14 text-center">
        <h2 className="font-bold text-2xl lg:text-3xl 2xl:text-4xl">{content[this.props.language]["skills"]["title"]}</h2>
        {
          content[this.props.language]["skills"]["skillsContent"].map(skillsBlock => {
            return <SkillsBlock
            key={skillsBlock.title}
            skills={skillsBlock.skills}
            title={skillsBlock.title}
            imgSrc={skillsBlock.imgSrc}
            imgAlt={skillsBlock.imgAlt}
            />
          })
        }
      </section>
    );
  }
}
