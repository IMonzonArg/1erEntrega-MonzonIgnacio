import CartWidget from "../CartWidget/CartWidget"
import '../navbar/NavBar.css';

const NavBar = () => {
    return(
        <nav>
            <h3 className="titulo">3ER Brother Bebidas</h3>
            <div className="navbarButtons">
                <button>Bebidas sin alcohol</button>
                <button>Destilados</button>
                <button>Espirituosas</button>
                <button>Cervezas y vinos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar