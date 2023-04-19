import { Outlet, Link } from "react-router-dom";

function Header(){
	return (
		<>
			<header className='py-5'>		
				<div className='flex justify-around flex-wrap'>
					<input placeholder="search" className='w-2/4'></input>	
					<div className='flex flex-wrap'>
						<Link to='/' className='px-5'>Inicio</Link>
						<Link to='/products' className=''>Modificar productos</Link>
					</div>
				</div>
			</header>
		</>
		);
}

export default Header;