import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        subtitle1: 'strong',
        subtitle2: 'strong'
      }
    }
  },
  spacing: 10,
  palette: {
    primary: {
      light: '#55adac',
      main: '#1c7d7d',
      dark: '#005051',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#2c2c2c',
      main: '#000000',
      dark: '#000000',
      contrastText: '#ffffff'
    },
    error: {
      main: '#ff564f !important'
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00'
    },
    background: {
      paper: '#F5F6FA',
      default: '#ffffff'
    },
    text: {
      primary: '#172340',
      secondary: '#8B94A9',
      disabled: '#8B94A9'
    },
    action: {
      disabled: '#E4E9F3',
      disabledBackground: '#F5F6FA',
    }
  },
  breakpoints: {
    values: {
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1360
    }
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 14,
    htmlFontSize: 16,
    lineHeight: 1.5,
    fontWeightBold: 600
  },
  shape: {
    borderRadius: 6
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 400,
      },
      containedSizeLarge: {
        padding: '16px 48px',
        fontSize: '1rem',
        lineHeight: 1.5
      },
      containedPrimary: {
        '&$disabled': {
          color: '#ffffff',
          backgroundColor: '#1c7d7d !important',
          opacity: 0.3
        }
      }
    },
    MuiMain: {
      padding: "30px 0"
    },
    MuiStepLabel: {
      label: {
        fontSize: 12,
        lineHeight: 1.5,
        fontWeight: 600,
        '&$active': {
          color: '#ff564f',
          fontWeight: 600
        },
        '&$completed': {
          color: '#ff564f',
          fontWeight: 600
        },
        '&$alternativeLabel': {
          marginTop: 8
        }
      }
    },
    MuiStepIcon: {
      root: {
        width: '2rem',
        height: '2rem'
      },
      text: {
        fontWeight: 600
      }
    },
    MuiStepConnector: {
      alternativeLabel: {
        top: '1rem',
        left: 'calc(-50% + 1rem)',
        right: 'calc(50% + 1rem)'
      },
      line: {
        borderColor: '#F6F7FB'
      }
    },
    MuiDialogActions: {
      root: {
        borderTop: `1px solid #E4E9F3`,
        justifyContent: 'space-between',
        marginTop: "20px"
      }
    },
    MuiDialogTitle: {
      root: {
        fontWeight: 600,
        textAlign: 'center',
        padding: "20px 0 0"
      }
    },
    MuiTypography: {
      h6: {
        fontWeight: 600
      },
      subtitle1: {
        fontWeight: 600
      },
      subtitle2: {
        fontWeight: 600
      }
    },
    MuiDialogContentText: {
      root: {
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 30
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 36
      }
    },
    MuiSelect: {
      root: {
        '&$disabled': {
          color: 'rgba(0, 0, 0, .3)',
        }
      },
    },
    MuiInputBase: {
      root: {
        '&$disabled': {
          color: '#172340',
          backgroundColor: '#F5F6FA',
          "& fieldset": {
            borderColor: "#ffffff !important"
          }
        }
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 6,
      },
      notchedOutline: {
        borderColor: '#E4E9F3',
        borderStyle: 'solid',
        borderWidth: 1
      },
    },
    MuiFormLabel: {
      root: {
        '&$disabled': {
          color: '#8B94A9'
        }
      }
    },
    MuiMenu: {
      paper: {
        border: '1px solid #E4E9F3',
        backgroundColor: '#ffffff',
      }
    },
    MuiToolbar: {
      root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: "#ffffff",
      },
      gutters: {
        padding: "0 !important"
      }
    },
    MuiDrawer: {
      paper: {
        background: "#ffffff"
      }
    }
  }
})

export default theme