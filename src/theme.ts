import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colors?: {
      primary?: any;
      secondary?: {
        yellow?: string;
        deepBlue?: string;
        blue?: string;
        purple?: string;
      };
      buttonColor?: {
        blue?: string;
        linear?: string;
        green?: string;
      };
      textColor?: {
        text1?: string;
        text2?: string;
        text3?: string;
      };
      placeHolder?: string;
      supportColor?: {
        blue?: string;
        grey?: string;
        mint?: string;
        red?: string;
      };
      lineColor?: string;
      background?: {
        background1?: string;
        background2?: string;
        background3?: string;
        background4?: string;
        background5?: string;
        white?: string;
        black?: string;
      };
      accent?: {
        redAccent?: string;
        yellowAccent?: string;
        greenAccent?: string;
        blueAccent?: string;
        purpleAccent?: string;
      };
      purple?: string;
      green?: string;
      red?: string;
      yellow?: string;
      blue?: string;
      white?: string;
      black?: string;
      gray?: string;
      grayLight?: string;
    };
  }
  interface ThemeOptions {
    colors?: {
      primary?: any;
      secondary?: {
        yellow?: string;
        deepBlue?: string;
        blue?: string;
        purple?: string;
      };
      buttonColor?: {
        blue?: string;
        linear?: string;
        green?: string;
      };
      textColor?: {
        text1?: string;
        text2?: string;
        text3?: string;
      };
      placeHolder?: string;
      supportColor?: {
        blue?: string;
        grey?: string;
        mint?: string;
        red?: string;
      };
      lineColor?: string;
      background?: {
        background1?: string;
        background2?: string;
        background3?: string;
        background4?: string;
        background5?: string;
        white?: string;
        black?: string;
      };
      accent?: {
        redAccent?: string;
        yellowAccent?: string;
        greenAccent?: string;
        blueAccent?: string;
        purpleAccent?: string;
      };
      purple?: string;
      green?: string;
      red?: string;
      yellow?: string;
      blue?: string;
      white?: string;
      black?: string;
      gray?: string;
      grayLight?: string;
    };
  }
  // You can put this to any file that's included in your tsconfig
  interface Shadow {
    subtle: string;
    strong: string;
  }
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#611f69',
    },
  },
  colors: {
    primary: {
      deepBlue: '#1E3150',
    },
    secondary: {
      yellow: '#FFA011',
      deepBlue: '#1E315033',
      blue: '#007BFF33',
      purple: '#8428E6',
    },
    buttonColor: {
      blue: '#007BFF',
      // linear: 'linear-gradient(180deg, #4E2AE8 0%, #BE27E2 100%)',
      green: '#46A34A',
    },
    textColor: {
      text1: '#111111',
      text2: '#535454',
      text3: '#C4C4C4',
    },
    placeHolder: '#CACAC9',
    supportColor: {
      blue: '#00A3FF',
      grey: '#535454',
      mint: '#17A2B8',
      red: '#FF1700',
    },
    lineColor: '#C4C4C4',
    background: {
      background1: '#F5FAFF',
      background2: '#F5F5F5',
      background3: '#C4C4C44D',
      background4: '#F0EFEF',
      background5: '#D9D9D9',
      white: '#FFFFFF',
      black: '#000000',
    },
    accent: {
      redAccent: '#FF17004D',
      yellowAccent: '#FFA0114D',
      greenAccent: '#46A34A4D',
      blueAccent: '#007BFF33',
      purpleAccent: '#8428E64D',
    },
    purple: '#611f69',
    green: '#2eb67d',
    red: '#e01e5a',
    yellow: '#ecb22e',
    blue: '#36c5f0',
    white: '#fff',
    black: 'rgb(18, 18, 18)',
    gray: 'rgba(0,0,0,0.4)',
    grayLight: '#F2F2F2',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  colors: {
    primary: {
      deepBlue: '#1E3150',
    },
    secondary: {
      yellow: '#FFA011',
      deepBlue: '#1E315033',
      blue: '#007BFF33',
      purple: '#8428E6',
    },
    buttonColor: {
      blue: '#007BFF',
      // linear:  linear-gradient(to right, #1a5613, #2c8420),
      green: '#46A34A',
    },
    textColor: {
      text1: '#111111',
      text2: '#535454',
      text3: '#C4C4C4',
    },
    placeHolder: '#CACAC9',
    supportColor: {
      blue: '#00A3FF',
      grey: '#535454',
      mint: '#17A2B8',
      red: '#FF1700',
    },
    lineColor: '#C4C4C4',
    background: {
      background1: '#F5FAFF',
      background2: '#F5F5F5',
      background3: '#C4C4C44D',
      background4: '#F0EFEF',
      background5: '#D9D9D9',
      white: '#FFFFFF',
      black: '#000000',
    },
    accent: {
      redAccent: '#FF17004D',
      yellowAccent: '#FFA0114D',
      greenAccent: '#46A34A4D',
      blueAccent: '#007BFF33',
      purpleAccent: '#8428E64D',
    },
    purple: '#611f69',
    green: '#2eb67d',
    red: '#e01e5a',
    yellow: '#ecb22e',
    blue: '#36c5f0',
    white: '#fff',
    black: 'rgb(18, 18, 18)',
    gray: '#ccc',
    grayLight: '#F2F2F2',
  },
});

const theme = (mode?: 'dark' | 'light') => (mode === 'dark' ? darkTheme : lightTheme);

export { theme };
