function Below(){
    const styles = {
        backgroundImage: "url('./picmicrosoft.webp')",
        backgroundSize: '100% 100%',
      };
    return (
        <div
       style={styles}
        className="hidden bg-center h-[30rem] mx-20 mt-24 md:flex flex-col justify-center pl-32"
      >
        <div className="text-4xl font-semibold w-80">Outlook for ioS and Android</div>
        <div className="text-lg font-light pt-6 tracking-wider">
          Connect. Organise. Get things done
        </div>
        <div>
          <button
            className="bg-blue-600 text-white text-lg font-bold mt-5 px-4 py-2 rounded-sm"
          >
            Download now
          </button>
        </div>
      </div>
   
    )
}
export default Below