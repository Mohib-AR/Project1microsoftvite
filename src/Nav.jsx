function Nav(){
    return (
        <nav>
<ul className="flex"> 
  <li className="w-1/2">
    <ul
      className="flex md:mt-5 cursor-pointer md:ml-16 md:justify-around space-x-5 md:text-sm md:font-light"
    >
      <li className="md:hidden">
        <img src="hamburger.png" className="w-5 ml-3 mt-3" alt="" />
      </li>
      <li className="md:hidden">
        <img src="search.png" className="w-6 mt-3 ml-2" />
      </li>
      <li>
        <img
          alt="MS image"
          className="w-32 mt-2 ml-12 md:ml-0 md:mt-0"
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
        />
      </li>
      <li className="mt-1 hidden md:inline">Microsoft 365</li>
      <li className="mt-1 hidden md:inline">Office</li>
      <li className="mt-1 hidden md:inline">Copilot</li>
      <li className="mt-1 hidden md:inline">Windows</li>
      <li className="mt-1 hidden md:inline">Support</li>
    </ul>
  </li>
 
  <li className="w-1/2">
    <ul
      className="flex cursor-pointer md:ml-60 space-x-6 md:space-x-10 md:mr-4 md:mt-6 md:text-sm md:font-light"
    >
      <li className="hidden md:inline">All Microsoft</li>
      <li className="hidden md:inline">
        <span className="flex"
          >Search
          <img src="search.png" className="ml-1 w-6 h-6" alt="" />
        </span>
      </li>
      <li className="flex">
        <span className="hidden md:inline">Cart</span>
        <img
          src="cart.png 
          "
          className="ml-20 w-6 h-6 mt-2 md:ml-1 md:mt-0 md:w-6 md:h-6"
          alt=""
        />
      </li>
      <li className="flex">
        <span className="hidden md:inline">Signin</span>
        <img
          src="login.png"
          className="w-11 h-10 ml-1 md:ml-2 md:w-10 md:-mt-2"
          alt=""
        />
      </li>
    </ul>
  </li>
</ul>
        </nav>
    )
}
export default Nav