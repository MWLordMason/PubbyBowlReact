import { Link } from 'react-router-dom';
import '/home/mwlordmason/coursework/week1/variables/PuppyBowlReact/PuppyBowlReact/src/index.css'


    function NavBar() {
    return (
    <nav id='navbar'>
    <Link to='/' className='links'>Home</Link>
    <Link to='/players' className='links'>Roster</Link>
    </nav>
    )
    }
    
export default NavBar