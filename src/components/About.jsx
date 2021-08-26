import React from "react";
import JuanPhoto from "./assets/juan-photo.png";
import content from "./assets/content";

export default class About extends React.Component {
  render() {
    return (
      <section id="about" className="bg-blue-midnight p-14 text-white text-center">
        <h2 className="font-bold text-2xl lg:text-3xl 2xl:text-4xl">{content[this.props.language]["about"]["title"]}</h2>
        <div className="md:grid grid-cols-2">
          <div>
            <img
              className="w-1/2 mt-6 rounded-full mx-auto md:w-5/12 2xl:w-4/12"
              src={JuanPhoto}
              alt="Juan Faracco"
            />
            <img
              src={content[this.props.language]["about"]["locationIcon"]["imgSrc"]}
              alt={content[this.props.language]["about"]["locationIcon"]["imgAlt"]}
              className="inline-block w-10"
            />
            <p className="inline-block lg:text-xl mt-4 2xl:text-2xl">
              Caracas, Venezuela
            </p>
          </div>
          <div className="md:my-auto md:text-left">
            <p className="mt-6 md:mt-0 md:my-auto text-lg lg:text-xl 2xl:text-2xl">
              {content[this.props.language]["about"]["description"]}
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/${content[this.props.language]["about"]["resumeName"]}.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white p-4 font-medium text-eerie-black mt-4 transition-all duration-300 lg:text-xl 2xl:text-2xl hover:transform hover:scale-110"
            >
              <img
                src={content[this.props.language]["about"]["downloadIcon"]["imgSrc"]}
                alt={content[this.props.language]["about"]["downloadIcon"]["imgAlt"]}
                className="inline-block w-5 mr-2 lg:w-6 xl:w-8"
              />
              {content[this.props.language]["about"]["resume"]}
            </a>
          </div>
        </div>
      </section>
    );
  }
}
