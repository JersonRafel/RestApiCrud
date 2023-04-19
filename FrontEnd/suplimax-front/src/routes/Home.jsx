import { Outlet, Link } from "react-router-dom";
import Header from './../components/Header'
import HomeCatalog from '../components/HomeCatalog'
import index from '../components/index.css'

function Home(){
  return (
    <>
      <Header/>
      <h1 className="font-bold text-6xl text-center">Bienvenido a Suplimax</h1>
      <HomeCatalog/>
    </>
  )
}

export default Home;