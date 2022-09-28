import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#B56b02',
    },
    secondary: {
      main: '#3f6c51',
    },
    info: {
      main: '#EFF6EE',
    },
    background: {
      default: 'white',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: 'Bree Serif',
    h1: {
      fontFamily: 'Bree Serif, serif',
    },
    h2: {
      fontFamily: 'Bree Serif, serif',
    },
    h3: {
      fontFamily: 'Bree Serif, serif',
    },
    h4: {
      fontFamily: 'Bree Serif, serif',
    },
    h5: {
      fontFamily: 'Bree Serif, serif',
    },
    h6: {
      fontFamily: 'Bree Serif, serif',
    },
    body1: {
      fontFamily: 'Nobile, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Nobile, sans-serif',
      fontWeight: 600,
    },
    body3: {
      fontFamily: 'Nobile, sans-serif',
      fontSize: ' 1.2em',
    },
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
  },
  shape: {
    borderRadius: 4,
  },
})
