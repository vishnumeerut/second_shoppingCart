import { useContext, useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";
import axiosinstance from "../../Config/AxiosInstance";
import Logo from "../../assets/logo.png";
import SearchContext from "../../context/SearchContext";

function Header() {
  const [token, setToken, removeToken] = useCookies(["jwt-token"]);
  const { user, setUser } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const {inputText, setInputText} = useContext(SearchContext);
  const [showNav, setShowNav] = useState(true);

  function logOut() {
    setUser(null);
    setCart(null);
    removeToken("jwt-token", { httpOnly: true });
    axiosinstance.get("logout", { withCredentials: true });
  }

  useEffect(() => {}, [token]);
  return (
    <>

      <nav className="bg-[#373A40] z-10 p-2 flex justify-between sticky top-0">
        {showNav ? (
          <div className="flex justify-between w-full">
            <div className="flex p-2 items-center gap-10">
              <div>
                <Link to={"/"} className="flex gap-2 items-center">
                  <img
                    className="object-cover max-w-12 max-h-12"
                    src={Logo}
                    alt="Logo"
                  />
                  <span className="text-2xl font-medium text-white">
                    ShopKaro
                  </span>
                </Link>
              </div>
            </div>
            <div className="relative hidden md:flex items-center w-1/4">
              <div className="hidden absolute inset-y-0 left-0 pl-3 lg:flex items-center pointer-events-none">
                <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
              </div>
              <input
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Search Your item here..."
                className="p-2 border border-gray-300 w-full text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
              />
            </div>
            <div className="hidden md:flex p-2 font-medium items-center gap-8">
              <p className="text-xl hidden md:block text-white">
                {user?.username ? user?.username : "UserName"}
              </p>

              <div className="relative">
                <i className="fa-solid fa-cart-shopping text-2xl text-white"></i>
                <span className="absolute top-[-8px] right-[-5px] bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {cart?.products?.length}
                </span>
              </div>
              <Link
                to={`cart/${user?.id}`}
                className="text-lg text-white cursor-pointer"
              >
                Cart
              </Link>

              {token["jwt-token"] ? (
                <Link
                  type="button"
                  onClick={() => {
                    logOut();
                  }}
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Log Out
                </Link>
              ) : (
                <Link
                  to={"/signin"}
                  type="button"
                  className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Log In
                </Link>
              )}
            </div>
            <button
              className="p-2 md:hidden"
              onClick={() => setShowNav(!showNav)}
            >
              <i className="fa-solid fa-bars text-gray-400 text-2xl"></i>
            </button>
          </div>
        ) : (
          <div
            id="nav-dialog"
            className="bg-white fixed z-10 md:hidden inset-0 p-3"
          >
            <div id="nav-bar" className="flex justify-between">
              <a href="#" id="brand" className="flex gap-2 items-center">
                <img
                  className="object-cover max-w-12 max-h-12"
                  src={Logo}
                  alt="Logo"
                />
                <span className="text-2xl font-medium">ShopKaro</span>
              </a>
              <button
                className="p-2 lg:hidden"
                onClick={() => setShowNav(!showNav)}
              >
                <i className="fa-solid text-2xl fa-xmark text-gray-600"></i>
              </button>
            </div>
            <div className="mt-6">
              <div className="relative flex items-center w-full mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
                </div>
                <input
                  type="text"
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Search Your item here..."
                  className="p-2 border border-gray-300 w-3/4 text-center rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
                <button className="bg-green-500 text-white ms-3 p-2 rounded-lg hover:bg-green-400" onClick={() => setShowNav(!showNav)}>Search</button>
              </div>
              <div className="h-[1px] bg-gray-300"></div>
              <div className="md:flex p-2 font-medium flex flex-col items-center gap-8">
              <p className="text-xl ">
                {(user?.username) ? user?.username : "UserName"}
              </p>
                <div className="relative">
                  <i className="fa-solid fa-cart-shopping text-2xl"></i>
                  <span className="absolute top-[-8px] right-[-5px] bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {cart?.products?.length}
                  </span>
                </div>
                <Link
                  to={`cart/${user?.id}`}
                  onClick={() => {
                    setShowNav(!showNav)
                  }}
                  className="text-xl cursor-pointer"
                >
                  Cart
                </Link>
                {token["jwt-token"] ? (
                  <Link
                    type="button"
                    onClick={() => {
                      logOut();
                      setShowNav(!showNav)
                    }}
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Log Out
                  </Link>
                ) : (
                  <Link
                    
                    to={"/signin"}
                    onClick={() => {
                        setShowNav(!showNav)
                    }}

                    type="button"
                    className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Log In
                  </Link>
                )}
              </div>
            </div>
            <div className="h-[1px] bg-gray-300"></div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
