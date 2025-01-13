import { DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#050201',
        secondary : "#109CFF",
    },
    roundness: 4,
    fonts: {
        regular: {
            fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'Roboto-Medium, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'Roboto-Light, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'Roboto-Thin, "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 'normal',
        },
    },
};

export default theme;
