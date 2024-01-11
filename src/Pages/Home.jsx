import { useContext, useEffect, useState } from "react";
import CategoryItem from "../Components/CategoryItem/CategoryItem";
import useCategory from "../Hooks/useCategory";
import UserContext from "../context/UserContext";
import useCart from "../Hooks/useCart";
import axiosinstance from "../Config/AxiosInstance";
import { getAllProducts } from "../Apis/FakeStoreProdApis";
import ProductBox from "../Components/ProductBox/ProductBox";

function Home () {

    const [allProducts, setAllProducts] = useState([])
    const [categories] = useCategory()
    const {user} = useContext(UserContext)
    const [cart] = useCart(user ? user.id : undefined)

    async function downloadAllProducts() {
        try{
            const response = await axiosinstance.get(getAllProducts())
            console.log("response of all products", response.data)
            setAllProducts(response.data)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        downloadAllProducts()
    }, [])
    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="text-6xl tracking-widest text-gray-700">Welcome to Shop Cart</h1>
            </div>
            <div className="flex justify-center gap-10 mt-16">

                <CategoryItem itemName="All Products" />
                {categories && categories.map((category) => <CategoryItem itemName={category} key={category} filter={category} /> )}


                
            </div>
            <div className="flex gap-5 justify-center mt-40 mb-10 flex-wrap">

                {allProducts && allProducts.map((product) => <ProductBox key={product.id} productId={product.id} name={product.title} price={product.price} productImage={product.image}/>)}
                
            </div>
            {/* <h1>Home page</h1> */}
        </>
    )
}

export default Home;