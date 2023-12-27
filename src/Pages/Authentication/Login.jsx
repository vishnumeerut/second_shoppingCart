import { Link, useNavigate } from "react-router-dom";
import Auth from "../../Components/Auth/Auth";
import axiosinstance from "../../Config/AxiosInstance";
import { signin } from "../../Apis/FakeStoreProdApis";
import toast from "react-hot-toast";

function Login () {
    const navigator = useNavigate()

    async function onAuthFormSubmit (formdetails) {
        try{
            const response = await axiosinstance.post(signin(), {
                username: formdetails.username,
                password: formdetails.password,
            })
            navigator("/")
            // console.log("response of login", response)
        }
        catch(error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    return (
        <>
            <section className="mt-10 mb-5">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
                    <div class="absolute inset-0">
                    <img
                        class="h-full w-full rounded-md object-cover object-top"
                        src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                        alt=""
                    />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div class="relative">
                    <div class="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                        <h3 class="text-4xl font-bold text-white">
                        Now you dont have to rely on your designer to create a new page
                        </h3>
                        <ul class="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                        <li class="flex items-center space-x-3">
                            <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                            <svg
                                class="h-3.5 w-3.5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </div>
                            <span class="text-lg font-medium text-white">
                            {" "}
                            Commercial License{" "}
                            </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                            <svg
                                class="h-3.5 w-3.5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </div>
                            <span class="text-lg font-medium text-white">
                            {" "}
                            Unlimited Exports{" "}
                            </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                            <svg
                                class="h-3.5 w-3.5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </div>
                            <span class="text-lg font-medium text-white">
                            {" "}
                            120+ Coded Blocks{" "}
                            </span>
                        </li>
                        <li class="flex items-center space-x-3">
                            <div class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                            <svg
                                class="h-3.5 w-3.5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                ></path>
                            </svg>
                            </div>
                            <span class="text-lg font-medium text-white">
                            {" "}
                            Design Files Included{" "}
                            </span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                        Sign in
                    </h2>
                    <p class="mt-2 text-sm text-gray-600">
                        Don&#x27;t have an account?{" "}
                        <Link to={"/signup"}
                        title=""
                        class="font-semibold text-black transition-all duration-200 hover:underline"
                        >
                        Create a free account
                        </Link>
                    </p>
                    <form action="#" method="POST" class="mt-8">
                        <Auth 
                        
                            onSubmit={onAuthFormSubmit}
                        />
                    </form>
                    
                    </div>
                </div>
                </div>
            </section>

        </>
    )
}

export default Login;