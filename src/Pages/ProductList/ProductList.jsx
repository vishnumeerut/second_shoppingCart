import ProductBox from "../../Components/ProductBox/ProductBox";

function ProductList () {
    return (
        // <h1>procutList</h1>
        <>
            <h1 className="text-6xl text-center mt-10">All Products</h1>
            <div className="flex gap-5 justify-center mt-5 mb-10 flex-wrap">
                <ProductBox name={"nike jordan Air"} price={"45$"}/>
                
            </div>
        </>
    )
}

export default ProductList;