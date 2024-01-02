import { getCartByUser } from "../Apis/FakeStoreProdApis"
import axiosinstance from "../Config/AxiosInstance"

export async function fetchUserCart (userId, setCart) {
    const response = await axiosinstance.get(getCartByUser(userId))
    setCart(response.data[0])
}