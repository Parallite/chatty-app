import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#535878',
          middle: '#9DB0CE',
          light: '#B8D8E3'
        },
        pink: {
          dark: '#FEE1DD',
          middle: '#E9C2C5',
          light: '#CEA0AA'
        },
        white: {
          primary: '#f4f4f5'
        }
        // green: {
        //   50: '#30AF5B',
        //   90: '#292C27',
        // },
        // gray: {
        //   10: '#EEEEEE',
        //   20: '#A2A2A2',
        //   30: '#7B7B7B',
        //   50: '#585858',
        //   90: '#141414',
        // },
        // orange: {
        //   50: '#FF814C',
        // },
        // blue: {
        //   70: '#021639',
        // },
        // yellow: {
        //   50: '#FEC601',
        // },
      },
      backgroundImage: {
        "bg-gradient":
          "linear-gradient(90deg, rgba(83,88,120,1) 0%, rgba(157,176,206,1) 20%, rgba(184,216,227,1) 40%, rgba(254,225,221,1) 60%, rgba(233,194,197,1) 80%, rgba(206,160,170,1) 100%)",
        // 'bg-img-1': "url('/img-1.png')",
        // 'bg-img-2': "url('/img-2.png')",
        // 'feature-bg': "url('/feature-bg.png')",
        // pattern: "url('/pattern.png')",
        // 'pattern-2': "url('/pattern-bg.png')",
      },
      // screens: {
      //   xs: '400px',
      //   '3xl': '1680px',
      //   '4xl': '2200px',
      // },
      // maxWidth: {
      //   '10xl': '1512px',
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
export default config
