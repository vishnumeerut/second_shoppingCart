import { Link, useNavigate } from "react-router-dom";
import Auth from "../../Components/Auth/Auth";
import axiosinstance from "../../Config/AxiosInstance";
import { signup } from "../../Apis/FakeStoreProdApis";

function Signup () {
    const navigator = useNavigate()

    return (
        <section className="mt-10 mb-5">
            <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
                <div class="absolute inset-0">
                <img
                    class="h-full w-full rounded-md object-cover object-top"
                    src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbnVwfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
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
                    Sign up
                </h2>
                <p class="mt-2 text-base text-gray-600">
                    Already have an account?{" "}
                    <Link to={"/signin"}
                    title=""
                    class="font-medium text-black transition-all duration-200 hover:underline"
                    >
                    Sign In
                    </Link>
                </p>
                <form action="#" method="POST" class="mt-8">
                    
                    <Auth 
                        onSubmit={async (authArguments) => {
                            await axiosinstance.post(signup(), {
                                username: authArguments.username,
                                email: authArguments.email,
                                password: authArguments.password,
                            })
                            navigator("/signin")
                        }}
                        flag={true}
                    />

                </form>
                
                </div>
            </div>
            </div>
        </section>

    )
}

export default Signup;