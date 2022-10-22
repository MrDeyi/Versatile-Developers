import { Container,Col,Row } from 'react-bootstrap';
import './Leftpanel.css'
import Search from './components/Search.js'
import Your_groups from './components/Your_groups.js'
import Friends from './components/Friends.js'

function Leftpanel(){
    return(
      
        <div className='leftpanel'>
            <Search/>
            <Your_groups/>
            <Friends/>
        </div>
    );
}
export default Leftpanel;