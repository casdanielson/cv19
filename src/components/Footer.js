import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
           <p>Copyright &copy; 2021 Rapture Dev</p> 
           <Link to="/about">App Info</Link>
        </footer>
    )
}

export default Footer
