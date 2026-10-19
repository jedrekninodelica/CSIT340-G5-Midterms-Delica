function Hero({ stars, downloads, issues, handleStar, handleDownload, handleReport, handleReset }) {
  
  return (
    <>
    <header className="px-20 pt-8 text-center">
      </header>

      <div className="flex justify-center gap-4 py-6">
        <button
          className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleStar}
        >
          Star
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleDownload}
        >
          Download
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleReport}
        >
          Report issue
        </button>
        <button
          className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center gap-6 pb-8">
        <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
          <p className="text-4xl font-bold">{stars}</p>
          <p className="mt-1 text-lg text-[#000000]">Stars</p>
        </div>
        <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
          <p className="text-4xl font-bold">{downloads}</p>
          <p className="mt-1 text-lg text-[#000000]">Downloads</p>
        </div>
        <div className="w-48 rounded-xl bg-[#F3E6D5] py-4 text-center">
          <p className="text-4xl font-bold">{issues}</p>
          <p className="mt-1 text-lg text-[#000000]">Issues reported</p>
        </div>
      </div>

    </>
  );
}

export default Hero;
