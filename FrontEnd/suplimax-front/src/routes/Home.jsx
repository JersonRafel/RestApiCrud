import { Outlet, Link } from "react-router-dom";
import Header from './../components/Header'
import index from '../components/index.css'
import Footer from "../components/Footer";
import UserCatalog from '../components/UserCatalog'

function Home(){
  return (
    <>
      <Header/>
      <h1 className="font-bold text-6xl text-center">Bienvenido a Suplimax</h1>
      <UserCatalog/>
      <Footer/>
    </>
  )
}

export default Home;