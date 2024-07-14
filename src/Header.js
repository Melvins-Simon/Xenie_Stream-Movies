const Header = document.querySelector("#Header");
Header.innerHTML = `
<nav class="w-full p-3 bg-[#012345] relative top-0">
    <div class="container mx-auto h-14 flex justify-between items-center">

        <div class="flex items-center lg:gap-10 gap-8">
            <div>               
                <a class="lg:hidden" href="index.html"> 
                <i class="fa-solid fa-house text-2xl font-extrabold cursor-pointer hover:text-amber-500 ease-in-out md:hidden"></i>
                </a>
                <a class="text-lg font-bold hover:text-amber-500 duration-200 ease-in-out active:text-amber-200 max-md:hidden" href="index.html">Home</a>
            </div> 
            
            <div>
                <a class="lg:hidden" href="About.html"> 
                <i class="fa-solid fa-info text-2xl font-extrabold cursor-pointer hover:text-amber-500 ease-in-out md:hidden"></i>
                </a>                
                <a class="text-lg font-bold hover:text-amber-500 duration-200 ease-in-out active:text-amber-200 max-md:hidden" href="About.html">About</a>
            </div>
        </div>

        <div class="flex items-center gap-4">
            <i class="fa-solid fa-sun text-2xl cursor-pointer hover:text-amber-500 ease-in-out"></i>
            <span class="text-lg lg:text-xl flex items-center font-bold cursor-pointer hover:opacity-80 active:opacity-100 ease-in-out"><span class="px-3 py-2 bg-amber-500 font-extrabold rounded-full uppercase text-xl lg:text-2xl">XNX</span>&nbsp;<Span class="bg-gradient-to-r from-amber-500 to-white text-transparent bg-clip-text max-md:hidden">Stream</Span></span>
        </div>

    </div>
</nav>
`;
