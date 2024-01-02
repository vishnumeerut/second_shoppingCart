import { useContext } from "react";
import CategoryItem from "../Components/CategoryItem/CategoryItem";
import useCategory from "../Hooks/useCategory";
import UserContext from "../context/UserContext";
import useCart from "../Hooks/useCart";

function Home () {

    const [categories] = useCategory()
    const {user} = useContext(UserContext)
    const [cart] = useCart(user ? user.id : undefined)

    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="text-6xl tracking-widest text-gray-700">Welcome to Shop Cart</h1>
            </div>
            <div className="flex justify-center gap-10 mt-16">

                <CategoryItem itemName="All Products" />
                {categories && categories.map((category) => <CategoryItem itemName={category} key={category} filter={category} /> )}


                
            </div>
            {/* <h1>Home page</h1> */}
        </>
    )
}

export default Home;