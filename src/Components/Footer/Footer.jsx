import { useState } from "react";
import toast from "react-hot-toast";

function Footer() {
  const [inputEmail, setInputEmail] = useState("")

  function handleInputEmail () {
    setInputEmail("");
    toast.success("Thank For Connecting With Us.");
  }
  return (
    // <footer class="w-full">
    //   <div class="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row ">
    //     <div class="w-full px-4 md:w-1/2 lg:px-0">
    //       <h1 class="max-w-sm text-3xl font-bold">
    //         Subscribe to our Newsletter
    //       </h1>
    //       <form class="mt-4 inline-flex w-full items-center md:w-3/4">
    //         <input
    //           class="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    //           type="email"
    //           placeholder="Your Email Here.."
    //           value={inputEmail}
    //           onChange={(e) => setInputEmail(e.target.value)}

    //         />
    //         <button
    //           onClick={() => handleInputEmail()}
    //           type="button"
    //           class="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             class="h-4 w-4"
    //           >
    //             <polyline points="9 18 15 12 9 6"></polyline>
    //           </svg>
    //         </button>
    //       </form>
    //     </div>
    //     <div class="mt-8 grid grid-cols-2  gap-48 md:mt-0 lg:w-3/4 lg:grid-cols-3">
    //       <div class="mb-8 lg:mb-0">
    //         <p class="mb-6 text-2xl font-bold text-black ">Connect With Me</p>
    //         <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">

    //           <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500">
    //             LinkedIn <i class="fa-brands fa-x-twitter"></i>
    //           </a>
    //           <a href="https://twitter.com/vishnumeerut" target="_blank" rel="noopener noreferrer" className="text-lg text-black">
    //             Twitter <i class="fa-brands fa-x-twitter"></i>
    //           </a>

    //         </ul>
    //       </div>
    //       <div class="mb-8 lg:mb-0">
    //         <p class="mb-6 text-2xl font-bold text-black ">Other Links</p>
    //         <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
    //         <a href="https://github.com/codewithVRV" target="_blank" rel="noopener noreferrer" className="text-lg text-black">
    //             GitHub <i class="fa-brands fa-github"></i>
    //           </a>
    //         <a href="https://leetcode.com/u/vishuraj2427/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500">
    //             LeetCode <i class="fa-solid fa-gear"></i>
    //           </a>
    //         </ul>
    //       </div>
    //       {/* <div class="mb-8 lg:mb-0">
    //         <p class="mb-6 text-lg font-semibold text-gray-700 ">Company</p>
    //         <ul class="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
    //           <li>About us</li>
    //           <li>Company History</li>
    //           <li>Our Team</li>
    //           <li>Our Vision</li>
    //           <li>Press Release</li>
    //         </ul>
    //       </div> */}
    //     </div>
    //   </div>
    //   <hr class="my-4" />

    //   <div class="mt-4 md:mt-0 mb-8">
    //     <p class="text-xl font-medium text-gray-500 text-center">
    //       © All rights reserved by {import.meta.env.VITE_COPY_RIGHT}
    //     </p>
    //   </div>
    // </footer>
    <footer className="w-full bg-white">
    <div className="mx-auto max-w-6xl flex flex-col items-start md:flex-row md:items-start md:space-x-8 p-4">
      <div className="w-full md:w-1/2 lg:px-0">
        <h1 className="max-w-sm text-3xl font-bold mb-4">Subscribe to our Newsletter</h1>
        <form className="inline-flex w-full items-center md:w-3/4">
          <input
            className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Your Email Here.."
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <button
            onClick={() => handleInputEmail()}
            type="button"
            className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </form>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-16 md:mt-0 lg:w-3/4 lg:grid-cols-3">
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-2xl font-bold text-black">Contact Me</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <li>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500">
                LinkedIn <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/vishnumeerut" target="_blank" rel="noopener noreferrer" className="text-lg text-black">
                Twitter <i class="fa-brands fa-x-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-2xl font-bold text-black">Other Links</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
            <li>
              <a href="https://github.com/codewithVRV" target="_blank" rel="noopener noreferrer" className="text-lg text-black">
                GitHub <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/u/vishuraj2427/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500">
                LeetCode <i class="fa-solid fa-gear"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-4" />
    <div className="mt-4 md:mt-0 mb-8 text-center">
      <p className=" text-lg p-4  md:text-2xl font-medium text-gray-500">
        © All rights reserved by {import.meta.env.VITE_COPY_RIGHT}
      </p>
    </div>
  </footer>
  );
}

export default Footer;
