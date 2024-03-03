function Cards(){
   return ( 
   <div className="flex flex-col md:flex-row md:mt-6 md:ml-3">
    <div className="card mt-7 mx-3">
      <img
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Windows11-GlobalLaunch?wid=406&amp;hei=230&amp;fit=crop"
        className="md:w-80"
      />
      <div
        className="text-xl font-medium ml-1 w-80 mx-3 mt-3 md:text-2xl md:font-semibold tracking-wide md:mt-3"
      >
        Designed for life today - and
        <span className="">tomorrow</span>
      </div>
      <div
        className="font-light ml-1 mt-3 md:w-80 md:leading-[1.75rem] md:text-base md:font-normal"
      >
        The next-generation of games. Your goals. Friends and family. Windows
        11 was made to bring you closer to everything you love.
      </div>
      <p className="text-lg text-blue-700 font-medium ml-1 mt-2 tracking-wide">
        See if your PC is ready 
      </p>
    </div>
    <div className="card mt-7 mx-3">
      <img
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-MSFT-CP-Edge?wid=406&amp;hei=230&amp;fit=crop"
        className="md:w-80"
      />
      <div
        className="text-xl font-medium ml-1 w-80 mx-3 mt-3 md:text-2xl md:font-semibold tracking-wide md:mt-3"
      >
        Microsoft Edge
      </div>
      <div
        className="font-light ml-1 mt-2 md:w-80 md:leading-[1.75rem] md:text-base md:font-normal"
      >
        World className performance with more privacyand more productivity and
        more value while you browse.
      </div>
      <p className="text-lg text-blue-700 font-medium ml-1 mt-2 tracking-wide">
        Download now 
      </p>
    </div>
    <div className="card mt-7 mx-3">
      <img
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-PC-SMB-OneNote?wid=406&amp;hei=230&amp;fit=crop
        "
        className="md:w-80"
      />
      <div
        className="text-xl font-medium ml-1 w-80 mx-3 mt-3 md:text-2xl md:font-semibold tracking-wide md:mt-3"
      >
        Microsoft OneDrive
      </div>
      <div
        className="font-light ml-1 mt-2 md:w-80 md:leading-[1.75rem] md:text-base md:font-normal"
      >
        Save your files and photos to OneDrive and access them from any
        device,laptop or anywhere
      </div>
      <p className="text-lg text-blue-700 font-medium ml-1 mt-2 tracking-wide">
        Learn more 
      </p>
    </div>
    <div className="card mt-7 mx-3">
      <img src="./laptop.avif" className="w-[25rem] h-[13rem] md:w-[19rem] md:h-[11.5rem]" />
      <div
        className="text-xl font-medium ml-1 w-80 mx-3 mt-3 md:text-2xl md:font-semibold tracking-wide md:mt-3"
      >
        One Note
      </div>
      <div
        className="font-light ml-1 mt-2 md:w-80 md:leading-[1.75rem] md:text-base md:font-normal"
      >
        Organize your notes and your life
      </div>
      <p className="text-lg text-blue-700 font-medium ml-1 mt-2 tracking-wide">
        Learn more
      </p>
    </div>
  </div>
  
   )
}
export default Cards