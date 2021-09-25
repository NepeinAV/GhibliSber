import { css, DefaultTheme } from 'styled-components/native';

const primaryShadow = css`
    shadow-color: black;
    shadow-radius: 5px;
    shadow-opacity: 0.05;
    shadow-offset: 0 2px;
    elevation: 4;
`;

const theme: DefaultTheme = {
    borderRadius: 10,
    colors: {
        primary: 'blue',
        secondary: 'white',
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
