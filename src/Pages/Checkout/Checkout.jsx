import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [payment, setPayment] = useState({
        username : "", card : "", date : "", address: "", city: "", state: "", code: ""
    })
    const navigate = useNavigate()

    function handlePaymentDetail () {
        toast.success("Thanks, For Submitting");
        setPayment({
            username : "", card : "", date : "",  address: "", city: "", state: "", code: ""
        })
        navigate("/")
    }
    function handleFormDetail (e) {
        const {name, value} = e.target;
        setPayment({...payment, [name] : value})
    }
  return (
    <>
      <div class="mx-auto my-4 max-w-4xl md:my-6">
        <div class="overflow-hidden  rounded-xl shadow">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="px-5 py-6 text-gray-900 md:px-8">
              <div class="flow-root">
                <div class="-my-6 divide-y divide-gray-200">
                  <div class="py-6">
                    <form>
                      <div class="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                        <div>
                          <h3
                            id="contact-info-heading"
                            class="text-lg font-semibold text-gray-900"
                          >
                            Please Don't fill original credentials.
                          </h3>
                          <div class="mt-4 w-full">
                            <label
                              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              for="name"
                            >
                              Full Name
                            </label>
                            <input
                              class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                              type="text"
                              placeholder="Enter your name"
                              id="name"
                              value={payment.username}
                              name="username"
                              onChange={handleFormDetail}
                            />
                          </div>
                        </div>
                        <hr class="my-8" />
                        <div class="mt-10">
                          <h3 class="text-lg font-semibold text-gray-900">
                            Payment details
                          </h3>
                          <div class="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                            <div class="col-span-3 sm:col-span-4">
                              <label
                                for="cardNum"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Card number
                              </label>
                              <div class="mt-1">
                                <input
                                  class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                  type="text"
                                  placeholder="4242 4242 4242 4242"
                                  id="cardNum"
                                  value={payment.card}
                                  name="card"
                                  onChange={handleFormDetail}
                                />
                              </div>
                            </div>
                            <div class="col-span-2 sm:col-span-3">
                              <label
                                for="expiration-date"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Expiration date (MM/YY)
                              </label>
                              <div class="mt-1">
                                <input
                                   value={payment.date}
                                   name="date"
                                   onChange={handleFormDetail}
                                  type="date"
                                  id="expiration-date"
                                  autoComplete="cc-exp"
                                  class="block h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </div>
                            </div>
                            {/* <div>
                              <label
                                for="cvc"
                                class="block text-sm font-medium text-gray-700"
                              >
                                CVC
                              </label>
                              <div class="mt-1">
                                <input
                                  value={payment.cvc}
                                  name="date"
                                  onChange={handleFormDetail}
                                  type="text"
                                  id="cvc"
                                  autoComplete="csc"
                                  class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <hr class="my-8" />
                        <div class="mt-10">
                          <h3 class="text-lg font-semibold text-gray-900">
                            Shipping address
                          </h3>
                          <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                            <div class="sm:col-span-3">
                              <label
                                for="address"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Address
                              </label>
                              <div class="mt-1">
                                <input
                                     value={payment.address}
                                     name="address"
                                     onChange={handleFormDetail}
                                     type="text"
                                  id="address"
                                  autoComplete="street-address"
                                  class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                for="city"
                                class="block text-sm font-medium text-gray-700"
                              >
                                City
                              </label>
                              <div class="mt-1">
                                <input
                                value={payment.city}
                                onChange={handleFormDetail}
                                name="city"
                                  type="text"
                                  id="city"
                                  autoComplete="address-level2"
                                  class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                for="region"
                                class="block text-sm font-medium text-gray-700"
                              >
                                State / Province
                              </label>
                              <div class="mt-1">
                                <input
                                  value={payment.state}
                                  onChange={handleFormDetail}
                                  name="state"
                                  type="text"
                                  id="region"
                                  autoComplete="address-level1"
                                  class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                for="postal-code"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Postal code
                              </label>
                              <div class="mt-1">
                                <input
                                value={payment.code}
                                onChange={handleFormDetail}
                                name="code"
                                  type="text"
                                  id="postal-code"
                                  autoComplete="postal-code"
                                  class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
 
                        <div class="mt-10 flex justify-end border-t border-gray-200 pt-6">
                          <button
                            onClick={() => handlePaymentDetail()}
                            type="button"
                            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            Make payment
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
