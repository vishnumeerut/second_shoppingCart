import { useContext, useEffect } from "react"
import CartContext from "../context/CartContext"
import { getCartByUser } from "../Apis/FakeStoreProdApis"
import axiosinstance from "../Config/AxiosInstance"

function useCart (userId) {
    const {cart, setCart} = useContext(CartContext)

    async function fetchUserCart (userId) {
        const response = await axiosinstance.get(getCartByUser(userId))
        setCart(response.data[0])
    }

    useEffect(() => {
        fetchUserCart (userId)
    }, [userId])

    return [cart, setCart]
}


export default useCart;