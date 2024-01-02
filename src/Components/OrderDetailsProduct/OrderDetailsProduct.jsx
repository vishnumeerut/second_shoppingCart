function OrderDetailsProduct ({image, name, price, quantity}) {
    const availableQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div class="">
            <li class="flex py-6 sm:py-6 ">
            <div class="flex-shrink-0">
                <img
                src={image}
                alt={image}
                class="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                />
            </div>
            <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                <div>
                    <div class="flex justify-between">
                    <h3 class="text-sm">
                        <a href="#" class="font-semibold text-black">
                        {name}
                        </a>
                    </h3>
                    </div>
                    <div class="mt-1 flex text-sm">
                    <p class="text-sm text-gray-500">Orange</p>
                    <p class="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                        8 UK
                    </p>
                    </div>
                    <div class="mt-1 flex items-end">
                    <p class="text-xs font-medium text-gray-500 line-through">
                        ₹{price}
                    </p>
                    <p class="text-sm font-medium text-gray-900">  ₹47,199</p>
                      <p class="text-sm font-medium text-green-500">5% Off</p>
                    </div>
                </div>
                </div>
            </div>
            </li>
            <div class="mb-2 flex">
            <div class="min-w-24 flex">
                <button type="button" class="h-7 w-7">
                -
                </button>
                {/* <select>
                    {availableQuantity.map(id => <option selected={quantity == id} value={id} key={id}>{id}</option>)}
                </select> */}
                <input
                type="text"
                class="mx-1 h-7 w-9 rounded-md border text-center"
                value={quantity}
                />
                <button
                type="button"
                class="flex h-7 w-7 items-center justify-center"
                >
                +
                </button>
            </div>
            <div class="ml-6 flex text-sm">
                <button
                type="button"
                class="flex items-center space-x-1 px-2 py-1 pl-0"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-red-500"
                >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
                <span class="text-xs font-medium text-red-500">Remove</span>
                </button>
            </div>
            </div>
        </div>
    )
}

export default OrderDetailsProduct;