import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Layout from './components/Layout'
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette:{
    primary: {
      light: '#5a6071',
      main: '#303646',
      dark: '#09101f',
    },
    secondary: {
      light: '#a2e4f5',
      main: '#70b2c2',
      dark: '#3f8292',      
    }
  },

  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          {/* <Switch>
            
            <Route path="/test">
              <div>fdsf</div>
            </Route>
          </Switch> */}
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
