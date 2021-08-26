import React from "react";
import content from "./assets/content";

export default class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="bg-eerie-black py-10 text-white">
        <h2 className="font-bold text-2xl text-center lg:text-3xl 2xl:text-4xl">
          {content[this.props.language]["contact"]["title"]}
        </h2>
        <h3 className="font-medium text-xl text-center my-8 2xl:text-2xl">
          {content[this.props.language]["contact"]["workTogether"]}
        </h3>
        <form
          action="https://formsubmit.co/juanfaracco@gmail.com"
          method="POST"
          className="w-4/5 mx-auto max-w-md"
        >
          <label
            htmlFor="name"
            className="inline-block mdxt-lg font-bold md:text-lg xl:text-xl"
          >
            {content[this.props.language]["contact"]["name"]}
          </label>
          <br />
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full text-black p-4 mt-2 rounded-lg"
          />
          <br />
          <label
            htmlFor="email"
            className="inline-block text-md mt-4 font-bold md:text-lg xl:text-xl"
          >
            {content[this.props.language]["contact"]["email"]}
          </label>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full text-black p-4 mt-2 rounded-lg"
          />
          <br />
          <label
            htmlFor="message"
            className="inline-block text-md mt-4 font-bold md:text-lg xl:text-xl"
          >
            {content[this.props.language]["contact"]["message"]}
          </label>
          <br />
          <textarea
            name="message"
            id="message"
            required
            className="w-full p-2 h-40 text-black mt-2 rounded-lg"
          ></textarea>
          <br />
          <div className="text-center mt-4">
            <button
              type="submit"
              className="w-max bg-green-500 p-4 text-white font-medium text-lg transition-all duration-300 lg:text-xl 2xl:text-2xl hover:transform hover:scale-110"
            >
              <img
                src={content[this.props.language]["contact"]["airplaneIcon"]["imgSrc"]}
                alt={content[this.props.language]["contact"]["airplaneIcon"]["imgAlt"]}
                className="inline-block"
              />{" "}
              {content[this.props.language]["contact"]["button"]}
            </button>
          </div>
        </form>
      </section>
    );
  }
}
