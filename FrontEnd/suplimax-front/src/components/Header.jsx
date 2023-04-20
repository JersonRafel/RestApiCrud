import { Outlet, Link } from "react-router-dom";

function Header(){
	return (
		<>
			<header className='py-5'>		
				<div className='flex justify-around flex-wrap items-center'>
					<input placeholder="Buscar producto" className='w-2/4 border-2 border-orange-600 rounded-lg py-1 px-2'></input>	
					<div className='flex flex-wrap'>
						<Link to='/' className='px-2'>Inicio</Link>
						<Link to='/products' className='px-2'>Modificar productos</Link>
						<Link to='/add_product' className=''>Agregar producto</Link>
					</div>
				</div>
			</header>
		</>
		);
}

export default Header;