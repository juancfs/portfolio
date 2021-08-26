import React from "react";
import Header from "./header/Header";
import About from "./About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default class App extends React.Component {

    languageChecker() {
        let language = "";
        if (localStorage.getItem("language") !== null) {
            language = localStorage.getItem("language");
        } else {
          language = (navigator.language.slice(0, 2) === "es") ? "es" : "en";
        }
        let title = {"en": "Juan Faracco: Frontend Developer", "es": "Juan Faracco: Desarrollo Frontend"}
        document.title = title[language];
        return language;
      }

      state = {
          language: this.languageChecker(),
      }

      languageChange = (event) => {
          let newLang = event.target.value;
          localStorage.setItem("language", newLang);
          document.documentElement.lang = newLang;
          let title = {"en": "Juan Faracco: Frontend Developer", "es": "Juan Faracco: Desarrollo Frontend"}
          document.title = title[newLang];
          this.setState({language: newLang});
          document.location.reload();
      }

    render() {
        return <React.Fragment>
            <Header
            language={this.state.language} 
            onLanguageChange={this.languageChange}/>
            <main>
                <About language={this.state.language} />
                <Skills language={this.state.language} />
                <Projects language={this.state.language} />
                <Contact language={this.state.language} />
            </main>
            <Footer language={this.state.language} />
        </React.Fragment>
    }
}