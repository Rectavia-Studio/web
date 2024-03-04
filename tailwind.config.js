/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      height: {
        '140vh': '140vh',
        '200vh': '200vh',
        '50vh': '50vh'
      },
      inset: {
        '100vh': '100vh',
      },
      screens: {
        'xs': '300px',
      },
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
        'h2': '2rem',
        'h3': '1.5rem'
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
    },
  },
  plugins: [],
}

