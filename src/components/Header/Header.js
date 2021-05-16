//import modules
import {Component} from 'react';
//import style
import './Header.scss';
//import components
import SearchField from '../SearchField/SearchField';
import {Logo} from '../Logo/Logo';

class Header extends Component{

	render() {
		return (
			<header>
				<div className="main-wrapper">
					<Logo />
					<SearchField />
				</div>
			</header>
		);
	}
}

export { Header };