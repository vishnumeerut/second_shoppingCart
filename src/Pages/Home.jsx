import { useContext, useEffect, useState } from "react";
import CategoryItem from "../Components/CategoryItem/CategoryItem";
import useCategory from "../Hooks/useCategory";
import UserContext from "../context/UserContext";
import useCart from "../Hooks/useCart";
import axiosinstance from "../Config/AxiosInstance";
import { getAllProducts } from "../Apis/FakeStoreProdApis";
import ProductBox from "../Components/ProductBox/ProductBox";
import SearchContext from "../context/SearchContext";
import Shimmer from "../Components/ShimmerUi/Shimmer";

function Home () {

    const [allProducts, setAllProducts] = useState([])
    const [categories] = useCategory()
    const {user} = useContext(UserContext)
    const [cart] = useCart(user ? user.id : undefined)
    const {inputText,} = useContext(SearchContext)
    let data = inputText.toLowerCase();
    const filteredArray = allProducts.filter((item) => {
        return item.title.toLowerCase().includes(data)
    })

    async function downloadAllProducts() {
        try{
            const response = await axiosinstance.get(getAllProducts())
            setAllProducts(response.data)
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        downloadAllProducts()
    }, [])

    if(allProducts.length === 0) {
        return (
            
            <> 
                <h1 className="text-2xl text-center mt-12">Please wait. Data is loading...</h1>
                <div className="flex gap-5 justify-center mt-10 mb-10 flex-wrap">

                <Shimmer productPrice={"20"} productName={"Men's Clothing"}/>
                <Shimmer productPrice={"30"} productName={"Men's Clothing"}/>
                <Shimmer productPrice={"25"} productName={"Men's Clothing"}/>
                <Shimmer productPrice={"39"} productName={"Men's Clothing"}/>

                </div>
            </>
        )
    }
    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className=" text-2xl md:text-6xl tracking-widest text-gray-700">Welcome to Shop Karo</h1>
            </div>
            <div className="flex justify-center gap-10 mt-16 flex-wrap">

                <CategoryItem itemName="All Products" />
                    {categories && categories.map((category) => <CategoryItem itemName={category} key={category} filter={category} /> )}

                
            </div>
            <div className="flex gap-5 justify-center mt-40 mb-10 flex-wrap">

                {filteredArray && filteredArray.map((product) => <ProductBox key={product.id} productId={product.id} name={product.title} price={product.price} productImage={product.image}/>)}
                
            </div>
        </>
    )
}

export default Home;