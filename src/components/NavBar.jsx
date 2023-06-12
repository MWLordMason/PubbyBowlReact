import { Link } from 'react-router-dom';

    function NavBar() {
    return (
    <nav id='navbar'>
    <Link to='/' className='links'>Home</Link>
    <Link to='/players' className='links'>Roster</Link>
    </nav>
    )
    }
    
export default NavBar