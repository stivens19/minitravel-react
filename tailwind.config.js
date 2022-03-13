module.exports = {
  content: ["./src/**/*.{html,js,jsx}","./public/**/*.{html,js,jsx}"],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'bannerMobile':"url('../public/img/banner_mobile.jpg')",
        'bannerDesktop':"url('../public/img/Banner_Desktop.jpg')",
        'tAdventure':"url('../public/img/Travel_Adventure.jpg')",
        'tFamily':"url('../public/img/Travel_family.jpg')",
        'tRomantic':"url('../public/img/Travel_Romantic.jpg')",
      },
      backgroundColor:theme=>({
        ...theme('colors'),
        'primary':'#7900FF',
        'secondary':'#548CFF',
        'tertiary':'#0E185F',
      }),
      textColor:theme=>({
        ...theme('colors'),
        'primary':'#7900FF',
        'secondary':'#548CFF',
        'tertiary':'#0E185F',
      }),
      fontFamily:{
        'Montserrat':['Montserrat','sans-serif'],
      }
    },
  },
  plugins: [],
  
}
