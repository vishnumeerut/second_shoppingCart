import { useParams, useRouteError } from "react-router-dom";
import axiosinstance from "../../Config/AxiosInstance";
import { getCartByUser, getSingleProductById } from "../../Apis/FakeStoreProdApis";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import useCart from "../../Hooks/useCart";
import axios from "axios";
import OrderDetailsProduct from "../../Components/OrderDetailsProduct/OrderDetailsProduct";

function Cart () {

    // const {userId} = useParams()
    // const [cart, setCart] = useCart(userId)
    const [products, setProducts] = useState([])
    const {cart, setCart} = useContext(CartContext)



    async function downloadCartProducts(cart) {
        if(!cart || !cart.products) return;
        const productQuantityMapping = {};
        cart.products.forEach(product => {
            productQuantityMapping[product.productId] = product.quantity;
        })
        const productPromise = cart.products.map(product => axiosinstance.get(getSingleProductById(product.productId)))
        const productPromiseResponse = await axios.all(productPromise)
        const downloadedProducts = productPromiseResponse.map((product) => ({...product.data, quantity: productQuantityMapping[product.data.id]}))
        console.log(downloadedProducts)
        setProducts(downloadedProducts)

    }

    useEffect(() => {

        downloadCartProducts(cart)
    }, [cart])

    return (
        <div class="mx-auto max-w-7xl px-2 lg:px-0">
            <div class="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <h1 class="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">
                Shopping Cart
                </h1>
                <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                <section
                    aria-labelledby="cart-heading"
                    class="rounded-lg bg-white lg:col-span-8"
                >
                    <h2 id="cart-heading" class="sr-only">
                    Items in your shopping cart
                    </h2>
                    <ul role="list" class="divide-y divide-gray-200">
                        
                        {products && products.map(product => <OrderDetailsProduct key={product.id} 
                                                                    name={product.title} image={product.image} 
                                                                    quantity={product.quantity}
                                                                    price={product.price} />)}

                    </ul>
                </section>
                <section
                    aria-labelledby="summary-heading"
                    class="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                >
                    <h2
                    id="summary-heading"
                    class=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                    >
                    Price Details
                    </h2>
                    <div>
                    <dl class=" space-y-1 px-2 py-4">
                        <div class="flex items-center justify-between">
                        <dt class="text-sm text-gray-800">Price (3 item)</dt>
                        <dd class="text-sm font-medium text-gray-900">₹ 52,398</dd>
                        </div>
                        <div class="flex items-center justify-between pt-4">
                        <dt class="flex items-center text-sm text-gray-800">
                            <span>Discount</span>
                        </dt>
                        <dd class="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                        </div>
                        <div class="flex items-center justify-between py-4">
                        <dt class="flex text-sm text-gray-800">
                            <span>Delivery Charges</span>
                        </dt>
                        <dd class="text-sm font-medium text-green-700">Free</dd>
                        </div>
                        <div class="flex items-center justify-between border-y border-dashed py-4 ">
                        <dt class="text-base font-medium text-gray-900">Total Amount</dt>
                        <dd class="text-base font-medium text-gray-900">₹ 48,967</dd>
                        </div>
                    </dl>
                    <div class="px-2 pb-4 font-medium text-green-700">
                        You will save ₹ 3,431 on this order
                    </div>
                    </div>
                </section>
                </form>
            </div>
        </div>

    )
}

export default Cart;