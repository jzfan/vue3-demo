module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.vue'],
  theme: {
    screens: {
      sm: '640px',
      md: '865px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      red: '#E53E3E',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#4299E1',
        dark: '#009eeb',
      },
      green: '#12aa9c',
      'green-dark': '#00918a',
      'green-light': '#48BB78',
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        aa: '#aaaaaa',
        26: '#262626',
        ed: '#ededed',
        f5: '#f5f5f5;',
      },
      white: 'white',
      black: 'black',
    },
    boxShadow: {
      btn: '0 0 5px #12aa9c',
      card: '0 0 12px black',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    extend: {
      spacing: {
        '72': '18rem',
        '100': '25rem',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
