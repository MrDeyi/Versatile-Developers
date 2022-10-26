import { Container,Col,Row } from 'react-bootstrap';
import './Leftpanel.css'
import Search from './components/Search.js'
import Your_groups from './components/Your_groups.js'
import Friends from './components/Friends.js'
import Sidebar from '../Middle panel/components/components/Sidebar';

function Leftpanel(){
    return(
      
        <div className='leftpanel'>
            <Search/>
            <Your_groups/>
            <Sidebar/>
        </div>
    );
}
export default Leftpanel;