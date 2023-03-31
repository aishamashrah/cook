import Searchpages from './Searchpages'




export default function Display() {
    return (
        <>
            <br></br>
            <br></br>

            <div class="grid grid-cols-12 gap-4 header p-5  border-black border mb-30  ">
                <div class="col-span-4 text-5xl font-lobster mx-48  sm:mx-4">Search</div>

                <label class="relative block col-span-8 mx-10 ">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2 ">
                        <svg class="z-0 w-5 h-5 " viewBox="0 0 20 20"></svg>
                    </span>
                    <input class="placeholder:italicawq23a block bg-white w-96  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search
                    sm:w-96" />
                </label>

                <div class="flex justify-center">
                    <div class="text-left">
                        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Search
                            <svg class="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div class=" inline-block text-left">
                        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Diets
                            <svg class="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div class=" inline-block text-left">
                        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900   hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Tags
                            <svg class="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>
                    <div class="inline-block text-left">
                        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Region
                            <svg class="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>
                    <div class=" inline-block text-left">
                        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            User
                            <svg class="-mr-1 h-5 w-5 text-black-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>



            <div class="mx-auto max-w-6xl  mt-10">

                <div class="grid gap-8  mx-20
                        md:grid-cols-3 
                        lg:grid-cols-3  lg:mx-10
                      
                        ">

                    <div> <Searchpages /></div>
                    <div> <Searchpages /> </div>
                    <div> <Searchpages /> </div>
                </div>
                <div class="grid  gap-8   mx-20
                        md:grid-cols-3 
                        lg:grid-cols-3  lg:mx-10
                        ">

                    <div> <Searchpages /></div>
                    <div> <Searchpages /> </div>
                    <div> <Searchpages /> </div>
                </div>
                <div class="grid gap-8  mx-20
                        md:grid-cols-3 
                        lg:grid-cols-3  lg:mx-10
                        ">

                    <div> <Searchpages /></div>
                    <div> <Searchpages /> </div>
                    <div> <Searchpages /> </div>
                </div>

            </div>

            <nav aria-label="Page navigation example ">
                <ul class="inline-flex -space-x-px p-5 my-10 mx-40 first-letter ">
                    <li>
                        <a href="#" class="px-7 py-2 ml-0 leading-tight text-gray-500 bg-white border text-blue-700 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" class="px-5 py-2 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" class="px-5 py-2 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" class="px-5 py-2 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                    </li>

                    <li>
                        <a href="#" class="px-6 py-2 leading-tight text-gray-500 bg-white border rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>

        </>

    )

}