import { css, DefaultTheme } from 'styled-components/native';

const primaryShadow = css`
    shadow-color: black;
    shadow-radius: 5px;
    shadow-opacity: 0.1;
    shadow-offset: 0 2px;
    elevation: 4;
`;

const theme: DefaultTheme = {
    borderRadius: 10,
    colors: {
        primary: '#222',
        secondary: '#ddd',
        background: 'white',
        surface: 'white',
        rating: 'orange',
        text: '#222',
    },
    indents: {
        padding: 16,
        margin: 16,
    },
    shadows: {
        primary: primaryShadow,
    },
};

export { theme };
