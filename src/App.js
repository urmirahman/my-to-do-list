import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {useMediaQuery} from '@material-ui/core'
function App() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <div className="App">
      <Container className={` ${matches ? classes.container : classes.testMedia} `}> dssdf dfsdfsdfsdfsd</Container>
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  testMedia:{
    background: 'linear-gradient(45deg, blue 30%, indigo 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  }
});
