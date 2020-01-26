
const palette = {
    primary: {
      main: '#fdc050',
      contrastText: '#000000',
    },
    secondary: {
      main: '#a069f3',
      contrastText: '#ffffff',
    },
    gray: {
      gray0:'#ffffff',
      gray100: '#FAFAFA',
      gray200: '#F5F5F5',
      gray300: '#ECECEC',
    },
  
    black:{
      black100:'#000000',
      black200:'#000000',
      black300:'#000000',
      black400:'#000000',
      black500:'#000000',
      black600:'#000000',
      contrastText: '#ffffff'
  
    },
  
    dark: {
      dark: '#353535',
      gray: '#919094',
      metalblue: '#3E4A63',
    },
  
    white: {
      white100: '#FAFAFA',
      white200: '#F5F5F5',
      white300: '#ECECEC',
    },
  
  
    danger:{
      main: '#FA3E3E',
      contrastText: '#ffffff'
    },
    warning:{
      main: '#F0AD4E',
      contrastText: '#ffffff'
    },
    success:{
      main: '#5cb85c',
      contrastText: '#ffffff'
    },
    info:{
      main: '#006c70',
      contrastText: '#ffffff'
    },
  };
  

  
  export const CSS_HELPERS_REACT = {
    CENTER: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    CENTER_VERTICAL: {
      display: 'flex',
      alignItems: 'center',
    },
    TRUNCATE: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    BOX_SHADOW: {
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px "
    },
    RADIUS_MD: {
    }
  
  
  
  };
  
  export const CSS_HELPERS = {
    CENTER: `
            display:flex;
            align-items: center;
            justify-content: center;
            flex-direction:row;
          
        `,

 
    CENTER_HORIZONTAL: `
            display:flex;
            justify-content: center;
        `,
    ROUNDED: `border-radius:12pt`,
    BOX_SHADOW: `
        -webkit-box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.123);
        -moz-box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.123);
        box-shadow: 0px 8px 6px -6px rgba(0,0,0,0.123);`
    ,
  
    RADIUS_MD: `border-radius:.9em;`,
  
    BUTTON_BASE:`
    position:relative;
    border: 0;
    outline: none;
    vertical-align: middle;
    justify-content: center;
    padding: 0;
    margin: 0;
    display: inline-flex;`
  };
  
  export const CSS_FONTS = {
    SIZES: {
      MENU: '.9em',
      H1: '2.5rem',
      H2: '2rem',
      H3: '1.75rem',
      H4: '1.5rem',
      H5: '1.25rem',
      H6: '1rem',
      MD: '1.5rem',
      SM: '1rem',
    },
    FONTS_URL: {
      BODY: 'https://fonts.googleapis.com/css?family=Poppins&display=swap',
      MENU: 'https://fonts.googleapis.com/css?family=Raleway&display=swap',
    },
    FONTS: {
      BODY: "'Poppins', sans-serif",
      MENU: "'Raleway', sans-serif;",
    },
  };
  
  export const MEDIA_SCREENS = {
    SMALL: {
      FROM: '0',
      TO: '768',
    },
    MEDIUM: {
      FROM: '768',
      TO: '4000',
    },
  };
  
  export { palette };
  
  