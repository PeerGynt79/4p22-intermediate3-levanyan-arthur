import { Link } from 'react-router-dom';
import './styles.css';

function MyComponentFooter() {
    return (
        <footer className="footer" >
            <div className="footer__block">
                <Link to = {'/'}>Каталог</Link>
            </div>
        </footer>        
    )
}
export default MyComponentFooter;
