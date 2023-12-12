import CategoryItem from "../Components/CategoryItem/CategoryItem";

function Home () {
    return (
        <>
            <div className="flex justify-center mt-10">
                <h1 className="text-6xl tracking-widest">Welcome to Shop Cart</h1>
            </div>
            <div className="flex justify-center gap-4 mt-16">

                <CategoryItem itemName="All Products" />


                
            </div>
            {/* <h1>Home page</h1> */}
        </>
    )
}

export default Home;