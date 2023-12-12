import { useEffect, useState } from "react";
import CategoryItem from "../Components/CategoryItem/CategoryItem";
import axios from "axios";
import axiosinstance from "../Config/AxiosInstance";
import { getAllCategories } from "../Apis/FakeStoreProdApis";
import { useSearchParams } from "react-router-dom";

function Home () {
    const [categories, setCategory] = useState(null)

    async function downloadAllCategory () {
        
        const response = await axiosinstance.get(getAllCategories())
        setCategory(response.data)
    }

    useEffect(() => {
        downloadAllCategory()
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
            {/* <h1>Home page</h1> */}
        </>
    )
}

export default Home;