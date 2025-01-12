import { DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#6200ee',
        accent: '#03dac4',
        background: '#f6f6f6',
        surface: '#ffffff',
        text: '#000000',
        disabled: '#f0f0f0',
        placeholder: '#a0a0a0',
        backdrop: '#000000',
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
