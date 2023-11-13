import merge from 'lodash.merge';
import {darkTheme, Theme,} from '@rainbow-me/rainbowkit';

export const myRainbowCustomTheme = merge(darkTheme(), {
    colors: {
        accentColor: '#BC85FF',
        accentColorForeground: '#131118',
        standby: ''
    },
    fonts: {
        body: 'Poppins'
    },
    radii: {
        modal: '8px',
        actionButton: '8px',
        menuButton: '8px',
        modalMobile: '8px',
    },
} as Theme)

