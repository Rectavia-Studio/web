/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {backgroundImage: {
      'background': "url('public/images/background.svg')",
    }},
    height: {
      '140vh': '140vh',
      '200vh': '200vh',
      '50vh': '50vh',
      ...defaultTheme.height
    },
    inset: {
      '100vh': '100vh',
    },
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
    boxShadow: {
      'purple': '0 0 10 0 #FF88FF' 
    },
    // colors: {
    //   'dark-purple': '#3F0045',
    //   'purple': '#FF88FF',
    //   'white-main': '#FEFFFE'
    // },
    textColor: {
      'white-main': '#FEFFFE',
      'purple': '#BD6AFF',
      'black': '#000000'
    },
    fontFamily: {
      'header': ['Montserrat', 'sans-serif'],
      'paragraph': ['Hind Madurai', 'sans-serif']
    },
    fontSize: {
      'p24': '1.1rem',
      'p32': '1.3rem',
      'p42': '1.6rem',
      'button': '1rem',
      'h1': '3.3rem',
      'h2': '1.5rem'
    },
    dropShadow: {
      'text': '10 10 10 #FF88FF'
    },
    height: {
      '150vh': '150vh',
    },
    backgroundImage: {
      'texture': "url('public/images/background.png')",
      'bitbrawl': "url('public/images/bitbrawl.png')",
      'cosmogene': "url('public/images/cosmogene.png')",
      'contact': "url('public/images/contact_bg.svg')",
      'team': "url('public/images/team_bg.svg')",
      'testimonials': "url('public/images/testimonials_bg.svg')",
      'projects': "url('public/images/projects_bg.svg')",
      'about': "url('public/images/about_bg.svg')"
    },
    // screens: {
    //   'phone': '320px',
    //   'tablet': '640px',
    //   'laptop': '1024px',
    //   'desktop': '1280px',
    // },
  },
  plugins: [],
}

