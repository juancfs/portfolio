module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '830px',
      'lg': '1050px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: () => ({
        "md-coding-background": "url('components/assets/background/md-coding-background.jpg')",
        "xl-coding-background": "url('components/assets/background/xl-coding-background.jpg')",
        "2xl-coding-background": "url('components/assets/background/2xl-coding-background.jpg')"
      }),
      colors: {
        "blue-crayola": "#263f44",
        "blue-midnight": "#015668",
        "eggshell": "#e6e1c5",
        "eerie-black": "#242424"
      },
      fontFamily: {
        "ubuntu": ["Ubuntu"],
        "ubuntu-mono": ["Ubuntu Mono"]
      },
      screens: {
        "max-md": {"max": "829px"}
      },
      animation: {
        "blinking": "blinking 0.9s linear infinite"
      },
      keyframes: {
        blinking: {
          "to": {borderColor: "white"}
        }
      },
      margin: {
        gt: "-13vh",
        ar:  "8vh"
      }
    },

  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      transform: ["hover"],
    },
  },
  plugins: [],
}
