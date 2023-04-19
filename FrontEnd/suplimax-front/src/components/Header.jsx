import { Outlet, Link } from "react-router-dom";

function Header(){
	return (
		<>
			<Link to='/'>Home</Link>
			<Link to='/products'>Products</Link>
		</>
		);
}

export default Header;