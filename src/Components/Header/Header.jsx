import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";

function Header () {
    
    const [token, setToken, removeToken] = useCookies(["jwt-token"])
    const {user, setUser} = useContext(UserContext)
    const {cart, setCart} = useContext(CartContext)
    

    useEffect(() => {
        
    }, [token])
    return (
        <div className="relative w-full bg-gray-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                
                <Link to={"/"}>
                 <span className="font-semibold text-2xl mx-10">ShopCart</span>

                </Link>
                <div className="flex grow justify-end">
                    <input
                        className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Serach"
                    />
                </div>
                </div>
                <div className="hidden grow items-start lg:flex">
                
                
                
                </div>
                <div className="hidden space-x-2 lg:block">
                <ul className="ml-12 inline-flex space-x-8">
                  
                {user && <li>
                    <a
                        href="#"
                        className="inline-flex items-center text-lg  font-semibold  hover:text-gray-700"
                    >
                        {user.username}
                        
                    </a>
                    </li>
                        
                    }
                    <li>
                    <a
                        href="#"
                        className="inline-flex items-center text-lg  font-semibold hover:text-gray-700"
                    >
                        Cart{"  " + cart.products.length}
                        
                    </a>
                    </li>
                </ul>
            {token["jwt-token"] ?<Link
                type="button"
                onClick={() => {
                    setUser(null)
                    removeToken("jwt-token")
                }}
                    
                className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                Log Out
            </Link>  : 
            <Link  to={"/signin"}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
                Log In
            </Link>
            }
            
                </div>
                <div className="lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 cursor-pointer"
                >
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
                </div>
            </div>
        </div>
    );
}

export default Header;