import { Button,Container,Col,Row } from 'react-bootstrap';
import Leftpanel from '../Left panel/Leftpanel.js';
import Middlepanel from '../Middle panel/Middlepanel.js';
import Rightpanel from '../Right panel/Rightpanel.js'
import './Home.css'

function Home(){
    return(
      <div className="home" data-testid="home">
         <Leftpanel/>
         <Middlepanel/>
         <Rightpanel/>
      </div>

    );
}
export default Home;