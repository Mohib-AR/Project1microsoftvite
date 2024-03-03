function Footer(){
    return (
        <div className="footer bg-[#f2f2f2] h-fit md:h-[27rem] mt-24">
        <div
          className="flex flex-col md:flex-row md:space-x-16 leading-8 font-extralight text-sm pt-8 pl-8 md:pl-20"
        >
          <ul className="cursor-pointer">
            <li className="font-medium text-lg tracking-wide">Microsoft store</li>
            <li>Account profile</li>
            <li>Download center</li>
            <li>Returns</li>
            <li>Order tracking</li>
          </ul>
          <ul className="cursor-pointer">
            <li className="font-medium pt-8 md:pt-0 text-lg tracking-wide">
              Education
            </li>
            <li>Microsoft in education</li>
            <li>Microsoft teams for Education</li>
            <li>Microsoft 365 Education</li>
            <li>Office Education</li>
            <li>Educator training and development</li>
            <li>Deals for students and parents</li>
            <li>Azure for students</li>
          </ul>
          <ul className="cursor-pointer">
            <li
              className="font-medium pt-8 md:pt-0 font-[Seogoe UI] text-lg tracking-wide"
            >
              Business
            </li>
            <li>Microsoft Cloud</li>
            <li>Microsoft Security</li>
            <li>Azure</li>
            <li>Dynamic 365</li>
            <li>Microsoft 365</li>
            <li>Microsoft Advertising</li>
            <li>Microsoft Industry</li>
            <li>Microsoft Teams</li>
          </ul>
          <ul className="cursor-pointer">
            <li className="font-medium text-lg pt-8 md:pt-0 tracking-wide">
              Developer and IT
            </li>
            <li>Documentation</li>
            <li>Microsoft Learn</li>
            <li>Microsoft tech Community</li>
            <li>Azure Marketplace</li>
            <li>AppSource</li>
            <li>Microsoft Power Platform</li>
            <li>Visual Studio</li>
          </ul>
          <ul className="cursor-pointer">
            <li className="font-medium text-lg pt-8 md:pt-0 tracking-wide">
              Company
            </li>
            <li>Careers</li>
            <li>About Microsoft</li>
            <li>Company news</li>
            <li>Privacy at Microsoft</li>
            <li>Investors</li>
            <li>Sutainability</li>
          </ul>
        </div>
        <div
          className="flex md:flex-row font-extralight justify-between text-xs pt-10 pr-10"
        >
          <ul className="flex cursor-pointer">
            <li className="flex pl-20">
              <img src="earth.png" className="w-5" alt="" />
              <span className="pl-2">English(Pakistan)</span>
            </li>
            <li className="pl-8">Your Privacy Choices</li>
          </ul>
          <ul className="flex mr-14 w-[36rem] justify-around cursor-pointer">
            <li className="hover:underline">Contact Microsoft</li>
            <li className="hover:underline">Privacy</li>
            <li className="hover:underline">Terms of use</li>
            <li className="hover:underline">Trade marks</li>
            <li className="hover:underline">About our ads</li>
            <li className="flex">
              <img
                src="copyright-symbol.png"
                className="bg-[#f2f2f2] w-3 h-3 mt-[0.15rem]"
                alt=""
              /><span className="pl-2">Micosoft 2024</span>
            </li>
          </ul>
        </div>
      </div>
    )
}
export default Footer;