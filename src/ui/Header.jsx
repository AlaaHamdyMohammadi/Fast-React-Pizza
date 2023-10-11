import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header>
            <Link to='/' className="text-yellow-500">Fast React Pizza Co.</Link>  
            <SearchOrder/> 
            <p>Alaa</p>         
        </header>
    )
}

export default Header
