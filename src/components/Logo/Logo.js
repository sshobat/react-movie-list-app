//import style
import './Logo.scss';
//import image
import logo from '../../images/logo.png';

const Logo = () => {
	return (
		<a className="logo" href="/">
			<img src={logo} alt="Movie Time logo"/>
		</a>
	);
}

export { Logo };