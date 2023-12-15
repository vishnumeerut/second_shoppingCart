import CategoryItem from "../Components/CategoryItem/CategoryItem";
import useCategory from "../Hooks/useCategory";

function Home () {

    const [categories] = useCategory()

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