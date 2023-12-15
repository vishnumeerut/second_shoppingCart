import { useEffect, useState } from "react"
import { getAllCategories } from "../Apis/FakeStoreProdApis"
import axiosinstance from "../Config/AxiosInstance"

function useCategory () {
    const [categories, setCategory] = useState(null)

    async function downloadAllCategory () {
        
        const response = await axiosinstance.get(getAllCategories())
        setCategory(response.data)
    }

    useEffect(() => {
        downloadAllCategory()
    }, [])

    return [categories]
}

export default useCategory;