import { useNavigate, useParams } from "react-router-dom";
import axiosinstance from "../../Config/AxiosInstance";
import { useContext, useEffect, useState } from "react";
import { addProductToCart, getSingleProductById } from "../../Apis/FakeStoreProdApis";
import CartContext from "../../context/CartContext";
import UserContext from "../../context/UserContext";

function ProductDetails () {

    const {id} = useParams()
    const [singleProduct, setSingleProduct] = useState([])
    const {cart, setCart} = useContext(CartContext)
    const {user} = useContext(UserContext)
    const navigator = useNavigate()

    async function downloadSingleProduct (id) {
        const response = await axiosinstance.get(getSingleProductById(id))
        setSingleProduct(response.data)
    }

    async function onAddingProduct () {
        if(!user) return;
        const response = await axiosinstance.put(addProductToCart(), {userId: user.id, productId: id})
        setCart({...response.data})
        navigator(`/cart/${+user.id}`)
    }
    useEffect(() => {
        downloadSingleProduct(id)
    }, [])

    return (
        <>
            <section class="overflow-hidden">
                <h1 className="text-center mt-10 text-4xl text-gray-600">This is {singleProduct.category} Product.</h1>
                <div class="mx-auto max-w-5xl px-5 py-24">
                <div class="mx-auto flex flex-wrap items-center lg:w-4/5">
                    <img
                    alt={singleProduct.title}
                    class="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                    src={singleProduct.image}
                    />
                    <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                   
                    <h1 class="my-4 text-3xl font-semibold text-black">{singleProduct.title}</h1>
                    <div class="my-4 flex items-center">
                        <span class="flex items-center space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="text-yellow-500"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="text-yellow-500"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="text-yellow-500"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="text-yellow-500"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="text-yellow-500"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span class="ml-3 inline-block text-xs font-semibold">
                            4 Reviews
                        </span>
                        </span>
                    </div>
                    <p class="leading-relaxed">
                    {singleProduct.description}
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="title-font text-xl font-bold text-gray-900">
                        ${singleProduct.price}
                        </span>
                        {user && 
                            <button
                            onClick={onAddingProduct}
                            type="button"
                            class="rounded-md bg-black px-3 py-2 mt-4 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                            Add to Cart
                            </button>
                        }
                    </div>
                    </div>
                </div>
                </div>
            </section>

        </>
    )
}

export default ProductDetails;