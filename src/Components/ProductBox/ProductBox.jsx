import { Link } from "react-router-dom";

function ProductBox ({price, name, productImage}) {
    return (
            <Link to={"/products/2"}>
                <div class="relative aspect-[16/9] mb-10  w-auto rounded-md md:aspect-auto md:h-[400px]">
                    <img
                        src={productImage}
                        alt="AirMax Pro"
                        class="z-0 h-full w-72 rounded-md object-cover"
                    />
                    <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-left">
                        <p class="mt-2 text-sm text-gray-300">
                        {name}
                        </p>
                        <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        {price + " $"}
                        </button>
                    </div>
                </div>
            </Link>
            

    )
}

export default ProductBox;