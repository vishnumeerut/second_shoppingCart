import { useState } from "react";

function Auth ({onSubmit, flag}) {
    // console.log(flag)

    const [formDetails, setFormDetails] = useState({
        username: "", email: "", password: ""
    })
    // console.log("formdetails is", formDetails)

    function handleInputChange (e) {
        const {name,  value} = e.target;
        setFormDetails({
            ...formDetails,
            [name] : value,
        })

    }

    


    function onFormSubmit() {
        onSubmit(formDetails)
        setFormDetails({
            username: "", email: "", password: ""
        })
        
    }

    
    return (
        
            <div class="space-y-5">
                        <div>
                            <label for="name" class="text-base font-medium text-gray-900">
                            {" "}
                            Full Name{" "}
                            </label>
                            <div class="mt-2">
                            <input
                                name="username"
                                onChange={handleInputChange}
                                value={formDetails.username}
                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Full Name"
                                id="name"
                            />
                            </div>
                        </div>
                        {(flag == undefined) ? "" : <div>
                            <label for="email" class="text-base font-medium text-gray-900">
                            {" "}
                            Email address{" "}
                            </label>
                            <div class="mt-2">
                            <input
                                name="email"
                                onChange={handleInputChange}
                                value={formDetails.email}
                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="email"
                                placeholder="Email"
                                id="email"
                            />
                            </div>
                        </div>}
                        <div>
                            <div class="flex items-center justify-between">
                            <label
                                for="password"
                                class="text-base font-medium text-gray-900"
                            >
                                {" "}
                                Password{" "}
                            </label>
                            </div>
                            <div class="mt-2">
                            <input
                                name="password"
                                onChange={handleInputChange}
                                value={formDetails.password}
                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="password"
                                placeholder="Password"
                                id="password"
                            />
                            </div>
                        </div>
                        <div>
                            <button
                            onClick={onFormSubmit}
                            type="button"
                            class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                            >
                            Submit{" "}
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