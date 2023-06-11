import { Link } from 'react-router-dom';

    function NavBar() {
    return (
    <nav>
    <Link to='/'>Home</Link>
    <Link to='/players'>All Players</Link>
    </nav>
    )
    }
    
export default NavBar