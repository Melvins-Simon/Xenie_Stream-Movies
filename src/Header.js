const Header = document.querySelector("#Header");
Header.innerHTML = `
<nav class="w-full pt-1">
    <div class="container mx-auto max-sm:px-3 h-14 flex justify-between items-center">

        <div class="flex items-center lg:gap-10 gap-8">
            <div>               
                <a class="lg:hidden" href="index.html"> 
                <i class="fa-solid fa-house text-xl lg:text-2xl font-extrabold cursor-pointer hover:text-amber-500 ease-in-out md:hidden"></i>
                </a>
                <a class="text-lg font-bold hover:text-amber-500 duration-200 ease-in-out active:text-amber-200 max-md:hidden" href="index.html">Home</a>
            </div> 
            
            <div>
                <a class="lg:hidden" href="About.html"> 
                <i class="fa-solid fa-info text-xl lg:text-2xl font-extrabold cursor-pointer hover:text-amber-500 ease-in-out md:hidden"></i>
                </a>                
                <a class="text-lg font-bold hover:text-amber-500 duration-200 ease-in-out active:text-amber-200 max-md:hidden" href="About.html">About</a>
            </div>
        </div>

        <div class="flex items-center gap-4">
            <i class="fa-solid fa-sun text-xl lg:text-2xl cursor-pointer hover:text-amber-500 ease-in-out"></i>
            <span class="text-lg lg:text-xl flex items-center font-bold cursor-pointer hover:opacity-80 active:opacity-100 ease-in-out"><span class="px-3 lg:py-2 py-1 bg-amber-500 font-extrabold rounded-full uppercase text-xl lg:text-2xl">XNX</span>&nbsp;<Span class="bg-gradient-to-r from-amber-500 to-white text-transparent bg-clip-text max-md:hidden">Stream</Span></span>
        </div>

    </div>
</nav>
<div class="h-10 w-full flex lg:gap-10 gap-8 justify-center items-center">
    <span class="lg:text-xl text-lg font-bold bg-gradient-to-r from-amber-600 cursor-pointer hover:opacity-80 active:opacity-100 ease-in-out duration-200 select-none via-amber-400 to-amber-50 w-max text-transparent bg-clip-text">Trending</span>
    <span class="lg:text-xl text-lg font-bold bg-gradient-to-r from-amber-600 cursor-pointer hover:opacity-80 active:opacity-100 ease-in-out duration-200 select-none via-amber-400 to-amber-50 w-max text-transparent bg-clip-text">Top Rated</span>
</div>

<div class="pb-2 w-full flex justify-center items-center">
     <div class="relative w-[80%] lg:w-[30%] mx-auto">
     <input type="search" placeholder="Search trending movies..." class="w-full pl-8 pr-16 lg:py-3 py-2 rounded-full text-nowrap text-ellipsis outline-none border border-amber-500 lg:text-lg">
     <i class="fa-solid fa-magnifying-glass absolute top-0 bottom-0 right-8 my-auto z-10 lg:text-2xl text-lg font-bold hover:text-amber-400 h-max cursor-pointer"></i>   
     </div>
     
</div>
`;
