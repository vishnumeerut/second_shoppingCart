function Auth () {
    return (
        <div class="space-y-5">
                        <div>
                            <label for="" class="text-base font-medium text-gray-900">
                            {" "}
                            Email address{" "}
                            </label>
                            <div class="mt-2">
                            <input
                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="email"
                                placeholder="Email"
                            />
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center justify-between">
                            <label for="" class="text-base font-medium text-gray-900">
                                {" "}
                                Password{" "}
                            </label>
                            <a
                                href="#"
                                title=""
                                class="text-sm font-semibold text-black hover:underline"
                            >
                                {" "}
                                Forgot password?{" "}
                            </a>
                            </div>
                            <div class="mt-2">
                            <input
                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="password"
                                placeholder="Password"
                            />
                            </div>
                        </div>
                        <div>
                            <button
                            type="button"
                            class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                            >
                            Get started{" "}
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
                                class="ml-2"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                            </button>
                        </div>
        </div>
    )
}

export default Auth;