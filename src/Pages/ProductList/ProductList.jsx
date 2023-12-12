import { useEffect, useState } from "react";
import ProductBox from "../../Components/ProductBox/ProductBox";
import axiosinstance from "../../Config/AxiosInstance";
import { getAllProductById, getAllProducts } from "../../Apis/FakeStoreProdApis";
import { useSearchParams } from "react-router-dom";

function ProductList () {
    const [allProducts, setAllProducts] = useState([])
    const [query] = useSearchParams()
    async function downloadAllProducts (category) {
        const downloadUrl = category ? getAllProductById(category) : getAllProducts();
        const response = await axiosinstance.get(downloadUrl)
        setAllProducts(response.data)
    }
    useEffect(() => {
        downloadAllProducts(query.get("category"))
    }, [])
    return (
        // <h1>procutList</h1>
        <>
            <h1 className="text-6xl text-center mt-10">All Products</h1>
            <div className="flex gap-5 justify-center mt-10 mb-10 flex-wrap">

                {/* <ProductBox name={"nike jordan Air"} price={"45$"}/> */}
                {allProducts && allProducts.map((product) => <ProductBox key={product.id} name={product.title} price={product.price} productImage={product.image}/>)}
                
            </div>
        </>
    )
}

export default ProductList;