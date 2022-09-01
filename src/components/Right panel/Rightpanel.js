import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Rightpanel.css'
import ReactPlayer from 'react-player'

function Rightpanel() {

 

  return (
    
    <div className="rightpanel">
      
        <div className='tiktok'>
                        <div className='videos'>
                        <ReactPlayer
                         className='react-player'
                         url='https://www.youtube.com/watch?v=32GjzPu07M4'
                         width='100%'
                         height='90%'
                         border-radius='20%'
                         controls
                         />
                        </div>
                     <div className='views'>
                        view
                     </div>
                     <div className='comments'>
                        comments
                     </div>
                     <div className='comment'>
                        Add your comment
                     </div>
                </div>
      
    </div>
  );
}

export default Rightpanel;