const button = {
  default: {
    background: '#777',
  },
  primary: {
    background: '#2d4a8d',
  },
  remove: {
    background: '#aa2525',
  },
  full: {
    paddingLeft: '12rem'
  },
};

const header = {
  default: {
    padding: '0',
  },
  full: {
    paddingLeft: '12rem'
  },
};

const theme = {
  button,
  header,
  breakpoints: {
    xs: '400px',
    s: '600px',
    xm: '750px',
    m: '900px',
    l: '1200px',
  },
};

export default theme;