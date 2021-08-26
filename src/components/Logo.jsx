import React from "react";
import content from "./assets/content";

export default class Logo extends React.Component {
    render() {
        return <a className="flex flex-row items-center" href=".">
        <div
          className={`logo inline-block bg-white font-bold text-3xl ${this.props.logoColor} rounded-full px-0.5 py-6
          lg:text-4xl lg:py-8
          2xl:text-5xl 2xl:py-11`}
        >
          JF
        </div>
        <div className="inline-block font-medium ml-3">
          <span className="text-white text-2xl tracking-wide lg:text-3xl 2xl:text-4xl">
            Juan Faracco
          </span>
          <br />
          <span className="text-white lg:text-xl 2xl:text-2xl">
            {content[this.props.language]["header"]["role"]}
          </span>
        </div>
      </a>
    }
}