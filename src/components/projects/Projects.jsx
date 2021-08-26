import React from "react";
import Project from "./Project";
import content from "../assets/content";

export default class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="px-14 pt-14">
        <h2 className="font-bold text-2xl text-center lg:text-3xl 2xl:text-4xl">
          {content[this.props.language]["projects"]["title"]}
        </h2>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 md:gap-6">
        {
          content[this.props.language]["projects"]["projectsContent"].map(project => {
            return <Project
            key={project.title}
            language={this.props.language}
            title={project.title}
            madeWith={project.madeWith}
            description={project.description}
            siteLink={project.siteLink}
            codeLink={project.codeLink}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            />
          })
        }
        </div>
      </section>
    );
  }
}
