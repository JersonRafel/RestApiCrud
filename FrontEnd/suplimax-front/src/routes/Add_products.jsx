import { Outlet, Link } from "react-router-dom";
import MyForm from '../components/AddProduct'
import Header from './../components/Header'


function Add_Products(){

	return(
		<>
			<Header/>
			<h2 className='font-bold text-6xl text-center'>Agregar producto</h2>
			<MyForm/>

		</>

		)
}


export default Add_Products